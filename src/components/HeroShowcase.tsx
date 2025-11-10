import { useEffect, useMemo, useRef, useState } from 'react';
import LocationBadge from './ui/LocationBadge';

interface HeroSlide {
  readonly src: string;
  readonly alt: string;
}

interface HeroShowcaseProps {
  readonly eyebrow: string;
  readonly heading: string;
  readonly subheading: string;
  readonly slides: readonly HeroSlide[];
  readonly primaryCtaHref: string;
  readonly secondaryCtaHref: string;
}

function HeroShowcase({
  eyebrow,
  heading,
  subheading,
  slides,
  primaryCtaHref,
  secondaryCtaHref,
}: HeroShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) {
      return () => undefined;
    }

    const interval = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [hasMultipleSlides, slides.length]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!hasMultipleSlides) {
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasMultipleSlides, slides.length]);

  const badges = useMemo(
    () => [
      { label: 'Experiencia', value: '20+ años' },
      { label: 'Proyectos entregados', value: '150' },
      { label: 'Satisfacción promedio', value: '98%' },
      { label: 'Tiempo de respuesta', value: '24 h' },
    ],
    [],
  );

  return (
    <section
      className="relative isolate flex h-[68vh] min-h-[520px] w-full items-end overflow-hidden bg-black text-white"
      aria-labelledby="home-hero-heading"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
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
              fetchPriority={index === 0 ? 'high' : undefined}
              decoding="async"
            />
          );
        })}
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-secondary">{eyebrow}</p>
            <h2 id="home-hero-heading" className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {heading}
            </h2>
            <p className="text-lg font-medium text-white/85 sm:text-xl">{subheading}</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={primaryCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Agendar visita (sin costo)
            </a>
            <a
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Ver proyectos
            </a>
          </div>
          <LocationBadge variant="dark" />
          <dl className="flex flex-wrap gap-6 text-sm uppercase text-white/80">
            {badges.map((badge) => (
              <div key={badge.label} className="space-y-1">
                <dt className="text-xs tracking-wide text-white/60">{badge.label}</dt>
                <dd className="text-2xl font-semibold text-white">{badge.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {hasMultipleSlides ? (
        <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-2">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.src}
                type="button"
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  isActive ? 'w-8 bg-secondary' : 'bg-white/40'
                }`}
                aria-label={`Ver imagen ${index + 1} de ${slides.length}`}
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
