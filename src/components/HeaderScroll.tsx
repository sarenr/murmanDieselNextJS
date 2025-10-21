'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeaderScroll() {
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent 
        ? 'bg-transparent shadow-none' 
        : 'bg-black/15 backdrop-blur-md shadow-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          
          {/* Логотип */}
          <div className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Мурман-Дизель" 
              width={150}
              height={150}
              
            />
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="#hero" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Главная</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Услуги</a>
            <a href="#contacts" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Контакты</a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Фото</a>
            <a href="#articles" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Статьи</a>
            <a href="#reviews" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Отзывы</a>
            
            <button className="font-bold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg transition-colors text-sm lg:text-base">
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                Главная
              </a>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                Услуги
              </a>
              <a 
                href="#contacts" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                Контакты
              </a>
              <a 
                href="#gallery" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                Фото
              </a>
              <a 
                href="#articles" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                Статьи
              </a>
              <a 
                href="#reviews" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                Отзывы
              </a>
              <button 
                className="font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors mt-2"
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