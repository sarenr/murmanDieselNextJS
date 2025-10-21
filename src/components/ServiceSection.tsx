'use client';

import { ReactNode } from 'react';
import animationCard from './AnimationCard';
import Image from 'next/image';

interface ServiceCardProps {
    delay: string;
    children: ReactNode;
}

function ServiceCard({ delay, children }: ServiceCardProps) {
    const [ref, isInView] = animationCard();
    
    return (
        <div
            ref={ref}
      className={`flex flex-col h-full bg-gray-800 rounded-lg shadow-lg p-6 border border-transparent transition-all duration-500
        ease-in-out transform hover:scale-105 hover:border-blue-800 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isInView ? delay : '0s' }}
    >
      {children}
    </div>
  );
}

export default function ServiceSection() {
  return (
    <div className="py-12 bg-black relative">
      {/* Заголовок */}
      <div className="max-w-7xl mx-auto 
                        px-4
                        sm:px-6 
                        lg:px-8 
                      text-center mb-8">
        <h1 className="text-2xl 
                          sm:text-3xl 
                          lg:text-4xl 
                        font-bold text-white mb-4">
          Наши услуги
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Полный комплекс оказываемых нами услуг по ремонту и обслуживанию дизельных двигателей
        </p>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard delay="0.1s">
            <Image 
              className="w-full h-48 object-cover rounded-t-lg" 
              src="/images/card1.webp" 
              alt="Ремонт дизельных форсунок"
              width={400}
              height={192}
            />
            <h3 className="mt-4 text-lg font-bold mb-3 text-white">Ремонт дизельных форсунок Delphi E3, CATERPILLAR C6, C7, С9, SCANIA HPI</h3>
            <div className="mt-auto">
              <p className="text-gray-300 mb-4">от 14000 р</p>
              <button className="w-full font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                Подробнее →
              </button>
            </div>
          </ServiceCard>

          <ServiceCard delay="0.1s">
            <Image 
              className="w-full h-48 object-cover rounded-t-lg" 
              src="/images/card2.webp" 
              alt="Кодирование форсунок"
              width={400}
              height={192}
            />
            <h3 className="mt-4 text-lg font-bold mb-3 text-white">Кодирование форсунок - присвоение ремонтных кодов для дальнейшей их записи в ЭБУ</h3>
            <div className="mt-auto">
              <p className="text-gray-300 mb-4">Цена зависит от тех. задания </p>
              <button className="w-full font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                Подробнее →
              </button>
            </div> 
          </ServiceCard>

          <ServiceCard delay="0.1s">
            <Image 
              className="w-full h-48 object-cover rounded-t-lg" 
              src="/images/card3.webp" 
              alt="Ремонт форсунок Common Rail"
              width={400}
              height={192}
            />
            <h3 className="mt-4 text-lg font-bold mb-3 text-white">Профессиональный ремонт любых форсунок Common Rail</h3>
            <div className="mt-auto">
              <p className="text-gray-300 mb-4"> От 4000 р</p>
              <button className="w-full font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                Подробнее →
              </button>
            </div> 
          </ServiceCard>

          <ServiceCard delay="0.1s">
            <Image 
              className="w-full h-48 object-cover rounded-t-lg" 
              src="/images/card4.webp" 
              alt="Диагностика форсунок"
              width={400}
              height={192}
            />
            <h3 className="mt-4 text-lg font-bold mb-3 text-white">Диагностика форсунок Bosch Delphi Siemens Denso</h3>
            <div className="mt-auto">
              <p className="text-gray-300 mb-4"> От 800 р</p>
              <button className="w-full font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                Подробнее →
              </button>
            </div> 
          </ServiceCard>

          <ServiceCard delay="0.1s">
            <Image 
              className="w-full h-48 object-cover rounded-t-lg" 
              src="/images/card5.webp" 
              alt="Ремонт форсунок Ford Transit"
              width={400}
              height={192}
            />
            <h3 className="mt-4 text-lg font-bold mb-3 text-white">Диагностика и ремонт дизельных форсунок Ford Transit. Обучение впрыска топливных систем Denso и Siemens</h3>
            <div className="mt-auto">
              <p className="text-gray-300 mb-4"> От 2000 р</p>
              <button className="w-full font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                Подробнее →
              </button>
            </div> 
          </ServiceCard>

          <ServiceCard delay="0.1s">
            <Image 
              className="w-full h-48 object-cover rounded-t-lg" 
              src="/images/card6.webp" 
              alt="Ремонт турбин"
              width={400}
              height={192}
            />
            <h3 className="mt-4 text-lg font-bold mb-3 text-white">Ремонт турбин в Мурманске</h3>
            <div className="mt-auto">
              <p className="text-gray-300 mb-4"> От 2000 р</p>
              <button className="w-full font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                Подробнее →
              </button>
            </div> 
          </ServiceCard>
        </div>
      </div>
  
      <div className="max-w-7xl mx-auto 
                      px-4 
                      sm:px-6 
                      lg:px-8 
                    mt-16">
        <div className="bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-xl p-8 text-white text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Не нашли нужной услуги?</h1>
          <p className="text-lg mb-6 text-gray-300">
            Готовы рассмотреть нестандартный случай и предложить решение под ваши задачи.
          </p>
          <button className="font-bold bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-colors text-lg">
            +7 911 300-17-55
          </button>
        </div>
      </div>
    </div>
  );
}