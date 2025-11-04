import Link from "next/link";

export const metadata = {
  title: "Политика использования Cookies — MurmanDiesel",
  description:
    "Информация о использовании файлов cookie на сайте MurmanDiesel и как управлять настройками cookie.",
  alternates: { canonical: "/cookie" },
};

export default function CookiePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-foreground">
        Политика использования Cookies
      </h1>
      {/* content paragraphs */}
      <p className="mb-4">
        Наш сайт использует файлы cookie для обеспечения корректной работы и
        улучшения пользовательского опыта.
      </p>
      <p className="mb-4">
        Cookie — это небольшие текстовые файлы, которые сохраняются в браузере
        пользователя и помогают нам анализировать использование сайта, запоминать
        настройки и предоставлять персонализированный контент.
      </p>
      <p className="mb-4">
        Пользователь может отключить использование cookie в настройках браузера,
        однако это может ограничить функциональность сайта.
      </p>
      <p>
        Продолжая использование сайта, вы соглашаетесь с нашей политикой в
        отношении файлов cookie.
      </p>

      <div className="mt-8">
        <Link
           href="/"
          aria-label="Вернуться на главную"
          className="inline-flex items-center gap-2 border border-foreground text-foreground px-4 py-2 rounded-md hover:bg-foreground/10 transition-colors"
        >
          ← На главную
        </Link>
      </div>
    </main>
  );
}
