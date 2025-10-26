'use client';
import Image from "next/image";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from '@/components/CookieConsent';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

// Перенеси metadata в клиентский компонент или используй generateMetadata
// export const metadata: Metadata = {
//   title: "Мурман-Дизель",
//   description: "Ремонт дизельных двигателей в Мурманске",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Спиннер
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <html lang="ru">
      <head>
        <title>Мурман-Дизель</title>
        <meta name="description" content="Ремонт дизельных двигателей в Мурманске" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Спиннер*/}
        {loading && (
          <div className="mt-50 fixed inset-0 bg-background flex justify-center items-center z-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-40 w-40 border-b-6 border-primary mx-auto mb-4"></div>
              <div className="pl-10 flex justify-center items-start relative w-100 h-100">
                                <Image
                                  src="/images/logo-blue.svg" 
                                  alt="Телефон"
                                  width={300}
                                  height={200}
                                />
                              </div>
            </div>
          </div>
        )}
        
        {/* Основной контент */}
        <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
          {children}
        </div>
        
        <CookieConsent />
        
        {/* Яндекс.Метрика */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

              ym(104725408, 'init', {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/104725408" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}