"use client";

import { FormData } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";

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
    // Обработка отправки формы
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
      <div className="bg-background text-foreground">
        {/* Оглавление */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Контакты
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70">
              Как вы можете связаться с нами
            </p>
          </div>

          {/* Таблица контактов */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
            {/* Адрес */}
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-foreground/10">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Адрес
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                г. Мурманск, Кооперативная 4/4
              </p>
            </div>

            {/* Ремонт форсунок */}
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-foreground/10">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Ремонт форсунок
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                +7 (911) 3001755
              </p>
            </div>

            {/* Ремонт турбин */}
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-foreground/10">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Ремонт турбин
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                +7 (911) 3001199
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-foreground/10">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                WhatsApp и Viber
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base">
                +79533023022 (Антон)
              </p>
            </div>

            {/* Часы работы */}
            <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-700 xl:order-6">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Часы работы
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                Пн-Пт: 10:00-18:00
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                Сб: 10:00-17:00
              </p>
              <p className="text-foreground/70 text-sm sm:text-base">
                Вс: выходной
              </p>
            </div>

            {/* Вопросы? - кликабельная карточка */}
            <div
              className="bg-blue-600 hover:bg-blue-700 rounded-xl p-4 sm:p-6 border border-gray-700 
                                        xl:col-span-full xl:order-last cursor-pointer transition-colors duration-200"
              onClick={() => setIsFormOpen(true)}
            >
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Есть вопросы?
              </h3>
              <p className="text-white text-sm sm:text-base mb-1">
                Звоните нам мы поможем!
              </p>
            </div>
          </div>
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
