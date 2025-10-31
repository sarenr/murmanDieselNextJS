// src/app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeaderScroll from "@/components/HeaderScroll";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import CardCarouselSection from "@/components/CardCarousel";

export default function Home() {
  return (
    <div className="relative h-full scroll-smooth">
      <section id="main">
        <HeaderScroll />
      </section>
      <section id="hero">
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
    </div>
  );
}
