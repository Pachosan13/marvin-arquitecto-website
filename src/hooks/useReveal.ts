import { useEffect, useRef, useState } from 'react';

export const useReveal = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
  const ref = useRef<T | null>(null);
  const optionsRef = useRef(options);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    }, optionsRef.current);

    observer.observe(element);

    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible } as const;
};
