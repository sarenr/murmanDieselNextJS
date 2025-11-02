import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://murmandiesel.ru"),
  title: {
    default: "Ремонт дизельных форсунок в Мурманске | MurmanDiesel",
    template: "%s | MurmanDiesel",
  },
  description:
    "Профессиональный ремонт и диагностика дизельных форсунок Bosch, Delphi и Denso в Мурманске. Оригинальные детали, стенд, кодировка, гарантия.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://murmandiesel.ru/",
    siteName: "MurmanDiesel",
    title: "MurmanDiesel — ремонт дизельных форсунок в Мурманске",
    description:
      "Диагностика на стенде, ремонт форсунок Bosch/Delphi/Denso. Сроки от 1 дня. Гарантия.",
    images: [
      {
        url: "/og/murmandiesel-og.jpg",
        width: 1200,
        height: 630,
        alt: "MurmanDiesel — ремонт дизельных форсунок в Мурманске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ремонт дизельных форсунок в Мурманске | MurmanDiesel",
    description:
      "Стенд, калибровка, кодировка. Оригинальные детали, гарантия.",
    images: ["/og/murmandiesel-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
