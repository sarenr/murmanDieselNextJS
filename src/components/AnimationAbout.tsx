'use client';

import { useRef, useState, useEffect, RefCallback } from 'react';

export default function useAnimationAbout() {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const setRef: RefCallback<Element> = (node: Element | null) => {
    ref.current = node;
  };

  return { ref: setRef, isInView };
}