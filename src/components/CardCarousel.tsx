"use client";
import { useEffect, useMemo, useRef, useState } from "react";
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

const CARD_MAX_W = 1100;

export default function CardCarouselSection() {
  const [index, setIndex] = useState(0);
  const len = cards.length;

  const next = () => setIndex((p) => (p + 1) % len);
  const prev = () => setIndex((p) => (p - 1 + len) % len);

  // брейкпоинт lg (Tailwind lg = 1024px)
  const [isLG, setIsLG] = useState(false);
  useEffect(() => {
    const check = () => setIsLG(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // всегда рендерим prev/current/next (для анимации), но управляем видимостью
  const visibleTriplet = useMemo(() => {
    if (len === 0) return [] as number[];
    const prevI = (index - 1 + len) % len;
    const nextI = (index + 1) % len;
    return [prevI, index, nextI];
  }, [index, len]);

  const neighborOffset = (i: number) => {
    if (i === index) return 0;
    const prevI = (index - 1 + len) % len;
    const nextI = (index + 1) % len;
    if (i === nextI) return 1;
    if (i === prevI) return -1;
    return 99;
  };

  /** измеряем активную карточку → размеры контейнера, шаги */
  const activeRef = useRef<HTMLDivElement | null>(null);
  const [containerW, setContainerW] = useState<number>(Math.min(CARD_MAX_W, 800));
  const [containerH, setContainerH] = useState<number>(560);

  useEffect(() => {
    if (!activeRef.current) return;
    const el = activeRef.current;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.min(rect.width, window.innerWidth * 0.95);

      // мини-десктопам даём бОльшую минимальную высоту, чтобы не наезжать на соседей
      const vw = window.innerWidth;
      const baseMinH = vw <= 1280 ? 720 : 560;
      const finalH = Math.max(rect.height, baseMinH);

      setContainerW(w);
      setContainerH(finalH);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [index]);

  const hasSlides = len > 0;
  const current = hasSlides ? cards[index] : null;

  // шаг сдвига: на LG соседние торчат наполовину, на <LG полностью за кадром
  const shiftX = (w: number, o: -1 | 0 | 1) => {
    if (o === 0) return 0;
    return isLG ? Math.round(o * (w / 2)) : Math.round(o * w);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black py-10 sm:py-14">
      <div className="w-full flex flex-col items-center">
        {/* стрелки — относительно контейнера */}
        <div className="relative" style={{ width: containerW }}>
          <button
            onClick={prev}
            disabled={!hasSlides}
            className="absolute -left-0 xl:-left-10 top-1/2 -translate-y-1/2 z-30
                       bg-primary text-white rounded-full p-4 sm:p-5 shadow-lg
                       opacity-20 hover:opacity-90 focus:opacity-90 transition
                       disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Назад"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <button
            onClick={next}
            disabled={!hasSlides}
            className="absolute -right-0 xl:-right-10 top-1/2 -translate-y-1/2 z-30
                       bg-primary text-white rounded-full p-4 sm:p-5 shadow-lg
                       opacity-20 hover:opacity-90 focus:opacity-90 transition
                       disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Вперёд"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          {/* заголовок той же ширины, что контейнер */}
          <h2
            className="mx-auto text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8"
            style={{ width: containerW }}
          >
            {current?.title ?? "—"}
          </h2>

          {/* viewport: обрезаем всё лишнее по рамкам активной карточки */}
          <div
            className="relative overflow-hidden select-none"
            style={{ width: containerW, height: containerH, contain: "layout paint" }}
          >
            {hasSlides &&
              visibleTriplet.map((i) => {
                const o = neighborOffset(i) as -1 | 0 | 1;
                const isActive = o === 0;
                const x = shiftX(containerW, o);

                // На <LG: соседи существуют (для анимации), но НЕвидимы;
                // На LG+: соседи видны наполовину.
                const hiddenOnSM = !isLG && !isActive;

                return (
                  <motion.div
                    key={cards[i].id}
                    ref={isActive ? activeRef : null}
                    className="absolute left-1/2 top-0 -translate-x-1/2
                               bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
                    style={{
                      width: "min(95vw, 1100px)",
                      zIndex: isActive ? 10 : 5,
                      opacity: hiddenOnSM ? 0 : isActive ? 1 : 0.65,  // скрываем соседей на <LG
                      pointerEvents: hiddenOnSM ? "none" : "auto",     // и клики
                    }}
                    animate={{ x, scale: isActive ? 1 : isLG ? 0.92 : 1 }}
                    initial={false}
                    transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 100) prev();
                      else if (info.offset.x < -100) next();
                    }}
                    aria-hidden={hiddenOnSM}
                  >
                    {/* [фото | текст] 50/50 */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative w-full min-h-[260px] md:min-h-[420px]">
                        <Image
                          src={cards[i].image}
                          alt={cards[i].title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                      <div className="p-8 lg:p-10 bg-gradient-to-b from-gray-900/85 to-black/90 text-white
                        w-full
                        max-h-[280px]          /* < sm: ниже порог и включаем скролл */
                        sm:max-h-[420px]
                        lg:max-h-[520px]
                        overflow-y-auto pr-2"
                        style={{ WebkitOverflowScrolling: "touch" }}>
                        <div className="w-full max-h-[420px] sm:max-h-[460px] lg:max-h-[520px] overflow-y-auto pr-2">
                          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                            {cards[i].title}
                          </h3>
                          <p className="text-base md:text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                            {cards[i].text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* индикаторы — сразу под контейнером */}
        <div className="mt-6 sm:mt-8">
          <div className="flex gap-3">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-primary scale-125 shadow-md" : "bg-gray-600 opacity-80 hover:opacity-100"
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
