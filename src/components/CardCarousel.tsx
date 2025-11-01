"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = { id: number; title: string; text: string; image: string };

const cards: Card[] = [
  {
    id: 1,
    title: "Ремонт форсунок",
    text:
      "Ремонт дизельных форсунок сложный и ответственный процесс. Еще совсем недавно владельцам транспорта с дизельными моторами приходилось в случае выхода из строя форсунок менять их на новые, что само по себе обходится довольно дорого. Для того, чтобы осуществить ремонт топливных форсунок необходимо провести диагностические мероприятия и выявить характер неисправности. Для этих задач в нашем сервисе используются дорогостоящие диагностические стенды и инновационные технологии.",
    image: "/images/example1.jpg",
  },
  {
    id: 2,
    title: "Наши специалисты лучшие",
    text:
      "Квалифицированный ремонт форсунок обеспечивает надежную и экономичную работу дизельных агрегатов на долгие годы. Форсунки после ремонта в нашем сервисе гарантированно прослужат столько же, а в некоторых случаях даже и дольше, чем новые. При этом стоимость новых комплектующих значительно превосходит затраты на ремонт форсунок. Возможности нашей компании позволяют быстро и качественно выполнить: Проверка форсунок Denso, Siemens; Ремонт форсунок Bosch, Delphi, Cummins.",
    image: "/images/example2.jpg",
  },
  {
    id: 3,
    title: "Диагностика форсунок",
    text:
      "Диагностика на стендах позволяет точно установить характер неисправности и составить алгоритм восстановления. Ремонт может включать мультипликатор, размерную цепь, распылитель и настройку на компьютерном стенде.",
    image: "/images/example3.jpg",
  },
  {
    id: 4,
    title: "Мы востребованы",
    text:
      "Ремонт дизельных форсунок в Мурманске — одна из наиболее востребованных услуг. Специалисты, оборудование, гарантия на работы. Специализация — Common Rail, Bosch и другие популярные системы.",
    image: "/images/example4.jpg",
  },
];

// горизонтальный шаг между карточками
const STEP_X = 360;
// фиксированная высота трека (секция не прыгает)
const TRACK_H_CLASSES = "h-[560px] sm:h-[600px] lg:h-[600px] xl:h-[500px] 2xl:h-[600px]";

export default function CardCarouselSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % cards.length);
  const prev = () => setIndex((p) => (p - 1 + cards.length) % cards.length);

  // вычисляем индексы видимых карточек
  const visibleSet = useMemo(() => {
    const prevI = (index - 1 + cards.length) % cards.length;
    const nextI = (index + 1) % cards.length;
    return new Set([prevI, index, nextI]);
  }, [index]);

  // смещение по соседству: -1 (пред), 0 (текущ), 1 (след)
  const neighborOffset = (i: number) => {
    if (i === index) return 0;
    if (i === (index + 1) % cards.length) return 1;
    if (i === (index - 1 + cards.length) % cards.length) return -1;
    return 99; // невидимых мы вообще не рендерим
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
          {cards[index].title}
        </h2>

        <div className="relative">
          {/* стрелки */}
         <button
            onClick={prev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30
                        bg-primary hover:bg-primary/80 text-white
                        px-1 py-8 sm:px-1 sm:py-10
                        rounded-[30%] shadow-xl
                        flex items-center justify-center
                        transition-transform duration-300 hover:scale-110"
            aria-label="Назад"
            >
            <ChevronLeft className="w-10 h-10 sm:w-14 sm:h-14" />
            </button>

            <button
            onClick={next}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30
                        bg-primary hover:bg-primary/80 text-white
                        px-1 py-8 sm:px-1 sm:py-10
                        rounded-[30%] shadow-xl
                        flex items-center justify-center
                        transition-transform duration-300 hover:scale-110"
            aria-label="Вперёд"
            >
            <ChevronRight className="w-10 h-10 sm:w-14 sm:h-14" />
            </button>



          {/* трек фиксированной высоты + запас под индикаторы */}
          <div className={`relative w-full ${TRACK_H_CLASSES} pb-12 overflow-visible`}>
            {cards.map((card, i) => {
              if (!visibleSet.has(i)) return null; // рендерим только prev/current/next

              const o = neighborOffset(i); // -1 | 0 | 1
              const isActive = o === 0;
              const x = o * STEP_X;
              const scale = isActive ? 1 : 0.9;
              const opacity = isActive ? 1 : 0.55;

              return (
                <motion.div
                  key={card.id}
                  className="
                    absolute left-1/2 top-0 -translate-x-1/2
                    w-[1100px] max-w-[95vw]
                    bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden
                  "
                  animate={{ x, scale, opacity }}
                  initial={false}
                  transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                  style={{ zIndex: isActive ? 10 : 5 }}
                  drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                        if (info.offset.x > 100) prev();     // свайп вправо — предыдущий
                        else if (info.offset.x < -100) next(); // свайп влево — следующий
                    }}
                >
                  {/* Разметка карточки: [фото | текст] */}
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* фото слева */}
                    <div className="relative w-full min-h-[260px] md:min-h-[420px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>

                    {/* текст справа — скроллим, чтобы секция не увеличивалась */}
                    <div className="p-8 lg:p-10 bg-gradient-to-b from-gray-900/85 to-black/90 text-white">
                      <div className="w-full max-h-[420px] sm:max-h-[460px] lg:max-h-[520px] overflow-y-auto pr-2">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                          {card.title}
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* индикаторы */}
          <div className="mt-2 flex justify-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-primary scale-110" : "bg-gray-600"
                }`}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
