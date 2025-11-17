import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";

type IncomingData = {
  modalKind?: string;
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  car?: string;
  message?: string;
  comment?: string;
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}
function pickStr(obj: Record<string, unknown>, key: keyof IncomingData) {
  const val = obj[key as string];
  return typeof val === "string" && val.trim() ? val.trim() : undefined;
}

export async function POST(req: NextRequest) {
  const BOT = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT = process.env.TELEGRAM_CHAT_ID;

  if (!BOT || !CHAT) {
    return NextResponse.json(
      { ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
      { status: 500 }
    );
  }

  // безопасно читаем JSON без any
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    raw = {};
  }
  const src = isRecord(raw) ? raw : {};

  const data: IncomingData = {
    modalKind: pickStr(src, "modalKind"),
    name:     pickStr(src, "name"),
    phone:    pickStr(src, "phone"),
    email:    pickStr(src, "email"),
    service:  pickStr(src, "service"),
    car:      pickStr(src, "car"),
    message:  pickStr(src, "message"),
    comment:  pickStr(src, "comment"),
  };

  const rows: string[] = ["🧾 Новая заявка с сайта"];
  if (data.modalKind) rows.push(`Форма: ${data.modalKind}`);
  if (data.name)      rows.push(`Имя: ${data.name}`);
  if (data.phone)     rows.push(`Телефон: ${data.phone}`);
  if (data.email)     rows.push(`Email: ${data.email}`);
  if (data.service)   rows.push(`Услуга: ${data.service}`);
  if (data.car)       rows.push(`Авто: ${data.car}`);
  if (data.message)   rows.push(`Сообщение: ${data.message}`);
  if (data.comment)   rows.push(`Комментарий: ${data.comment}`);

  const text = rows.join("\n");

 try {
  async function send(chatId: string) {
    const r = await fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true
      }),
    });

    const json = await r.json();

    // Миграция
    if (!json.ok && json.parameters?.migrate_to_chat_id) {
      const newChatId = json.parameters.migrate_to_chat_id.toString();

      console.log("🔄 Группа мигрировала! Новый chat_id:", newChatId);

      // Повторная отправка
      return send(newChatId);
    }

    return {
      ok: json.ok,
      status: r.status,
      body: json
    };
  }

  const result = await send(CHAT);
  return NextResponse.json(result);

} catch (err) {
  const msg = err instanceof Error ? err.message : "Unexpected error";
  return NextResponse.json({ ok: false, error: msg }, { status: 500 });
}

}
