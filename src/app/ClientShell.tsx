"use client";

import CookieConsent from "@/components/CookieConsent";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-background flex justify-center items-center z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-40 w-40 border-b-4 border-primary mx-auto mb-4"></div>
            <div className="flex justify-center">
              <Image
                src="/images/logo-blue.svg"
                alt="MurmanDiesel"
                width={300}
                height={200}
                priority
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={
          loading ? "opacity-0" : "opacity-100 transition-opacity duration-300"
        }
      >
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
            ym(104725408, 'init', { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
          `,
        }}
      />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://mc.yandex.ru/watch/104725408"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      {/* Top.Mail.Ru counter + fallback no js enabled */}
      {/* https://top.mail.ru/help/ru/code/ajax */}
      <Script
        id="top-mail-ru-counter"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _tmr = window._tmr || (window._tmr = []);
            _tmr.push({id: "3729400", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"});
            (function (d, w, id) {
              if (d.getElementById(id)) return;
              var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
              ts.src = "https://top-fwz1.mail.ru/js/code.js";
              var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
              if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
            })(document, window, "tmr-code");
          `,
        }}
      />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://top-fwz1.mail.ru/counter?id=3729400;js=na"
            style={{ position: "absolute", left: "-9999px" }}
            alt="Top.Mail.Ru"
          />
        </div>
      </noscript>
    </>
  );
}
