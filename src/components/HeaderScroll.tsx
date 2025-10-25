"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeaderScroll() {
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [logoSrc, setLogoSrc] = useState<string>("/images/logo.svg"); 

  useEffect(() => {
    const handleScroll = () => {
      const transparent = window.scrollY < 10;
      setIsTransparent(transparent);
      setLogoSrc(transparent ? "/images/logo.svg" : "/images/logo-blue.svg");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent shadow-none"
          : "bg-black/15 backdrop-blur-md shadow-lg"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Логотип - теперь с динамическим src */}
          <div className="flex max-w-xl items-center p-0 mt-0">
            <Image
              src={logoSrc} // Используем динамический src
              alt="Мурман-Дизель"
              width={150}
              height={150}
              className="w-40 h-10 object-cover object-center transition-all duration-300" // Добавляем плавность
            />
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a
              href="#main"
              className={`${
                isTransparent ? "text-white/90" : "text-white"
              } hover:text-primary transition-colors text-sm lg:text-base`}
            >
              Главная
            </a>
            <a
              href="#service"
              className={`${
                isTransparent ? "text-white/90" : "text-white"
              } hover:text-primary transition-colors text-sm lg:text-base`}
            >
              Услуги
            </a>
            <a
              href="#contact"
              className={`${
                isTransparent ? "text-white/90" : "text-white"
              } hover:text-primary transition-colors text-sm lg:text-base`}
            >
              Контакты
            </a>
            <a
              href="#about"
              className={`${
                isTransparent ? "text-white/90" : "text-white"
              } hover:text-primary transition-colors text-sm lg:text-base`}
            >
              Фото
            </a>
            <a
              href="#reviews"
              className={`${
                isTransparent ? "text-white/90" : "text-white"
              } hover:text-primary transition-colors text-sm lg:text-base`}
            >
              Отзывы
            </a>

            <button
              className={`font-bold cursor-pointer px-3 py-2 lg:px-4 lg:py-2 rounded-3xl transition-colors text-sm lg:text-base ${
                isTransparent
                  ? "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                  : "bg-primary hover:bg-primary/90 text-white"
              }`}
            >
              Оставить заявку
            </button>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            className="md:hidden text-white p-2"
            onClick={handleMobileMenuToggle}
            aria-label="Открыть меню"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#hero"
                className={`${
                  isTransparent ? "text-white/70" : "text-foreground/70"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Главная
              </a>
              <a
                href="#services"
                className={`${
                  isTransparent ? "text-white/70" : "text-foreground/70"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Услуги
              </a>
              <a
                href="#contacts"
                className={`${
                  isTransparent ? "text-white/70" : "text-foreground/70"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Контакты
              </a>
              <a
                href="#gallery"
                className={`${
                  isTransparent ? "text-white/70" : "text-foreground/70"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Фото
              </a>
              <a
                href="#articles"
                className={`${
                  isTransparent ? "text-white/70" : "text-foreground/70"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Статьи
              </a>
              <a
                href="#reviews"
                className={`${
                  isTransparent ? "text-white/70" : "text-foreground/70"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Отзывы
              </a>
              <button
                className={`font-bold cursor-pointer px-4 py-3 rounded-lg transition-colors mt-2 ${
                  isTransparent
                    ? "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
                onClick={handleNavLinkClick}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}