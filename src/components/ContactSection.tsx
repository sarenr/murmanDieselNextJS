"use client";

import { FormData } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";
import { Map } from 'lucide-react';
import { Clock3 } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { useFormModal } from "@/components/useFormModal";
import { ReactNode } from "react";

export default function ContactSection() {
  const {
    handleSubmitCallback,
    formData,
    errors,
    openFormWithService,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    setPhone,
    handlePhonePaste,
  } = useFormModal();

    const handleOpenForm = (serviceName: string) => {
    openFormWithService(serviceName);
  };
  return (
    <>
         {/* форма в начале секции */}
          <div className="bg-gradient-to-l from-blue-950 via-[#0a0a0a] to-blue-950 rounded-none sm:rounded-none p-6 sm:p-8 lg:p-12 text-center relative">
    <div className="pt-20 mtext-center mb-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
        Узнать стоимость ремонта за 5 минут
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
        Оставьте заявку прямо сейчас, мы свяжемся с Вами и сообщим
        стоимость ремонта!
      </p>
    </div>

    <form
    onSubmit={handleSubmitCallback}  noValidate
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
        
        <input
          name="phone"
                          value={formData.phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onPaste={handlePhonePaste}
                          placeholder="+7 (___)-__-___-___"
                          autoComplete="tel"
                          inputMode="numeric"   // цифровая клавиатура на мобиле
                          maxLength={12}        // "+7" + 10 цифр
                          pattern={"^\\+7\\d{10}$"} // нативная проверка браузера
                          required
                          aria-invalid={!!errors.phone}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg
                           text-white placeholder-gray-400 focus:outline-none
                            focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                             transition-colors"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        </label>
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
        <div className="flex gap-4 pt-4 pb-20">
                     <button
                  type="submit"
                  disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </button>
          </div>
    </form>
  </div>
  
      {/* Секция с контактами */}
      <div className=" bg-blue-600 text-white relative overflow-hidden">
        {/* Источник света сверху по центру - адаптивный */}
        <div className="absolute -top-150 left-1/2 transform -translate-x-1/2 
                        w-100 h-100 
                        md:w-100 md:h-150 
                        lg:w-100 lg:h-200 
                        xl:w-150 xl:h-250 
                        2xl:w-150 2xl:h-300
                       bg-gradient-to-b from-white/90 via-white/20 to-transparent rounded-full blur-3xl z-0 "></div>

        {/* Оглавление */}
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 
                        py-2 sm:py-4 md:py-10 lg:py-6 xl:py-7 2xl:py-10 relative z-10">
          

          
          <div className="pt-10  text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20  mx-5">
            <h1 className="text-2xl 
                            sm:text-4xl
                            md:text-4xl
                            lg:text-3xl 
                            xl:text-4xl 
                            2xl:text-5xl 
                            font-bold mb-4">
              Контакты
            </h1>
            <p className="text-lg 
                          sm:text-2xl
                          md:text-sx  
                          lg:text-xl 
                          xl:text-xl 
                          2xl:text-2xl">
              Мы всегда на связи, выберете удобный способ с нами связаться!
            </p>
          </div>

          {/* Таблица контактов - адаптивная сетка */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 lg:mb-12 xl:mb-16 mx-5">
            
            {/* Время */}
            <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                  w-300 h-300 
                  lg:w-350 lg:h-350 
                  xl:w-400 xl:h-400 
                  2xl:w-450 2xl:h-450 
                  bg-white/35 rounded-full blur-[80px] z-0"></div>
                              
              <div className="w-full text-center">
                <h1 className="text-xl sm:text-3xl 
                                       md:text-3xl 
                                       lg:text-xl 
                                       xl:text-2xl 
                                       2xl:text-2xl font-bold mb-4 lg:mb-6">
                  Рабочие часы
                </h1>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  Понедельник - Пятница 
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm  mb-1 lg:mb-2">
                  10:00-18:00
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  Суббота
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm  mb-1 lg:mb-2">
                  10:00-17:00
                </p>
              </div>

              <div className="absolute inset-0 flex justify-center items-center top-70
                                                                                sm:top-90
                                                                                md:top-90 
                                                                                lg:top-80 
                                                                                xl:top-85
                                                                                2xl:top-90">
                <div className="relative w-65 h-65 
                sm:w-75 sm:h-75
                md:w-50 md:h-50
                lg:w-40 lg:h-40 
                xl:w-50 xl:h-50  
                2xl:w-100 2xl:h-100 
                transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <Clock3 className="w-full h-full object-contain text-white/80" strokeWidth={0.5} />
              </div>
              </div>
            </div>

            {/* Мессенджеры */}
            <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                  w-300 h-300 
                  lg:w-350 lg:h-350 
                  xl:w-400 xl:h-400 
                  2xl:w-450 2xl:h-450 
                  bg-white/35 rounded-full blur-[80px] z-0"></div>
              
              <div className="w-full text-center">
                <h1 className="text-xl sm:text-3xl 
                                       md:text-3xl 
                                       lg:text-xl 
                                       xl:text-2xl 
                                       2xl:text-2xl font-bold mb-4 lg:mb-6">
                  Мессенджеры
                </h1>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  WhatsApp 
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm  mb-1 lg:mb-2">
                  +7(953)302-30-22
                </p>  
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  Telegramm
                </p>
                 
                <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm  mb-1 lg:mb-2">
                  @TelegrammAcount
                </p>
              </div>

               <div className="absolute inset-0 flex justify-center items-center top-70
                                                                                sm:top-90
                                                                                md:top-90 
                                                                                lg:top-80 
                                                                                xl:top-85
                                                                                2xl:top-90">
                <div className="relative w-65 h-65 
                sm:w-75 sm:h-75
                md:w-50 md:h-50
                lg:w-40 lg:h-40 
                xl:w-50 xl:h-50  
                2xl:w-100 2xl:h-100 
                transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <SquareArrowOutUpRight className="w-full h-full object-contain text-white/80" strokeWidth={0.5} />
              </div>
              </div>
            </div>

            {/* Почта */}
            <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                  w-300 h-300 
                  lg:w-350 lg:h-350 
                  xl:w-400 xl:h-400 
                  2xl:w-450 2xl:h-450 
                  bg-white/35 rounded-full blur-[80px] z-0"></div>
              
              <div className="w-full text-center">
                <h1 className="text-xl sm:text-3xl 
                                       md:text-3xl 
                                       lg:text-xl 
                                       xl:text-2xl 
                                       2xl:text-2xl font-bold mb-4 lg:mb-6">
                       Почта
                </h1>
                 <p className="text-lg 
                              sm:text-xm
                              md:text-xm  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm  mb-1 lg:mb-2">
                  murmandiesel@ya.ru
                </p>
              </div>

              <div className="absolute inset-0 flex justify-center items-center top-70
                                                                                sm:top-90
                                                                                md:top-90 
                                                                                lg:top-80 
                                                                                xl:top-85
                                                                                2xl:top-90">
                <div className="relative w-65 h-65 
                sm:w-75 sm:h-75
                md:w-50 md:h-50
                lg:w-40 lg:h-40 
                xl:w-50 xl:h-50  
                2xl:w-100 2xl:h-100 
                transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <AtSign className="w-full h-full object-contain text-white/80" strokeWidth={0.5} />
              </div>
              </div>
            </div>

            {/* Карта */}
             <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                  w-300 h-300 
                  lg:w-350 lg:h-350 
                  xl:w-400 xl:h-400 
                  2xl:w-450 2xl:h-450 
                  bg-white/35 rounded-full blur-[80px] z-0"></div>
              
              <div className="w-full text-center">
                <h1 className="text-xl sm:text-3xl 
                                       md:text-3xl 
                                       lg:text-xl 
                                       xl:text-2xl 
                                       2xl:text-2xl font-bold mb-4 lg:mb-6">
                  Адресс
                </h1>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm  mb-1 lg:mb-2">
                   г. Мурманск, Кооперативная 4/4
                </p>
              </div>

               <div className="absolute inset-0 flex justify-center items-center top-70
                                                                                sm:top-90
                                                                                md:top-90 
                                                                                lg:top-80 
                                                                                xl:top-85
                                                                                2xl:top-90">
                <div className="relative w-65 h-65 
                sm:w-75 sm:h-75
                md:w-50 md:h-50
                lg:w-40 lg:h-40 
                xl:w-50 xl:h-50  
                2xl:w-100 2xl:h-100 
                transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <Map className="w-full h-full object-contain text-white/80" strokeWidth={0.5} />
              </div>
              </div>
            
            </div>
        </div>
         {/* YandexMap */}
                  <div className="w-full h-80 
                    sm:h-80 
                    md:h-100 
                    lg:h-150
                    xl:h-180 
                    2xl:h-200 
                    rounded-lg overflow-hidden">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9bb9ef349dd8d170f4d774ef044ff68d2191f18f13d23524a91b223a019d9fe"
                      width="100%"
                      height="100%"
                      className="rounded-lg"
                      allowFullScreen
                    ></iframe>
                  </div>
          </div>
      </div>
    </>
  );
}