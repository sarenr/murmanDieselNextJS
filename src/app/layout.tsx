import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";
import { Toaster } from "react-hot-toast";
import  ScrollToTop  from "../components/ScrollTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
     keywords: [
    "ремонт форсунок мурманск",
    "диагностика дизельных форсунок",
    "ремонт топливной системы дизеля",
    "MurmanDiesel",
    "Common Rail",
    "форсунки Bosch ремонт",
    "форсунки Delphi ремонт",
    "Ремонт дизельных двигателей",
    "ремонт форсунок Denso",
    "ремонт дизельной техники мурманск",
    "форсунки мурманск",
    "ремонт топливных форсунок мурманск",
    "автосервис дизель мурманск",
    "ремонт турбин дизельных двигателей",
    "форсунки ремонт гарантия",
  ],
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
        url: "images/og/murmandiesel-og.jpg",
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
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) { 
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
          <ScrollToTop />
          <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { background: "#111", color: "#fff" },
          }}
        />
        <ClientShell>
          {children}
          </ClientShell>
      </body>
    </html>
  );
}
