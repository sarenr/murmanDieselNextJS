// src/app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeaderScroll from "@/components/HeaderScroll";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import CardCarouselSlick from  "@/components/CardCarousel";
import Script from "next/script";

export default function Home() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://murman-diesel.ru/#murman-diesel",
    "name": "MurmanDiesel",
    "url": "https://murman-diesel.ru/",
    "image": "https://murman-diesel.ru/images/og/murmandiesel-og.jpg",
    "telephone": "+7-911-300-17-55",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Мурманск",
      "addressRegion": "Мурманская область",
      "addressCountry": "RU"
    },
    "areaServed": "Мурманск",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "10:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "17:00" }
    ],
    "priceRange": "₽₽",
    "description": "Диагностика и ремонт дизельных форсунок Bosch, Delphi, Denso в Мурманске. Стенд, калибровка, кодировка. Гарантия."
  };

  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://murman-diesel.ru#murman-diesel",
    "url": "https://murman-diesel.ru/",
    "name": "MurmanDiesel",
    "inLanguage": "ru-RU",
    "publisher": { "@id": "https://murman-diesel.ru/#murman-diesel" },
    // "potentialAction": {
    //   "@type": "SearchAction",
    //   "target": "https://murmandiesel.ru/search/?text={search_term_string}",
    //   "query-input": "required name=search_term_string"
    // }
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://murman-diesel.ru/" }
    ]
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Услуги MurmanDiesel",
    "itemListElement": [
      { "@type": "Service", "name": "Ремонт дизельных форсунок", "provider": { "@id": "https://murman-diesel.ru/#organization" }, "url": "https://murman-diesel.ru/#service" },
      { "@type": "Service", "name": "Диагностика форсунок", "provider": { "@id": "https://murman-diesel.ru/#organization" }, "url": "https://murman-diesel.ru/#service" },
      { "@type": "Service", "name": "Ремонт топливной системы", "provider": { "@id": "https://murman-diesel.ru/#organization" }, "url": "https://murman-diesel.ru/#service" }
    ]
  };

  return (
    <div className="relative h-full scroll-smooth">
      <section id="main">
        <HeaderScroll />
      </section>

      <section id="hero" >
        <HeroSection />
      </section>

      <section id="service">
        <ServiceSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="photo">
        <CardCarouselSlick />
      </section>

      <section>
        <ContactSection />
      </section>

      <FooterSection />

      {/* JSON-LD */}
      <Script id="ld-org" 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd).replace(/</g, '\\u003c') }} />


      <Script id="ld-website"
       type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd).replace(/</g, '\\u003c') }} />


      <Script 
      id="ld-breadcrumbs" 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd).replace(/</g, '\\u003c') }} />


      <Script id="ld-services"
       type="application/ld+json" 
       dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd).replace(/</g, '\\u003c') }} />
    </div>
  );
}
