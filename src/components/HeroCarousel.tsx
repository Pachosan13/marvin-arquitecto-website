import { useEffect, useState } from 'react';

const IMAGES: { src: string; alt: string; priority?: boolean }[] = [
  { src: '/carrusel/carrusel2.jpg', alt: 'Remodelación residencial premium en Panamá', priority: true },
  { src: '/carrusel/carrusel4.jpg', alt: 'Detalle de diseño interior contemporáneo' },
  { src: '/carrusel/carrusel6.jpg', alt: 'Sala con iluminación natural y mobiliario a medida' },
  { src: '/oficina.jpg', alt: 'Oficina corporativa diseñada por Marvin Pérez' },
  { src: '/CASAIV.jpg', alt: 'Área social de residencia de lujo' },
];

const TRANSITION_MS = 6000;

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, TRANSITION_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {IMAGES.map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            index === i ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'opacity' }}
          loading={image.priority ? 'eager' : 'lazy'}
          decoding={image.priority ? 'sync' : 'async'}
          fetchPriority={image.priority ? 'high' : 'auto'}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/60" aria-hidden="true" />
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-2">
        {IMAGES.map((image, i) => (
          <span
            key={image.src}
            className={`h-[2px] w-16 bg-white/30 transition-opacity ${index === i ? 'opacity-100' : 'opacity-40'}`}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
