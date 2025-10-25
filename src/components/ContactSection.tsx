"use client";

import { FormData } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    car: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  return (
    <>
      {/* Секция с контактами */}
      <div className="bg-primary text-background relative">
        {/* Источник света сверху по центру - адаптивный */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                        w-200 h-100 
                        md:w-300 md:h-150 
                        lg:w-400 lg:h-200 
                        xl:w-500 xl:h-250 
                        2xl:w-600 2xl:h-300 
                        bg-gradient-to-b from-white/60 to-transparent rounded-full blur-3xl z-0"></div>

        {/* Оглавление */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                        py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 relative z-10">
          
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            <h1 className="text-2xl 
                            sm:text-4xl
                            md:text-4xl
                            lg:text-3xl 
                            xl:text-3xl 
                            2xl:text-5xl 
                            
                            
                            font-bold mb-4">
              Контакты
            </h1>
            <p className="text-lg 
                          sm:text-2xl 
                          lg:text-xl 
                          xl:text-xl 
                          2xl:text-2xl">
              Как вы можете связаться с нами
            </p>
          </div>

          {/* Таблица контактов - адаптивная сетка */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 lg:mb-12 xl:mb-16">
            
            {/* Время */}
            <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  bg-primary/10 hover:bg-primary/80 duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 
                              w-300 h-300 
                              lg:w-350 lg:h-350 
                              xl:w-400 xl:h-400 
                              2xl:w-450 2xl:h-450 
                              bg-gradient-to-b from-white/30 to-transparent rounded-full blur-3xl z-0"></div>
              
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
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  Понедельник - Пятница 
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-2 lg:mb-3">
                  10:00-18:00
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  Суббота
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm
                              2xl:text-xm font-bold mb-1 lg:mb-2">
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
                                          2xl:w-60 2xl:h-60 transition-transform duration-300 group-hover:scale-110"> 
                  <Image
                    src="/images/time2.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Мессенджеры */}
            <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  bg-primary/10 hover:bg-primary/80 duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 
                              w-300 h-300 
                              lg:w-350 lg:h-350 
                              xl:w-400 xl:h-400 
                              2xl:w-450 2xl:h-450 
                              bg-gradient-to-b from-white/30 to-transparent rounded-full blur-3xl z-0"></div>
              
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
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  WhatsApp 
                </p>
                <p className="text-lg 
                              sm:text-xm
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  +7(953)302-30-22
                </p>  
                <p className="text-lg 
                              sm:text-xm
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm  
                              2xl:text-xm font-bold mb-1 lg:mb-2">
                  Telegramm
                </p>
                 
                <p className="text-lg 
                              sm:text-xm
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm  
                              2xl:text-xm font-bold mb-1 lg:mb-2">
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
                                          2xl:w-60 2xl:h-60 transition-transform duration-300 group-hover:scale-110"> 
                  <Image
                    src="/images/message2.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Почта */}
            <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  bg-primary/10 hover:bg-primary/80 duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 
                              w-300 h-300 
                              lg:w-350 lg:h-350 
                              xl:w-400 xl:h-400 
                              2xl:w-450 2xl:h-450 
                              bg-gradient-to-b from-white/30 to-transparent rounded-full blur-3xl z-0"></div>
              
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
                              md:text-xl  
                              lg:text-sm 
                              xl:text-xm 
                              2xl:text-xm font-bold mb-1 lg:mb-2">
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
                                          2xl:w-60 2xl:h-60 transition-transform duration-300 group-hover:scale-110"> 
                  <Image
                    src="/images/mail2.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Карта */}
             <div className="w-full h-100 
                                  lg:h-85 
                                  xl:h-90 
                                  2xl:h-100 
                                  bg-primary/10 hover:bg-primary/80 duration-200 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                                                                                                                  lg:p-8 
                                                                                                                  xl:p-10
                                  border border-foreground/10 flex flex-col items-center overflow-hidden relative group">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 
                              w-300 h-300 
                              lg:w-350 lg:h-350 
                              xl:w-400 xl:h-400 
                              2xl:w-450 2xl:h-450 
                              bg-gradient-to-b from-white/30 to-transparent rounded-full blur-3xl z-0"></div>
              
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
                              2xl:text-xm font-bold mb-1 lg:mb-2">
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
                                          2xl:w-60 2xl:h-60 transition-transform duration-300 group-hover:scale-110"> 
                  <Image
                    src="/images/map.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Вопросы? - кликабельная карточка */}
          <div
            className="rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 border-2 border-gray-700 cursor-pointer transition-transform duration-300 hover:scale-105 bg-primary/10 hover:bg-primary/80"
            onClick={() => setIsFormOpen(true)}
          >
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-background mb-2 lg:mb-3">
              Есть вопросы?
            </h3>
            <p className="text-background text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Звоните нам мы поможем!
            </p>
          </div>
        </div>
         {/* YandexMap */}
                <div className="w-100 h-80 
                sm:w-100 sm:h-80 
                md:w-175 md:h-100 
                lg:w-250 lg:h-150 
                xl:w-300 xl:h-180 
                2xl:w-400 2xl:h-200 
                mx-auto rounded-lg overflow-hidden 
                pb-4 md:pb-6 lg:pb-8 xl:pb-10 2xl:pb-12">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9bb9ef349dd8d170f4d774ef044ff68d2191f18f13d23524a91b223a019d9fe"
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
      </div>

      {/* Модальное окно с формой */}
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