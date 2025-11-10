import { useEffect, useMemo, useRef, useState } from 'react';

interface HeroSlide {
  readonly src: string;
  readonly alt: string;
}

interface HeroShowcaseProps {
  readonly heading: string;
  readonly subheading: string;
  readonly slides: readonly HeroSlide[];
  readonly primaryCtaHref: string;
  readonly secondaryCtaHref: string;
}

const AUTO_PLAY_INTERVAL = 6000;

function HeroShowcase({ heading, subheading, slides, primaryCtaHref, secondaryCtaHref }: HeroShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const hasMultipleSlides = slides.length > 1;

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  useEffect(() => {
    if (!hasMultipleSlides || prefersReducedMotion) {
      return () => undefined;
    }

    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [hasMultipleSlides, prefersReducedMotion, slides.length]);

  const socialProof = useMemo(
    () => ['20+ años', '150 proyectos', '98% satisfacción', 'Respuesta en 24 h'],
    [],
  );

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate flex h-[72vh] min-h-[520px] w-full items-center overflow-hidden bg-black text-white"
      onMouseEnter={() => {
        if (timerRef.current) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }}
      onMouseLeave={() => {
        if (hasMultipleSlides && !prefersReducedMotion && timerRef.current === null) {
          timerRef.current = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
          }, AUTO_PLAY_INTERVAL);
        }
      }}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              role="img"
              aria-hidden={!isActive}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index === 0 ? 'eager' : 'lazy'}
              // @ts-expect-error fetchPriority aún no está en las definiciones de React
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding={index === 0 ? 'sync' : 'async'}
            />
          );
        })}
        <div aria-hidden className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-8 text-left md:space-y-10">
          <div className="space-y-4">
            <h2 id="home-hero-heading" className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {heading}
            </h2>
            <p className="text-lg text-white/85 md:text-xl">{subheading}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href={primaryCtaHref}
              className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-lg transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Agendar visita (sin costo)
            </a>
            <a
              href={secondaryCtaHref}
              className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Ver proyectos
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/80">
            {socialProof.map((item) => (
              <span key={item} className="rounded-full bg-black/40 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {hasMultipleSlides ? (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2" aria-label="Control de carrusel">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`Ver imagen ${index + 1} de ${slides.length}`}
                className={`h-2 w-6 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  isActive ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

export default HeroShowcase;
