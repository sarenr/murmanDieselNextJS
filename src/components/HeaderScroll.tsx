"use client";

import Image from "next/image";
import { useEffect, useState, } from "react";
import { useFormModal } from "@/components/useFormModal";

export default function HeaderScroll() {
  // ====== Логика хедера (как была): прозрачность, логотип, мобильное меню
  const [isTransparent, setIsTransparent] = useState(true);
  const [logoSrc, setLogoSrc] = useState("/images/logo.svg");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   
  useEffect(() => {
    const handleScroll = () => {
      const transparent = window.scrollY < 10;
      setIsTransparent(transparent);
      setLogoSrc(transparent ? "/images/logo.svg" : "/images/logo-blue.svg");
    };
    handleScroll(); // инициализация
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setIsMobileMenuOpen((v) => !v);
  const closeMobile = () => setIsMobileMenuOpen(false);

  // ====== Хук формы (единая логика на проект)
  const {
    isFormOpen,
    formData,
    errors,
    openFormWithService,
    closeForm,
    handleInputChange,
    handleSubmit,
    setPhone,
    handlePhonePaste,
    isSubmitting 
  } = useFormModal();
  // Нажатие кнопки в шапке: открываем общую модалку, проставив «источник»
  const openHeaderForm = () => openFormWithService("Заявка из шапки");
  const inputClass = (name: keyof typeof formData) =>
  `w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 
  focus:ring-1 focus:ring-blue-500 transition-colors"
   ${errors[name]
     ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500"
     : "border-gray-600 focus:border-blue-500 focus:ring-blue-500"}`;
  return (
    <>
      {/* ====== Header / Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent ? "bg-transparent shadow-none" : "bg-black/15 backdrop-blur-md shadow-lg"
        }`}
      >
        <nav className="max-w-8xl py-2
                        mx-5 
                        sm:mx-5 
                        md:mx-5
                         lg:mx-12 
                        xl:mx-48   
                        2xl:mx-48  ">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <div className="flex items-center">
              <Image
                src={logoSrc}
                alt="Мурман-Дизель"
                width={160}
                height={150}
                className="w-50 h-12 object-cover object-center transition-all duration-300"
                priority
              />
            </div>

            {/* Десктопное меню */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a
                href="#main"
                className={`${isTransparent ? "text-white/90" : "text-white"} hover:text-primary transition-colors text-sm lg:text-base`}
              >
                Главная
              </a>
              <a
                href="#service"
                className={`${isTransparent ? "text-white/90" : "text-white"} hover:text-primary transition-colors text-sm lg:text-base`}
              >
                Услуги
              </a>
               <a
                href="#photo"
                className={`${isTransparent ? "text-white/90" : "text-white"} hover:text-primary transition-colors text-sm lg:text-base`}
              >
                Фото
              </a>
              <a
                href="#contact"
                className={`${isTransparent ? "text-white/90" : "text-white"} hover:text-primary transition-colors text-sm lg:text-base`}
              >
                Контакты
              </a>
              <button
                className={`font-bold cursor-pointer px-3 py-2 lg:px-4 lg:py-2 rounded-3xl transition-colors text-sm lg:text-base ${
                  isTransparent
                    ? "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
                onClick={openHeaderForm}
              >
                Оставить заявку
              </button>
            </div>

            {/* Мобильная кнопка */}
            <button
              className="md:hidden text-white p-2"
              onClick={toggleMobile}
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
                  href="#main"
                  className={`${isTransparent ? "text-white/70" : "text-white/80"} hover:text-primary transition-colors py-2`}
                  onClick={closeMobile}
                >
                  Главная
                </a>
                <a
                  href="#service"
                  className={`${isTransparent ? "text-white/70" : "text-white/80"} hover:text-primary transition-colors py-2`}
                  onClick={closeMobile}
                >
                  Услуги
                </a>
                <a
                  href="#photo"
                  className={`${isTransparent ? "text-white/70" : "text-white/80"} hover:text-primary transition-colors py-2`}
                  onClick={closeMobile}
                >
                  Фото
                </a>
                <a
                  href="#contact"
                  className={`${isTransparent ? "text-white/90" : "text-white/80"} hover:text-primary transition-colors py-2`}
                  onClick={closeMobile}
                >
                  Контакты
                </a>               
                <button
                  className={`font-bold cursor-pointer px-4 py-3 rounded-lg transition-colors mt-2 ${
                    isTransparent
                      ? "bg-primary hover:bg-primay/80 text-white backdrop-blur-sm"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                  onClick={() => {
                    openHeaderForm();
                    closeMobile();
                  }}
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ====== Модалка формы: полностью на useFormModal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-black text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center relative">
                {/* Кнопка закрытия */}
                <button
                  onClick={closeForm}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full"
                  aria-label="Закрыть окно"
                >
                  ×
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Узнать стоимость ремонта за 5 минут
                  </h2>
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
                      className={inputClass("name")}
                      placeholder="Введите ваше имя"
                      required
                    />
                     {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                   {/* Телефон — с нормализацией и защитой paste */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
                      Контактный телефон
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setPhone(e.target.value)} // нормализация → +7XXXXXXXXXX
                      onPaste={handlePhonePaste}                  // чистим вставки
                      placeholder="+7ХХХХХХХХ"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={12}                 // "+7" + 10 цифр
                      pattern={"^\\+7\\d{10}$"}      // нативная проверка браузера
                      required
                      aria-invalid={!!errors.phone}
                      className={inputClass("phone")}                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
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


                  <button
                  type="submit"
                  disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
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
