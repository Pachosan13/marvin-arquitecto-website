import HeroCarousel from '../components/HeroCarousel';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsShowcase from '../components/ProjectsShowcase';
import ContactSection from '../components/ContactSection';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, localBusinessSchema, websiteSchema } from '../seo/jsonld';
import { useReveal } from '../hooks/useReveal';

const Home = () => {
  const canonical = 'https://mparquitecto.com/';
  const { ref: aboutRef, visible: aboutVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: photoRef, visible: photoVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: manifestoRef, visible: manifestoVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: processRef, visible: processVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });

  return (
    <>
      <SeoHead
        title="Arquitecto en Panamá | Remodelaciones y Diseño | Marvin Pérez de Obaldía"
        description="Remodelaciones llave en mano para residencias y oficinas en Ciudad de Panamá. Diseño arquitectónico, dirección de obra y entrega puntual por Marvin Pérez de Obaldía."
        canonical={canonical}
        keywords={[
          'arquitecto en Panamá',
          'remodelaciones llave en mano Panamá',
          'diseño interior Panamá',
          'arquitecto residencial Panamá',
          'diseño de oficinas Panamá',
        ]}
        schema={[
          localBusinessSchema({
            name: 'Marvin Pérez de Obaldía - Arquitecto',
            description:
              'Arquitecto en Panamá especializado en remodelaciones residenciales y corporativas llave en mano.',
            url: 'https://mparquitecto.com',
            telephone: '+50766758035',
            email: 'hola@mp-arquitecto.com',
            address: {
              addressLocality: 'Ciudad de Panamá',
              addressRegion: 'Panamá',
              addressCountry: 'PA',
            },
          }),
          websiteSchema({
            name: 'Marvin Pérez Arquitecto',
            url: 'https://mparquitecto.com',
            searchUrl: 'https://mparquitecto.com/buscar',
          }),
          breadcrumbSchema({
            items: [
              { name: 'Inicio', item: canonical },
            ],
          }),
        ]}
      />
      <main className="relative">
        <HeroCarousel />
        <section className="section-padding -mt-20 pb-24">
          <div className="mx-auto max-w-4xl rounded-[40px] bg-white p-10 shadow-soft-lg md:p-16">
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Arquitecto en Panamá</p>
            <h1 className="mt-4 text-4xl font-serif leading-[1.1] text-dark md:text-5xl">
              Arquitecto en Panamá especializado en remodelaciones residenciales y corporativas de alto nivel.
            </h1>
            <p className="mt-6 text-lg text-muted">
              Más de 20 años diseñando espacios que reflejan estilo, funcionalidad y precisión. Dirigimos proyectos llave en mano
              con supervisión diaria y presupuesto cerrado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
                className="flex items-center justify-center rounded-full bg-dark px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar cotización
              </a>
              <a
                href="#proyectos"
                className="flex items-center justify-center rounded-full border border-dark px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-dark transition hover:bg-dark hover:text-white"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </section>
        <section id="sobre" className="section-padding py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div
              ref={aboutRef}
              className={`space-y-6 transition-all duration-700 ${aboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-muted">Sobre Marvin</span>
              <h2 className="text-4xl font-serif text-dark md:text-5xl">Arquitectura que se siente, se habita y se disfruta</h2>
              <p className="text-base text-muted">
                Marvin Pérez de Obaldía lidera un estudio boutique con sede en Ciudad de Panamá. El equipo combina diseño
                arquitectónico, interiorismo y dirección de obra para transformar viviendas y oficinas con entregas puntuales.
              </p>
              <p className="text-base text-muted">
                Creemos en proyectos con narrativa clara, materiales honestos y soluciones personalizadas para cada familia o
                empresa. Acompañamos desde la conceptualización hasta la entrega final, cuidando cada detalle.
              </p>
              <div className="grid grid-cols-2 gap-6 text-sm uppercase tracking-[0.3em] text-dark/60 md:max-w-md">
                <div>
                  <p className="text-3xl font-serif text-dark">20+</p>
                  <p>años de experiencia</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-dark">150</p>
                  <p>proyectos dirigidos</p>
                </div>
              </div>
            </div>
            <div
              ref={photoRef}
              className={`relative transition-all duration-700 ${photoVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              <div className="overflow-hidden rounded-[40px]">
                <img
                  src="/marviper.jpg"
                  alt="Marvin Pérez de Obaldía"
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-cement py-20">
          <div className="section-padding">
            <div
              ref={manifestoRef}
              className={`mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-700 ${
                manifestoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-muted">Manifiesto</span>
              <p className="mt-6 text-3xl font-serif text-dark md:text-4xl">
                Diseñamos espacios cinematográficos donde la luz, los materiales nobles y la proporción hacen que cada día se sienta
                extraordinario.
              </p>
              <p className="mt-6 text-base text-muted">
                Seleccionamos materiales de alto desempeño, coordinamos a cada proveedor y documentamos avances con reportes
                semanales para que tengas tranquilidad total durante la obra.
              </p>
            </div>
          </div>
        </section>
        <ServicesGrid />
        <ProjectsShowcase />
        <section id="proceso" className="section-padding py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-muted">Proceso</span>
              <h2 className="mt-4 text-4xl font-serif text-dark md:text-5xl">Cómo trabajamos</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-muted">
                Acompañamiento integral en tres etapas. Coordinamos reuniones semanales y entregamos reportes visuales para que
                tomes decisiones con datos y tranquilidad.
              </p>
            </div>
            <div
              ref={processRef}
              className={`grid gap-8 transition-all duration-700 md:grid-cols-3 ${
                processVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {[{
                number: '01',
                title: 'Diagnóstico estratégico',
                description:
                  'Visita técnica, levantamiento y definición del alcance con presupuesto preliminar en menos de 72 horas.',
              }, {
                number: '02',
                title: 'Diseño & planificación',
                description:
                  'Moodboards, renders 3D, planos técnicos y cronograma con hitos claros antes de iniciar obra.',
              }, {
                number: '03',
                title: 'Ejecución llave en mano',
                description:
                  'Coordinación completa de proveedores, supervisión diaria y entrega puntual lista para habitar.',
              }].map((step) => (
                <div key={step.number} className="rounded-[32px] bg-white p-10 shadow-soft-lg">
                  <span className="text-5xl font-serif text-accent">{step.number}</span>
                  <h3 className="mt-6 text-2xl font-serif text-dark">{step.title}</h3>
                  <p className="mt-4 text-base text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
