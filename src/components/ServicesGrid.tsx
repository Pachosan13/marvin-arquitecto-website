import { Link } from 'react-router-dom';
import { SERVICE_DATA, type ServiceData } from '../data/services';
import { useReveal } from '../hooks/useReveal';

const services = Object.values(SERVICE_DATA);

const ServiceCard = ({ service, index }: { service: ServiceData; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });

  return (
    <article
      ref={ref}
      className={`group flex h-full transform flex-col overflow-hidden rounded-3xl bg-white shadow-soft-lg transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={service.hero_image ?? '/carrusel/carrusel4.jpg'}
          alt={service.service_name}
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding={index === 0 ? 'sync' : 'async'}
        />
        <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs uppercase tracking-[0.3em] text-dark">
          {service.city}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif text-dark">{service.service_name}</h3>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">{service.primary_keyword}</p>
          <p className="text-base text-muted">{service.hero_subtitle}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <Link to={service.slug} className="text-sm uppercase tracking-[0.3em] text-dark transition-colors hover:text-accent">
            Ver detalles
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Llave en mano</span>
        </div>
      </div>
    </article>
  );
};

const ServicesGrid = () => {
  return (
    <section id="servicios" className="section-padding py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Servicios</span>
          <h2 className="text-4xl font-serif text-dark md:text-5xl">Arquitectura integral con control total</h2>
          <p className="mx-auto max-w-3xl text-base text-muted">
            Diseñamos y ejecutamos remodelaciones de alto nivel para residencias y oficinas en Panamá. Coordinamos cada fase con
            cronogramas claros, selección curada de materiales y supervisión diaria en obra.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
