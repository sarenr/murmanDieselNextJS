import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const BOT = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT = process.env.TELEGRAM_CHAT_ID;

  if (!BOT || !CHAT) {
    return NextResponse.json({ ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" }, { status: 500 });
  }

  try {
    const data = await req.json().catch(() => ({} as any));
    const rows = [
      "🧾 Новая заявка с сайта",
      data.modalKind ? `Форма: ${data.modalKind}` : undefined,
      data.name ? `Имя: ${data.name}` : undefined,
      data.phone ? `Телефон: ${data.phone}` : undefined,
      data.email ? `Email: ${data.email}` : undefined,
      data.service ? `Услуга: ${data.service}` : undefined,
      data.car ? `Авто: ${data.car}` : undefined,
      data.message ? `Сообщение: ${data.message}` : undefined,
      data.comment ? `Комментарий: ${data.comment}` : undefined,
    ].filter(Boolean);
    const text = rows.join("\n");

    const r = await fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT, text, disable_web_page_preview: true }),
    });

    const body = await r.text();
    // Возвращаем всё как есть, чтобы ты видел причину
    return NextResponse.json({ ok: r.ok, status: r.status, body });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unexpected error" }, { status: 500 });
  }
}
