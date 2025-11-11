import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, faqSchema, localBusinessSchema } from '../seo/jsonld';
import { SERVICE_DATA, type ServiceData } from '../data/services';
import { useReveal } from '../hooks/useReveal';

const services = Object.values(SERVICE_DATA);

const ServiceArticle = ({ service, index }: { service: ServiceData; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });

  return (
    <article
      ref={ref}
      className={`flex flex-col overflow-hidden rounded-[36px] bg-white shadow-soft-lg transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <img
        src={service.hero_image ?? '/carrusel/carrusel4.jpg'}
        alt={service.service_name}
        className="h-72 w-full object-cover"
        loading={index < 2 ? 'eager' : 'lazy'}
        decoding={index < 2 ? 'sync' : 'async'}
      />
      <div className="flex flex-1 flex-col gap-4 p-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">{service.city}</p>
          <h2 className="text-3xl font-serif text-dark">{service.service_name}</h2>
          <p className="text-base text-muted">{service.hero_subtitle}</p>
        </div>
        <ul className="space-y-2 text-sm text-muted">
          {service.scope?.slice(0, 5).map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <Link to={service.slug} className="text-xs uppercase tracking-[0.3em] text-dark hover:text-accent">
            Ver detalle
          </Link>
          <a
            href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-dark px-5 py-2 text-xs uppercase tracking-[0.3em] text-dark transition hover:bg-dark hover:text-white"
          >
            Cotizar este servicio
          </a>
        </div>
      </div>
    </article>
  );
};

const Servicios = () => {
  const canonical = 'https://mparquitecto.com/servicios';

  return (
    <>
      <SeoHead
        title="Servicios de Arquitectura y Remodelación en Panamá | Marvin Pérez"
        description="Remodelaciones residenciales, oficinas llave en mano y dirección de obra premium en Ciudad de Panamá. Descubre los servicios de Marvin Pérez de Obaldía."
        canonical={canonical}
        schema={[
          localBusinessSchema({
            name: 'Marvin Pérez Arquitecto',
            description:
              'Servicios de arquitectura, diseño interior y ejecución de remodelaciones llave en mano en Ciudad de Panamá.',
            url: 'https://mparquitecto.com',
            telephone: '+50766758035',
            email: 'hola@mp-arquitecto.com',
            address: {
              addressLocality: 'Ciudad de Panamá',
              addressRegion: 'Panamá',
              addressCountry: 'PA',
            },
          }),
          breadcrumbSchema({
            items: [
              { name: 'Inicio', item: 'https://mparquitecto.com/' },
              { name: 'Servicios', item: canonical },
            ],
          }),
          faqSchema({
            faqs: services.slice(0, 3).flatMap((service) =>
              service.faqs?.slice(0, 2).map((faq) => ({
                question: faq.q,
                answer: faq.a,
              })) ?? []
            ),
          }),
        ]}
      />
      <main className="section-padding py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Servicios</span>
          <h1 className="mt-6 text-4xl font-serif text-dark md:text-5xl">
            Remodelaciones llave en mano con control total de calidad y presupuesto
          </h1>
          <p className="mt-6 text-lg text-muted">
            Desde la conceptualización hasta la entrega, integramos diseño, dirección de obra y coordinación de proveedores.
            Trabajamos en residencias y oficinas premium de Ciudad de Panamá.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-6xl gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceArticle key={service.slug} service={service} index={index} />
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-5xl rounded-[32px] bg-cement p-12 text-center">
          <h2 className="text-3xl font-serif text-dark">¿Necesitas algo específico?</h2>
          <p className="mt-4 text-base text-muted">
            También coordinamos asesorías de interiorismo, diseño de mobiliario a medida y gestión de permisos para ampliaciones.
            Escríbenos y diseñamos un alcance a tu medida.
          </p>
          <a
            href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-dark px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-accent"
          >
            Hablar ahora
          </a>
        </div>
      </main>
    </>
  );
};

export default Servicios;
