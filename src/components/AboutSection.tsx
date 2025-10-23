"use client";

import useAnimationAbout from "./AnimationAbout";

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

      {/* Bento Grid - 4 колонки, 3 строки для асимметрии */}
      <div className="w-full max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Строка 1 */}
          {/* Карточка 1 - 1x1 (левый верхний) */}
          <AnimatedCard delay="0.1s" className="col-span-1 row-span-1">
              <div className="group relative h-full min-h-[300px] bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              {/* Изображение выходит за левый верхний край */}
                  <div className="absolute -top-40 -left-40 w-100 h-100  flex items-center justify-center">
                  <img src="/images/gear.jpg" alt="Качество" className="rounded-b-2xl" />
                  </div>
                    {/* Контент с отступом */}
                    <div className="mt-20  h-full w-full flex flex-col justify-center">
                    <h2 className="text-xl font-bold text-black mb-1">Оборудование</h2>
                    <p className="pt-0 text-black text-xs ">
                     При выполнении работ мы испозуем самое качественное оборудование
                    </p>
                    </div>
                    </div>
          </AnimatedCard>

              {/* Карточка 2 - 3x1 (правый верхний) */}
              <AnimatedCard delay="0.15s" className="col-span-3 row-span-1">
                <div className="group relative h-full min-h-[300px] rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden bg-blue-700">
                  <div className="flex items-center space-x-6 h-full">
                    <div className="mt-0 p-1 h-full w-full flex flex-col items-start justify-start">
                      <h2 className="text-xl font-bold text-white mb-1">Качество</h2>
                      <p className="text-white text-xs">Мы отвечаем за качество выполненных работ и даём собственные гарантии</p>
                    </div>
                    <div className="absolute -bottom-100 -left-70 w-300 h-100  flex items-center justify-center">
                      <img src="/images/like.jpg" alt="Качество" className="rounded-2xl" />
                    </div>
                  </div>
                </div>
              </AnimatedCard>

          {/* Строка 2 */}
          {/* Карточка 3 - 3x1 (левая средняя) */}
          <AnimatedCard delay="0.25s" className="col-span-3 row-span-1">
            <div className="group h-full min-h-[300px]  rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center space-x-6 h-full">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <img src="/images/person.svg" alt="Персонал" className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">Персонал</h2>
                  <p className="text-pink-100 text-lg">Профессиональная подготовка в официальном центре Common Rail</p>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Карточка 4 - 1x1 (правая средняя) */}
          <AnimatedCard delay="0.35s" className="col-span-1 row-span-1">
            <div className="group h-full min-h-[300px]  rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center h-full justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <img src="/images/number1.svg" alt="Номер 1" className="w-8 h-8" />
                </div>
                <h2 className="text-lg font-bold text-white mb-2">Номер 1</h2>
                <p className="text-orange-100 text-sm">Нас рекомендуют</p>
              </div>
            </div>
          </AnimatedCard>

          {/* Строка 3 */}
          {/* Карточка 5 - 1x1 (левая нижняя) */}
          <AnimatedCard delay="0.45s" className="col-span-1 row-span-1">
            <div className="group h-full min-h-[300px]  rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center h-full justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <img src="/images/speed.svg" alt="Скорость" className="w-8 h-8" />
                </div>
                <h2 className="text-lg font-bold text-white mb-2">Скорость</h2>
                <p className="text-amber-100 text-sm">Кратчайшие сроки</p>
              </div>
            </div>
          </AnimatedCard>

          {/* Карточка 6 - 3x1 (правая нижняя) */}
          <AnimatedCard delay="0.55s" className="col-span-3 row-span-1">
            <div className="group h-full min-h-[300px]  rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center space-x-6 h-full">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <img src="/images/happy.svg" alt="Клиенты" className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">Клиенты</h2>
                  <p className="text-indigo-100 text-lg">Самая лучшая награда для нас — это положительные отзывы клиентов</p>
                </div>
              </div>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </div>
  );
}