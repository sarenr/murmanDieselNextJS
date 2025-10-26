"use client";

import useAnimationAbout from "./AnimationAbout";
import Image from "next/image";

// Компонент карточки для About секции
function AnimatedCard({
  delay = "0s",
  children,
  className = "",
}: {
  delay?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isInView } = useAnimationAbout();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
        `}
      style={{
        transitionDelay: isInView ? delay : "0.1s",
      }}
    >
      {children}
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center  text-gray-900 relative py-16 sm:py-20 lg:py-24">
      {/* Заголовок */}
      <div className="text-foreground text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          Почему выбирают нас?
        </h1>
      </div>

      {/* Bento Grid */}
<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
    
    {/* Строка 1 */}
    {/* Карточка 1 - 1x1 (на мобильных: полная ширина) */}
    <AnimatedCard delay="0.1s" className="col-span-1 md:col-span-1 row-span-1">
      <div className="group relative h-full min-h-[200px] md:min-h-[300px] bg-white rounded-3xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
         <div className="absolute -top-8  -left-100 
                  md:-top-12 md:-left-10 
                  lg:-top-16 lg:-left-7 
                  xl:-top-20 xl:-left-5 
                  2xl:-top-24 2xl:-left-10 
                  
                  w-200 h-40 
                  md:w-48 md:h-48 
                  lg:w-56 lg:h-56 
                  xl:w-64 xl:h-64 
                  2xl:w-72 2xl:h-72 
                  flex items-center justify-center">
    <Image
      src="/images/gear.jpg" 
      alt="Лучшее борудование" 
      fill
      className="rounded-b-2xl w-full h-full object-cover"
    />
  </div>
        {/* Контент */}
        <div className="mt-16 md:mt-20 md:-ml-2 md:pl-0 h-full w-full flex flex-col items-start justify-center">
          <h2 className="text-lg md:text-xm lg:text-xl  font-bold  md:mb-3 text-black mb-1">Оборудование</h2>
          <p className="text-black text-xs md:text-xs">
            При выполнении работ мы используем самое качественное оборудование
          </p>
        </div>
      </div>
    </AnimatedCard>

    {/* Карточка 2 - 3x1 (на мобильных: полная ширина) */}
    <AnimatedCard delay="0.15s" className="col-span-1 md:col-span-3 row-span-1">
      <div className="group relative h-full min-h-[200px] md:min-h-[300px] rounded-3xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] bg-blue-700 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center h-full">
          {/* Контент */}
          <div className="mt-0 p-1 h-full w-full flex flex-col items-start justify-start">
            <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-1">Качество</h2>
            <p className="text-white text-xs md:text-sm lg:text-xs">
              Мы отвечаем за качество выполненных работ и даём собственные гарантии
            </p>
          </div>
          <div className="mt-2 absolute top-20  -left-150 
                  md:top-30 md:-left-30 
                  lg:top-30 lg:-left-30 
                  xl:top-30 xl:-left-100 
                  2xl:top-30 2xl:-left-100 
                  w-250 h-40 
                  md:w-150 md:h-48 
                  lg:w-200 lg:h-56 
                  xl:w-300 xl:h-64 
                  2xl:w-300 2xl:h-72 
                  flex items-center justify-center">
    <Image
      src="/images/like.jpg" 
      alt="Качество выполненных работ" 
      fill
      className="rounded-2xl w-full h-full object-cover"
    />
    
  </div>
  
        </div>
      </div>
    </AnimatedCard>
    {/* Строка 2 */}
    {/* Карточка 3 - 3x1 (на мобильных: полная ширина) */}
    <AnimatedCard delay="0.25s" className="col-span-1 md:col-span-3 row-span-1">
      <div className="group relative h-full min-h-[200px] md:min-h-[300px] rounded-3xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden bg-blue-700">
        <div className="flex flex-col md:flex-row items-start md:items-center h-full">
          {/* Контент */}
          <div className="mt-0 p-1 h-full w-full flex flex-col items-start justify-start">
            <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-1">Персонал</h2>
            <p className="text-white text-xs md:text-sm">
              Профессиональная подготовка в официальном центре Common Rail
            </p>
          </div>
          {/* Адаптивное изображение */}
          <div className="mt-2 absolute top-20 -right-5
                          md:top-30 md:-right-15 
                          lg:top-30 lg:-right-15 
                          xl:top-30 xl:-right-100 
                          2xl:top-25 2xl:-right-100
                          w-100 h-40 
                          md:w-150 md:h-48 
                          lg:w-200 lg:h-56 
                          xl:w-300 xl:h-64 
                          2xl:w-300 2xl:h-72 
                          flex items-center justify-center">
            <Image
              src="/images/person.jpg" 
              alt="Профессиональный персонал"
              fill 
              className="rounded-2xl w-full h-full object-cover object-top"
            />
            
          </div>
        </div>
      </div>
    </AnimatedCard>
    {/* Карточка 4 - 1x1 (на мобильных: полная ширина) */}
    <AnimatedCard delay="0.35s" className="col-span-1 md:col-span-1 row-span-1">
      <div className="group relative h-full min-h-[200px] md:min-h-[300px] bg-white rounded-3xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
         <div className="absolute -top-8  -right-100 
                  md:-top-12 md:-right-10 
                  lg:-top-16 lg:-right-7 
                  xl:-top-20 xl:-right-5 
                  2xl:-top-24 2xl:-right-10 
                  
                  w-200 h-40 
                  md:w-48 md:h-48 
                  lg:w-56 lg:h-56 
                  xl:w-64 xl:h-64 
                  2xl:w-72 2xl:h-72 
                  flex items-center justify-center">
    <Image 
      src="/images/number1.jpg" 
      alt="Мы лучшие" 
      fill
      className="rounded-b-2xl w-full h-full object-cover"
    />
  </div>
        {/* Контент */}
        <div className="mt-16 md:mt-20 md:-ml-2 md:pl-0 h-full w-full flex flex-col items-start justify-center">
          <h2 className="text-lg md:text-xm lg:text-xl  font-bold  md:mb-3 text-black mb-1">Мы №1</h2>
          <p className="text-black text-xs md:text-xs">
            Наши клиенты нас рекомендуют!
          </p>
        </div>
      </div>
    </AnimatedCard>
    <AnimatedCard delay="0.45s" className="col-span-1 md:col-span-1 row-span-1">
       <div className="group relative h-full min-h-[200px] md:min-h-[300px] bg-white rounded-3xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
         <div className="absolute -top-8  -right-100 
                  md:-top-12 md:-left-10 
                  lg:-top-16 lg:-left-7 
                  xl:-top-20 xl:-left-5 
                  2xl:-top-24 2xl:-left-10 
                  
                  w-200 h-40 
                  md:w-48 md:h-48 
                  lg:w-56 lg:h-56 
                  xl:w-64 xl:h-64 
                  2xl:w-72 2xl:h-72 
                  flex items-center justify-center">
    <Image
      src="/images/speed.jpg" 
      alt="Скорость наше преймущество" 
      fill
      className="rounded-b-2xl w-full h-full object-cover"
    />
  </div>
        {/* Контент */}
        <div className="mt-16 md:mt-20 md:-ml-2 md:pl-0 h-full w-full flex flex-col items-start justify-center">
          <h2 className="text-lg md:text-xm lg:text-xl  font-bold  md:mb-3 text-black mb-1">Скорость</h2>
          <p className="text-black text-xs md:text-xs">
            Выполняем работы по ремонту в самые кратчайшие сроки
          </p>
        </div>
      </div>
    </AnimatedCard>
    <AnimatedCard delay="0.55s" className="col-span-1 md:col-span-3 row-span-1">
         <div className="group relative h-full min-h-[200px] md:min-h-[300px] rounded-3xl p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] bg-blue-700 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center h-full">
          {/* Контент */}
           <div className="mt-0 p-1 h-full w-full flex flex-col items-start justify-start">
            <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-1">Клиенты</h2>
            <p className="text-white text-xs md:text-sm lg:text-xs">
              Самая лучшая награда для нас — это положительные отзывы клиентов
            </p>
          </div>
          <div className="mt-2 absolute top-20  -left-150 
                  md:top-30 md:-left-30 
                  lg:top-30 lg:-left-30 
                  xl:top-30 xl:-left-100 
                  2xl:top-30 2xl:-left-100 
                  w-250 h-40 
                  md:w-150 md:h-48 
                  lg:w-200 lg:h-56 
                  xl:w-300 xl:h-64 
                  2xl:w-300 2xl:h-72 
                  flex items-center justify-center">
    <Image
      src="/images/happy.jpg" 
      alt="Клиенты это наша награда" 
      fill
      className="rounded-2xl w-full h-full object-cover"
    />
    
  </div>
  
        </div>
      </div>
    </AnimatedCard>

  </div>
</div>
</div>

  );
}