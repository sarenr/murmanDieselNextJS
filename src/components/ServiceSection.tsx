"use client";

import Image from "next/image";
import { ReactNode } from "react";
import animationCard from "./AnimationCard";

interface ServiceCardProps {
  delay: string;
  children: ReactNode;
  bgImage: string;
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
      {/* Фоновая картинка внизу */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover"
        />
        {/* Затемнение фона для читаемости */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Контент поверх фона */}
      <div className="relative z-10 flex flex-col flex-1 p-6 text-white">
        {children}
      </div>
    </div>
  );
}

export default function ServiceSection() {
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
          <ServiceCard delay="0.1s" bgImage="/images/card1.jpg">
          {/* 1 */}

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
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <button className="w-full font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
                Оставить заявку
              </button>
            </div>
          </ServiceCard>
            {/* 2 */}
          <ServiceCard delay="0.1s" bgImage="/images/card2.jpg">
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Профессиональный ремонт любых форсунок Common Rail
            </h3>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">от 4000 ₽</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <button className="w-full font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
                Оставить заявку
              </button>
            </div>
          </ServiceCard>
            {/* 3 */}
          <ServiceCard delay="0.1s" bgImage="/images/card3.jpg">
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Кодирование форсунок - присвоение ремонтных кодов
            </h3>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">Цена зависит от тех. задания</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <button className="w-full font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
                Оставить заявку
              </button>
            </div>
          </ServiceCard>
            {/* 4 */}
          <ServiceCard delay="0.1s" bgImage="/images/card4.jpg">
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Дигностика форсунок
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-600/30 text-white px-3 py-1 rounded-xl text-xs font-medium backdrop-blur-sm border border-blue-400/30">
              Boch
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
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
             <button className="w-full font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
                Оставить заявку
              </button>
            </div>
          </ServiceCard>
            {/* 5 */}
          <ServiceCard delay="0.1s" bgImage="/images/card5.jpg">
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Диагностика и ремонт дизельных форсунок Ford Transit
            </h3>
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
              Обучение впрыска топливных систем Denso и Simens
            </h3>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-white/90">от 2000 ₽</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
             <button className="w-full font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
                Оставить заявку
              </button>
            </div>
          </ServiceCard>
            {/* 6 */}
          <ServiceCard delay="0.1s" bgImage="/images/card6.jpg">
            <h3 className="text-lg font-bold mb-3 leading-tight text-white">
             Ремонт турбин в Мурманске
            </h3>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-white/90">от 2000 ₽</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <button className="w-full font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30">
                Оставить заявку
              </button>
            </div>
          </ServiceCard>

        </div>
      </div>
    </div>
  );
}