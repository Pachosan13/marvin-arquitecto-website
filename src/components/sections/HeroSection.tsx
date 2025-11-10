import LocationBadge from '../ui/LocationBadge';

interface HeroSectionProps {
  readonly eyebrow: string;
  readonly heading: string;
  readonly subheading: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly ctaLabel?: string;
  readonly secondaryCtaLabel?: string;
}

function HeroSection({
  eyebrow,
  heading,
  subheading,
  description,
  imageSrc,
  imageAlt,
  ctaLabel = 'Agenda una reunión virtual',
  secondaryCtaLabel = 'Descarga perfil de servicios',
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#1e3a8a]/70 mix-blend-multiply" aria-hidden />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center">
        <div className="w-full space-y-6 text-white lg:max-w-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">{eyebrow}</p>
          <h2 id="hero-heading" className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="text-lg font-medium text-secondary/90">{subheading}</p>
          <p className="text-base text-white/80">{description}</p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a8a]"
            >
              {ctaLabel}
            </a>
            <a
              href="/marviper.jpg"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a8a]"
            >
              {secondaryCtaLabel}
            </a>
          </div>
          <LocationBadge />
        </div>
        <div className="w-full max-w-xl rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
          <dl className="grid grid-cols-1 gap-6 text-white/90 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-secondary/80">Experiencia</dt>
              <dd className="text-3xl font-semibold">20+ años</dd>
            </div>
            <div>
              <dt className="text-sm text-secondary/80">Proyectos entregados</dt>
              <dd className="text-3xl font-semibold">150</dd>
            </div>
            <div>
              <dt className="text-sm text-secondary/80">Satisfacción</dt>
              <dd className="text-3xl font-semibold">98%</dd>
            </div>
            <div>
              <dt className="text-sm text-secondary/80">Respuestas rápidas</dt>
              <dd className="text-3xl font-semibold">24h</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
