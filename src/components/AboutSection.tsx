"use client";

import useAnimationAbout from "./AnimationAbout";

// Компонент карточки для About секции
function AnimatedCard({
  delay = "0s",
  children,
}: {
  delay?: string;
  children: React.ReactNode;
}) {
  const { ref, isInView } = useAnimationAbout();

  return (
    <div
      ref={ref}
      className={`
        transition-opacity duration-3000 ease-out
        ${isInView ? "opacity-100" : "opacity-0"}
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
    <div className="flex flex-col items-center justify-center bg-background text-foreground relative py-12 sm:py-16 lg:py-20">
      {/* Заголовок */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          Почему выбирают нас?
        </h1>
      </div>

      {/* Сетка карточек */}
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Карточка 1 - Оборудование */}
        <AnimatedCard delay="0.1s">
          <div
            className="border border-foreground/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-primary/50
          flex flex-col justify-center items-center text-center bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 h-full min-h-[200px]"
          >
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4"
              src="./images/gear.svg"
              alt="like"
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              Оборудование
            </h2>
            <p className="text-sm sm:text-base text-foreground/70">
              Мы используем только профессиональное оборудование и запчасти для
              ремонта
            </p>
          </div>
        </AnimatedCard>

        {/* Карточка 2 */}
        <AnimatedCard delay="0.15s">
          <div
            className="border border-foreground/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-primary/50
          flex flex-col justify-center items-center text-center bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 h-full min-h-[200px]"
          >
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4"
              src="./images/like.svg"
              alt="like"
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              Качество
            </h2>
            <p className="text-sm sm:text-base text-foreground/70">
              Мы отвечаем за качество выполненных работ и даём собственные
              гарантии
            </p>
          </div>
        </AnimatedCard>
        {/* Карточка 3 */}
        <AnimatedCard delay="0.25s">
          <div
            className="border border-foreground/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-primary/50
          flex flex-col justify-center items-center text-center bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 h-full min-h-[200px]"
          >
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4"
              src="./images/person.svg"
              alt="like"
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              Персонал
            </h2>
            <p className="text-sm sm:text-base text-foreground/70">
              Профессиональная подготовка в официальном центре Common Rail
            </p>
          </div>
        </AnimatedCard>
        {/* Карточка 4 */}
        <AnimatedCard delay="0.35s">
          <div
            className="border border-foreground/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-primary/50
          flex flex-col justify-center items-center text-center bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 h-full min-h-[200px]"
          >
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4"
              src="./images/number1.svg"
              alt="#1"
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              Номер 1
            </h2>
            <p className="text-sm sm:text-base text-foreground/70">
              Наши клиенты пользуются нашими услугами и рекомендуют нас
            </p>
          </div>
        </AnimatedCard>

        {/* Карточка 5 */}
        <AnimatedCard delay="0.45s">
          <div
            className="border border-foreground/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-primary/50
          flex flex-col justify-center items-center text-center bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 h-full min-h-[200px]"
          >
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4"
              src="./images/speed.svg"
              alt="speed"
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              Скорость
            </h2>
            <p className="text-sm sm:text-base text-foreground/70">
              Выполняем работы по ремонту в самые кратчайшие сроки
            </p>
          </div>
        </AnimatedCard>
        {/* Карточка 6 */}
        <AnimatedCard delay="0.55s">
          <div
            className="border border-foreground/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-primary/50
          flex flex-col justify-center items-center text-center bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 h-full min-h-[200px]"
          >
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4"
              src="./images/happy.svg"
              alt=":)"
            />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              Клиенты
            </h2>
            <p className="text-sm sm:text-base text-foreground/70">
              Самая лучшая награда для нас — это положительные отзывы клиентов
            </p>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
