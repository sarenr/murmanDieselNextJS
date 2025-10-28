"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent,useEffect, useState } from "react";
import { FormData } from "@/types";

export default function HeaderScroll() {
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [logoSrc, setLogoSrc] = useState<string>("/images/logo.svg"); 
const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    car: "",
  });
  const [callbackFormData, setCallbackFormData] = useState({
    name: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCallbackInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setCallbackFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setCallbackFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    setIsFormOpen(false);
    setFormData({ name: "", phone: "", car: "" });
  };
   const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length === 0) return "+7 (";
    if (numbers.length <= 1) return `+7 (${numbers}`;
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
    if (numbers.length <= 7)
      return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9)
      return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(
        4,
        7
      )}-${numbers.slice(7, 9)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(
      7,
      9
    )}-${numbers.slice(9, 11)}`;
  };
   const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedPhone = formatPhone(value);
    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
    }));
  };

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
    <>
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
          <div className="flex items-center p-0 mt-0">
            <Image
              src={logoSrc} // Используем динамический src
              alt="Мурман-Дизель"
              width={160}
              height={150}
              className="w-45 h-10 object-cover object-center transition-all duration-300" // Добавляем плавность
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
              onClick={() => setIsFormOpen(true)}
              
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
                  isTransparent ? "text-white/70" : "text-white/80"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Главная
              </a>
              <a
                href="#services"
                className={`${
                  isTransparent ? "text-white/70" : "text-white/80"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Услуги
              </a>
              <a
                href="#contacts"
                className={`${
                  isTransparent ? "text-white/70" : "text-white/80"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Контакты
              </a>
              <a
                href="#gallery"
                className={`${
                  isTransparent ? "text-white/70" : "text-white/80"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Фото
              </a>
              <a
                href="#articles"
                className={`${
                  isTransparent ? "text-white/70" : "text-white/80"
                } hover:text-primary transition-colors py-2`}
                onClick={handleNavLinkClick}
              >
                Статьи
              </a>
              <a
                href="#reviews"
                className={`${
                  isTransparent ? "text-white/70" : "text-white/80"
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
                 onClick={() => setIsFormOpen(true)}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>

      {/* Модальное окно с формой - ПЕРЕМЕЩЕНО ВНУТРЬ RETURN */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-black text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center relative">
                {/* Кнопка закрытия */}
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full"
                  aria-label="Закрыть окно"
                >
                  ×
                </button>

                <div className="text-center mb-8">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Узнать стоимость ремонта за 5 минут
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    Оставьте заявку прямо сейчас, мы свяжемся с Вами и сообщим
                    стоимость ремонта!
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  {/* Имя */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-base sm:text-lg font-medium mb-2 text-left"
                    >
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>

                  {/* Телефон */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white text-base sm:text-lg font-medium mb-2 text-left"
                    >
                      Контактный телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="+7 (___)-___-__-__"
                      required
                    />
                  </div>

                  {/* Автомобиль */}
                  <div>
                    <label
                      htmlFor="car"
                      className="block text-white text-base sm:text-lg font-medium mb-2 text-left"
                    >
                      Марка автомобиля и год выпуска
                    </label>
                    <input
                      type="text"
                      id="car"
                      name="car"
                      value={formData.car}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Например: Toyota Camry 2018"
                      required
                    />
                  </div>

                  {/* Чекбокс согласия */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                      required
                    />
                    <label
                      htmlFor="privacy"
                      className="text-gray-300 text-sm text-left"
                    >
                      Я даю согласие на обработку персональных данных и
                      соглашаюсь с условиями политики конфиденциальности.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}