"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface ArrowProps {
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

type Slide = {
  title: string;
  text: string;
  img: string;
  imgAlt: string;
};

const slides: Slide[] = [
  {
    title: "Диагностика и ремонт дизельных двигателей",
    text:
      "Ремонт дизельных форсунок — сложный и ответственный процесс. Еще недавно владельцам транспорта с дизельными моторами приходилось в случае выхода из строя форсунок менять их на новые, что обходилось дорого. Для ремонта требуется точная диагностика и выявление характера неисправности, для чего используются инновационные технологии и стенды.",
    img: "/images/example1.jpg",
    imgAlt: "Диагностика дизельного двигателя",
  },
  {
    title: "Наши специалисты лучшие",
    text:
      "Квалифицированный ремонт форсунок обеспечивает надежную и экономичную работу дизельных агрегатов на долгие годы. После ремонта в нашем сервисе форсунки служат не хуже новых. Мы выполняем проверку Denso, Siemens и ремонт Bosch, Delphi, Cummins.",
    img: "/images/example2.jpg",
    imgAlt: "Наши специалисты лучшие",
  },
  {
    title: "Диагностика форсунок",
    text:
      "Диагностика на стендах позволяет точно определить неисправность и составить план восстановления. Ремонт включает замену распылителя, регулировку мультипликатора и настройку на компьютерном стенде.",
    img: "/images/example3.jpg",
    imgAlt: "Диагностика форсунок",
  },
  {
    title: "Мы востребованы",
    text:
      "Ремонт дизельных форсунок в Мурманске — одна из самых востребованных услуг. Мы предлагаем гарантию на работы, оригинальные запчасти и квалифицированных специалистов по системам Common Rail, Bosch и другим.",
    img: "/images/example4.jpg",
    imgAlt: "Мы востребованы",
  },
];


export function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Следующий слайд"
      className="hidden lg:flex absolute right-[-2.5rem] top-1/2 -translate-y-1/2 z-10
                 p-2 rounded-full bg-primary/40 hover:bg-primary transition-all backdrop-blur-sm text-white"
    >
      <ChevronRight className="w-8 h-8 md:w-9 md:h-9" />
    </button>
  );
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Предыдущий слайд"
      className="hidden lg:flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2 z-10
                 p-2 rounded-full bg-primary/40 hover:bg-primary transition-all backdrop-blur-sm text-white"
    >
      <ChevronLeft className="w-8 h-8 md:w-9 md:h-9" />
    </button>
  );
}

export default function CardCarouselSlick() {
  const [active, setActive] = useState(0);
  const [fixedHeight, setFixedHeight] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);


  useEffect(() => {
    const calcHeight = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) {
        setFixedHeight(null);
        return;
      }

      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
      const max = Math.max(...heights);
      if (max > 0) setFixedHeight(max);
    };

    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => window.removeEventListener("resize", calcHeight);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => setActive(next),
    appendDots: (dots: React.ReactNode) => (
      <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
          i === active
            ? "bg-primary scale-125 shadow-md"
            : "bg-gray-500/80 hover:bg-gray-400"
        }`}
      />
    ),
  };
  const current = slides[active];
  return (
    <section className="w-full  bg-gradient-to-b from-gray-900 to-black py-12 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Динамический заголовок */}
        <h2
          className="text-center font-bold mb-10 
          text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
          leading-tight sm:leading-snug md:leading-snug"
        >
          {current.title}
        </h2>

        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="relative h-200 grid grid-cols-1 md:grid-cols-2 items-stretch
                  bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-white/10 
                  transition-all duration-700 ease-in-out transform px-1"
                style={{
                  height:
                    fixedHeight && window.innerWidth >= 1024
                      ? `${fixedHeight}px`
                      : "auto",
                }}
              >
                {/* Фото */}
                <div className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-auto">
                  <Image
                    src={slide.img}
                    alt={slide.imgAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out"
                    sizes="(min-width:1024px) 50vw, 100vw"
                  />
                </div>

                {/* Текст */}
                <div className="flex flex-col justify-center p-5 sm:p-7 md:p-8 lg:p-10 transition-all duration-700 ease-in-out">
                  <p
                    className="text-white/90 text-justify
                    text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]
                    leading-relaxed sm:leading-7 md:leading-8"
                  >
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
