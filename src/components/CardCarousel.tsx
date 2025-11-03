"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
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

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoved = useRef(false);
  const pointerActive = useRef(false);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);

  useEffect(() => {
    const el = cardRefs.current[index];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const onTouchStart = (e: TouchEvent) => {
      if (pointerActive.current) return; 
      if (e.touches.length !== 1) return;
      touchMoved.current = false;
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (pointerActive.current) return;
      if (touchStartX.current == null) return;
      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - (touchStartY.current ?? 0);
      if (Math.abs(dx) > 10) touchMoved.current = true;
      if (Math.abs(dx) > Math.abs(dy) * 1.2) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (pointerActive.current) return;
      if (!touchMoved.current || touchStartX.current == null) {
        touchStartX.current = null;
        touchStartY.current = null;
        return;
      }
      const lastTouch = e.changedTouches[0];
      const dx = lastTouch.clientX - (touchStartX.current ?? 0);
      const abs = Math.abs(dx);
      const threshold = 50; // px
      if (abs > threshold) {
        if (dx < 0) next();
        else prev();
      }
      touchStartX.current = null;
      touchStartY.current = null;
      touchMoved.current = false;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.isPrimary === false) return;
      pointerActive.current = true;
      pointerStartX.current = e.clientX;
      pointerStartY.current = e.clientY;
      try {
        (e.target as Element).setPointerCapture?.(e.pointerId);
      } catch (err) {

      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pointerActive.current || pointerStartX.current == null) return;
      const dx = e.clientX - (pointerStartX.current ?? 0);
      const dy = e.clientY - (pointerStartY.current ?? 0);
      if (Math.abs(dx) > Math.abs(dy) * 1.2) {
        e.preventDefault();
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!pointerActive.current || pointerStartX.current == null) {
        pointerActive.current = false;
        pointerStartX.current = null;
        pointerStartY.current = null;
        return;
      }
      const dx = e.clientX - (pointerStartX.current ?? 0);
      const abs = Math.abs(dx);
      const threshold = 50; // px, similar to touch
      if (abs > threshold) {
        if (dx < 0) next();
        else prev();
      }
      pointerActive.current = false;
      try {
        (e.target as Element).releasePointerCapture?.(e.pointerId);
      } catch (err) {

      }
      pointerStartX.current = null;
      pointerStartY.current = null;
    };

  sc.addEventListener("touchstart", onTouchStart, { passive: true });
  sc.addEventListener("touchmove", onTouchMove, { passive: false });
  sc.addEventListener("touchend", onTouchEnd);
  sc.addEventListener("pointerdown", onPointerDown as EventListener);
  sc.addEventListener("pointermove", onPointerMove as EventListener, { passive: false });
  sc.addEventListener("pointerup", onPointerUp as EventListener);

    return () => {
      sc.removeEventListener("touchstart", onTouchStart);
      sc.removeEventListener("touchmove", onTouchMove);
      sc.removeEventListener("touchend", onTouchEnd);
      sc.removeEventListener("pointerdown", onPointerDown as EventListener);
      sc.removeEventListener("pointermove", onPointerMove as EventListener);
      sc.removeEventListener("pointerup", onPointerUp as EventListener);
    };
  }, [next, prev]);

  const hasSlides = len > 0;
  const current = hasSlides ? cards[index] : null;

  return (
    <section className="w-full bg-linear-to-b from-gray-900 to-black py-10 sm:py-14">
      <div className="w-full flex flex-col items-center">
        {/* стрелки — относительно контейнера */}
        <div className="relative w-full max-w-[1100px] mx-auto">
          {/* Внешние стрелки удалены — используем встроенные стрелки внутри карточки */}

          {/* заголовок той же ширины, что контейнер */}
          <h2 className="mx-auto text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8 max-w-[900px]">
            {current?.title ?? "—"}
          </h2>

          {/* горизонтальный скролл с snap */}
          <div
            ref={scrollRef}
            className="relative overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory flex gap-6 px-4 no-scrollbar"
          >
            {cards.map((c, i) => (
              <div
                key={c.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`snap-center shrink-0 w-[min(95vw,1100px)] bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden relative group`}
                aria-hidden={i !== index}
              >
                {/* кнопки внутри карточки, по центру вертикально, видимы на hover */}
                <button
                  onClick={prev}
                  aria-label="Назад"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-primary/30 hover:bg-primary text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  aria-label="Вперёд"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-primary/30 hover:bg-primary text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative w-full min-h-[260px] md:min-h-[420px]">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="p-8 lg:p-10 bg-gray-900 text-white w-full">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">{c.title}</h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                      {c.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
