"use client";

import { useFormModal } from "@/components/useFormModal";
import Image from "next/image";
import { ReactNode } from "react";
import animationCard from "./AnimationCard";
import 'react-phone-number-input/style.css';

const serviceOptions = [
  "Ремонт дизельных форсунок",
  "Профессиональный ремонт любых форсунок",
  "Кодирование форсунок - присвоение ремонтных кодов",
  "Диагностика форсунок",
  "Диагностика и ремонт дизельных форсунок, обучение впрыска топливных систем",
  "Ремонт турбин в Мурманске",
];

interface ServiceCardProps {
  delay: string;
  children: ReactNode;
  bgImage: string;
  onOpenForm: (service: string) => void;
}

function ServiceCard({ delay, children, bgImage }: ServiceCardProps) {
  const [ref, isInView] = animationCard();
  return (
    <div
      ref={ref}
      className={`relative flex flex-col h-full min-h-[400px] rounded-2xl shadow-xl overflow-hidden transition-all duration-500
        ease-in-out transform hover:scale-105 hover:shadow-2xl ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: isInView ? delay : "0s" }}
    >
      {/* Фоновая картинка */}
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt="Фоновое изображение" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col flex-1 p-6 text-white">{children}</div>
    </div>
  );
}

export default function ServiceSection() {
  const {
    isFormOpen,
    formData,
    errors,
    openFormWithService,
    handleInputChange,
    handleSubmit,
    closeForm,
    setPhone,
    handlePhonePaste,
    isSubmitting
  } = useFormModal();

  const handleOpenForm = (serviceName: string) => {
    openFormWithService(serviceName);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Заголовок */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Наши услуги
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Полный комплекс оказываемых нами услуг по ремонту и обслуживанию дизельных двигателей
        </p>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1 */}
          <ServiceCard delay="0.1s" bgImage="/images/card1.jpg" onOpenForm={handleOpenForm}>
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Ремонт дизельных форсунок
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Delphi E3
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                CATERPILLAR C6, C7, С9
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                SCANIA HPI
              </span>
            </div>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">от 14000 ₽</span>
              </div>
              <button
                onClick={() => handleOpenForm("Ремонт дизельных форсунок")}
                className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Оставить заявку
              </button>
            </div>
          </ServiceCard>

          {/* 2 */}
          <ServiceCard delay="0.1s" bgImage="/images/card2.jpg" onOpenForm={handleOpenForm}>
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Профессиональный ремонт любых форсунок
            </h3>
            <div className="flex flex-wrap">
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Common rail
              </span>
            </div>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">от 4000 ₽</span>
              </div>
              <button
                onClick={() => handleOpenForm("Профессиональный ремонт любых форсунок")}
                className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Оставить заявку
              </button>
            </div>
          </ServiceCard>

          {/* 3 */}
          <ServiceCard delay="0.1s" bgImage="/images/card3.jpg" onOpenForm={handleOpenForm}>
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Кодирование форсунок - присвоение ремонтных кодов
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Delphi E3
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                CATERPILLAR C6, C7, С9
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                SCANIA HPI
              </span>
            </div>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">{/* цена опционально */}</div>
              <button
                onClick={() =>
                  handleOpenForm("Кодирование форсунок - присвоение ремонтных кодов")
                }
                className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Оставить заявку
              </button>
            </div>
          </ServiceCard>

          {/* 4 */}
          <ServiceCard delay="0.1s" bgImage="/images/card4.jpg" onOpenForm={handleOpenForm}>
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">Диагностика форсунок</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Bosch
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Delphi
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Siemens
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Denso
              </span>
            </div>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-white/90">от 800 ₽</span>
              </div>
              <button
                onClick={() => handleOpenForm("Диагностика форсунок")}
                className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blур-sm border border-white/30"
              >
                Оставить заявку
              </button>
            </div>
          </ServiceCard>

          {/* 5 */}
          <ServiceCard delay="0.1s" bgImage="/images/card5.jpg" onOpenForm={handleOpenForm}>
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Диагностика и ремонт дизельных форсунок, обучение впрыска топливных систем
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Ford Transit
              </span>
              <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
                Denso и Siemens
              </span>
            </div>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-white/90">от 2000 ₽</span>
              </div>
              <button
                onClick={() =>
                  handleOpenForm(
                    "Диагностика и ремонт дизельных форсунок, обучение впрыска топливных систем"
                  )
                }
                className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Оставить заявку
              </button>
            </div>
          </ServiceCard>

          {/* 6 */}
          <ServiceCard delay="0.1s" bgImage="/images/card6.jpg" onOpenForm={handleOpenForm}>
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Ремонт турбин в Мурманске
            </h3>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-white/90">от 2000 ₽</span>
              </div>
              <button
                onClick={() => handleOpenForm("Ремонт турбин в Мурманске")}
                className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Оставить заявку
              </button>
            </div>
          </ServiceCard>
        </div>
      </div>

      {/* Модалка с формой */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-black text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-xl p-6 sm:p-8 lg:p-12 relative">
                {/* Закрыть */}
                <button
                  onClick={closeForm}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full"
                  aria-label="Закрыть окно"
                >
                  ×
                </button>

                {/* Заголовок */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {formData.service || "ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ ЛЮБЫХ ФОРСУНОК COMMON RAIL"}
                  </h1>
                </div>

                {/* Форма */}
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  {/* Услуга */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
                      Услуга
                    </label>
                    <select
                      name="service"
                      value={formData.service || serviceOptions[0]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Имя */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
                      Имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Введите ваш email"
                      required
                    />
                  </div>

                  {/* Телефон — react-phone-number-input */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
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
                      </label>
                      {errors.phone && <p className="error">{errors.phone}</p>}

                    {errors?.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* Комментарий */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
                      Комментарий
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Добавьте комментарии"
                    />
                  </div>

                  {/* Кнопки */}
                  <div className="flex gap-4 pt-4">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
