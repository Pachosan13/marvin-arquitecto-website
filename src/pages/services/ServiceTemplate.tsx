import { Link, useParams } from 'react-router-dom';
import SeoHead from '../../seo/SeoHead';
import { breadcrumbSchema, faqSchema, localBusinessSchema } from '../../seo/jsonld';
import { SERVICE_DATA, type ServiceData } from '../../data/services';
import { useReveal } from '../../hooks/useReveal';

const getService = (slug?: string): ServiceData | null => {
  if (!slug) return null;
  return (SERVICE_DATA as Record<string, ServiceData | undefined>)[slug] ?? null;
};

const ServiceTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug);
  const { ref: painsRef, visible: painsVisible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });
  const { ref: scopeRef, visible: scopeVisible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });
  const { ref: benefitsRef, visible: benefitsVisible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });
  const { ref: casesRef, visible: casesVisible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });
  const { ref: testimonialsRef, visible: testimonialsVisible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });
  const { ref: faqRef, visible: faqVisible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });

  if (!service) {
    return (
      <main className="section-padding flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl bg-cement px-10 py-14 text-center">
          <p className="text-2xl font-serif text-dark">Servicio no encontrado.</p>
          <Link
            to="/servicios"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
          >
            Volver a servicios
          </Link>
        </div>
      </main>
    );
  }

  const canonical = service.canonical_url ?? `https://mparquitecto.com/servicios/${slug}`;
  const gallery = service.case_cards?.map((card) => card.img).filter(Boolean) as string[];
  const whatsappNumber = service.whatsapp ?? '50766758035';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <SeoHead
        title={service.seo_title ?? service.service_name}
        description={service.seo_description ?? service.hero_subtitle}
        canonical={canonical}
        keywords={[service.primary_keyword, ...(service.secondary_keywords ?? [])].filter(Boolean)}
        schema={[
          localBusinessSchema({
            name: 'Marvin Pérez Arquitecto',
            description: service.seo_description ?? service.service_name,
            url: 'https://mparquitecto.com',
            telephone: service.phone ?? '+50766758035',
            email: service.email ?? 'hola@mp-arquitecto.com',
            address: {
              addressLocality: 'Ciudad de Panamá',
              addressCountry: 'PA',
            },
          }),
          breadcrumbSchema({
            items: [
              { name: 'Inicio', item: 'https://mparquitecto.com/' },
              { name: 'Servicios', item: 'https://mparquitecto.com/servicios' },
              { name: service.service_name, item: canonical },
            ],
          }),
          faqSchema({
            faqs: (service.faqs ?? []).map((faq) => ({ question: faq.q, answer: faq.a })).slice(0, 6),
          }),
        ]}
      />
      <main className="bg-base">
        <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
          <img
            src={service.hero_image ?? '/carrusel/carrusel4.jpg'}
            alt={service.service_name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" aria-hidden="true" />
          <div className="section-padding relative z-10 flex h-full items-end pb-20">
            <div className="max-w-3xl text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">{service.city}</p>
              <h1 className="mt-4 text-4xl font-serif leading-[1.1] md:text-5xl">{service.service_name}</h1>
              <p className="mt-6 max-w-2xl text-lg text-white/80">{service.hero_subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`${whatsappUrl}?text=Hola%20Marvin%2C%20quiero%20cotizar%20${encodeURIComponent(service.service_name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-dark transition hover:bg-accent hover:text-white"
                >
                  Agendar reunión
                </a>
                <a
                  href="#alcance"
                  className="rounded-full border border-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-dark"
                >
                  Ver alcance
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              ref={painsRef}
              className={`space-y-6 transition-all duration-700 ${
                painsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-serif text-dark">Lo que resolvemos</h2>
              <p className="text-base text-muted">
                Coordinamos cada etapa de la remodelación: planificación, diseño, permisos, compras y dirección de obra. Entregamos
                reportes semanales y control de presupuesto sin sorpresas.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {service.pains?.map((pain) => (
                  <div key={pain} className="rounded-3xl bg-cement p-6 text-sm text-dark/80">
                    {pain}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[36px] bg-cement p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-dark/70">Zonas de cobertura</p>
              <p className="mt-3 text-base text-dark">{service.zones?.join(' · ')}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-dark/70">Tiempo estimado</p>
              <ul className="mt-3 space-y-2 text-base text-dark/80">
                {service.process?.slice(0, 4).map((step) => (
                  <li key={step.step} className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3">
                    <span>{step.step}</span>
                    <span className="text-sm uppercase tracking-[0.3em] text-muted">{step.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="alcance" className="bg-cement py-20">
          <div className="section-padding">
            <div
              ref={scopeRef}
              className={`mx-auto max-w-5xl transition-all duration-700 ${
                scopeVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-serif text-dark">Alcance llave en mano</h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {service.scope?.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-3xl bg-white px-5 py-4 text-base text-muted">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {service.benefits?.length ? (
          <section className="section-padding py-20">
            <div
              ref={benefitsRef}
              className={`mx-auto max-w-6xl transition-all duration-700 ${
                benefitsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-serif text-dark">Beneficios clave</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-[28px] bg-white p-8 shadow-soft-lg">
                    <h3 className="text-xl font-serif text-dark">{benefit.title}</h3>
                    <p className="mt-3 text-base text-muted">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        {gallery.length ? (
          <section className="section-padding py-20">
            <div
              ref={casesRef}
              className={`mx-auto max-w-6xl transition-all duration-700 ${
                casesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-serif text-dark">Casos destacados</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {service.case_cards?.map((card) => (
                  <figure key={card.title} className="overflow-hidden rounded-[32px] bg-white shadow-soft-lg">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="space-y-2 p-6">
                      <p className="text-sm uppercase tracking-[0.3em] text-muted">{card.metrics}</p>
                      <h3 className="text-xl font-serif text-dark">{card.title}</h3>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        {service.testimonials?.length ? (
          <section className="bg-cement py-20">
            <div
              ref={testimonialsRef}
              className={`section-padding transition-all duration-700 ${
                testimonialsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="mx-auto max-w-5xl">
                <h2 className="text-3xl font-serif text-dark">Testimonios</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {service.testimonials.map((testimonial) => (
                    <blockquote key={testimonial.author} className="rounded-[28px] bg-white p-8 text-base text-dark/80 shadow-soft-lg">
                      “{testimonial.quote}”
                      <footer className="mt-4 text-sm uppercase tracking-[0.3em] text-muted">{testimonial.author}</footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}
        {service.faqs?.length ? (
          <section className="section-padding py-20">
            <div
              ref={faqRef}
              className={`mx-auto max-w-5xl transition-all duration-700 ${
                faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-serif text-dark">Preguntas frecuentes</h2>
              <div className="mt-8 space-y-6">
                {service.faqs.slice(0, 6).map((faq) => (
                  <details key={faq.q} className="group rounded-[28px] border border-black/10 bg-white p-6 shadow-soft-lg">
                    <summary className="cursor-pointer text-lg font-serif text-dark">
                      {faq.q}
                    </summary>
                    <p className="mt-4 text-base text-muted leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        <section className="section-padding pb-24">
          <div className="mx-auto max-w-4xl rounded-[32px] bg-dark p-12 text-center text-white">
            <h2 className="text-3xl font-serif">Agenda tu diagnóstico</h2>
            <p className="mt-4 text-base text-white/70">
              Coordinamos una visita técnica en 48 horas para evaluar alcance, presupuesto y cronograma.
            </p>
            <a
              href={`${whatsappUrl}?text=Hola%20Marvin%2C%20quiero%20cotizar%20${encodeURIComponent(service.service_name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-dark transition hover:bg-accent hover:text-white"
            >
              Reservar visita técnica
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceTemplate;
