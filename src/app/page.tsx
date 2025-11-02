// src/app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeaderScroll from "@/components/HeaderScroll";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import CardCarouselSection from "@/components/CardCarousel";
import Script from "next/script";

export default function Home() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://murmandiesel.ru/#organization",
    "name": "MurmanDiesel",
    "url": "https://murmandiesel.ru/",
    "image": "https://murmandiesel.ru/og/murmandiesel-og.jpg",
    "telephone": "+7-XXX-XXX-XX-XX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Мурманск",
      "addressRegion": "Мурманская область",
      "addressCountry": "RU"
    },
    "areaServed": "Мурманск",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
    ],
    "priceRange": "₽₽",
    "description": "Диагностика и ремонт дизельных форсунок Bosch, Delphi, Denso в Мурманске. Стенд, калибровка, кодировка. Гарантия."
  };

  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://murmandiesel.ru/#website",
    "url": "https://murmandiesel.ru/",
    "name": "MurmanDiesel",
    "inLanguage": "ru-RU",
    "publisher": { "@id": "https://murmandiesel.ru/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://murmandiesel.ru/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://murmandiesel.ru/" }
    ]
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Услуги MurmanDiesel",
    "itemListElement": [
      { "@type": "Service", "name": "Ремонт дизельных форсунок", "provider": { "@id": "https://murmandiesel.ru/#organization" }, "url": "https://murmandiesel.ru/#service" },
      { "@type": "Service", "name": "Диагностика форсунок", "provider": { "@id": "https://murmandiesel.ru/#organization" }, "url": "https://murmandiesel.ru/#service" },
      { "@type": "Service", "name": "Ремонт топливной системы", "provider": { "@id": "https://murmandiesel.ru/#organization" }, "url": "https://murmandiesel.ru/#service" }
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
        <CardCarouselSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <FooterSection />

      {/* JSON-LD */}
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <Script id="ld-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
    </div>
  );
}
