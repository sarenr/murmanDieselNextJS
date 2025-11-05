'use client';

import { useEffect, useRef, useState } from 'react';

export default function useAnimationCard() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el); 

    return () => {
      observer.unobserve(el); 
    };
  }, []);

  return [ref, isInView] as const;
}
