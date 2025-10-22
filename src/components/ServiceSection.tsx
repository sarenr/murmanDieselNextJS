"use client";

import Image from "next/image";
import { ReactNode } from "react";
import animationCard from "./AnimationCard";

interface ServiceCardProps {
  delay: string;
  children: ReactNode;
}

function ServiceCard({ delay, children }: ServiceCardProps) {
  const [ref, isInView] = animationCard();

  return (
    <div
      ref={ref}
      className={`flex flex-col h-full bg-background/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-foreground/10 transition-all duration-500
        ease-in-out transform hover:scale-105 hover:border-primary/50 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: isInView ? delay : "0s" }}
    >
      {children}
    </div>
  );
}

export default function ServiceSection() {
  return (
    <div className="py-12 bg-background relative">
      {/* Заголовок */}
      <div
        className="max-w-7xl mx-auto 
                        px-4
                        sm:px-6 
                        lg:px-8 
                      text-center mb-8"
      >
        <h1
          className="text-2xl
                          sm:text-3xl
                          lg:text-4xl
                        font-bold text-foreground mb-4"
        >
          Наши услуги
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
          Полный комплекс оказываемых нами услуг по ремонту и обслуживанию
          дизельных двигателей
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
            <h3 className="mt-4 text-lg font-bold mb-3 text-foreground">
              Ремонт дизельных форсунок Delphi E3, CATERPILLAR C6, C7, С9,
              SCANIA HPI
            </h3>
            <div className="mt-auto">
              <p className="text-foreground/70 mb-4">от 14000 р</p>
              <button className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors">
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
            <h3 className="mt-4 text-lg font-bold mb-3 text-foreground">
              Кодирование форсунок - присвоение ремонтных кодов для дальнейшей
              их записи в ЭБУ
            </h3>
            <div className="mt-auto">
              <p className="text-foreground/70 mb-4">
                Цена зависит от тех. задания{" "}
              </p>
              <button className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors">
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
            <h3 className="mt-4 text-lg font-bold mb-3 text-foreground">
              Профессиональный ремонт любых форсунок Common Rail
            </h3>
            <div className="mt-auto">
              <p className="text-foreground/70 mb-4"> От 4000 р</p>
              <button className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors">
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
            <h3 className="mt-4 text-lg font-bold mb-3 text-foreground">
              Диагностика форсунок Bosch Delphi Siemens Denso
            </h3>
            <div className="mt-auto">
              <p className="text-foreground/70 mb-4"> От 800 р</p>
              <button className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors">
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
            <h3 className="mt-4 text-lg font-bold mb-3 text-foreground">
              Диагностика и ремонт дизельных форсунок Ford Transit. Обучение
              впрыска топливных систем Denso и Siemens
            </h3>
            <div className="mt-auto">
              <p className="text-foreground/70 mb-4"> От 2000 р</p>
              <button className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors">
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
            <h3 className="mt-4 text-lg font-bold mb-3 text-foreground">
              Ремонт турбин в Мурманске
            </h3>
            <div className="mt-auto">
              <p className="text-foreground/70 mb-4"> От 2000 р</p>
              <button className="w-full font-bold bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg transition-colors">
                Подробнее →
              </button>
            </div>
          </ServiceCard>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto 
                      px-4 
                      sm:px-6 
                      lg:px-8 
                    mt-16"
      >
        <div className="bg-gradient-to-l from-primary/20 via-background to-primary/20 rounded-xl p-8 text-foreground text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Не нашли нужной услуги?
          </h1>
          <p className="text-lg mb-6 text-foreground/70">
            Готовы рассмотреть нестандартный случай и предложить решение под
            ваши задачи.
          </p>
          <button className="font-bold bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-colors text-lg">
            +7 911 300-17-55
          </button>
        </div>
      </div>
    </div>
  );
}
