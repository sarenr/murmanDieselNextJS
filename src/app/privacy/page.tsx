import Link from "next/link";

export const metadata = {
  title: "Политика конфиденциальности — MurmanDiesel",
  description:
    "Политика конфиденциальности MurmanDiesel — как мы обрабатываем и защищаем персональные данные пользователей.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
        Политика конфиденциальности
        </h1>
        <Link
          href="/"
          className="ml-4 inline-block px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 text-sm font-medium"
        >
          Вернуться на главную
        </Link>
      </div>
      <p className="mb-4">
        Настоящая Политика конфиденциальности определяет порядок обработки и
        защиты персональных данных пользователей сайта ООО «Мурман-Дизель».
      </p>
      <p className="mb-4">
        Мы собираем и храним только те данные, которые необходимы для
        предоставления услуг, обратной связи и улучшения качества обслуживания.
      </p>
      <p className="mb-4">
        Пользователь может в любой момент запросить удаление своих персональных
        данных, отправив запрос на электронную почту, указанную в разделе
        «Контакты».
      </p>
      <p>
        Используя сайт, пользователь подтверждает согласие с данной Политикой.
      </p>
    </main>
  );
}
