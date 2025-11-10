import HeroShowcase from '../components/HeroShowcase';
import ProjectsShowcase from '../components/ProjectsShowcase';
import PainSolutionSection from '../components/sections/PainSolutionSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQAccordion from '../components/sections/FAQAccordion';
import ContactBlock from '../components/sections/ContactBlock';
import SeoHead from '../components/seo/SeoHead';
import { processSteps, projects, serviceFaqs, testimonials } from './data/siteContent';

const heroSlides = [
  {
    src: '/carrusel/carrusel2.jpg',
    alt: 'Sala de estar iluminada de un apartamento remodelado con mobiliario contemporáneo',
  },
  {
    src: '/carrusel/carrusel4.jpg',
    alt: 'Detalle de cocina gourmet con isla en mármol y luminarias suspendidas',
  },
  {
    src: '/carrusel/carrusel6.jpg',
    alt: 'Área social con ventanales de piso a techo y acabados cálidos',
  },
  {
    src: '/carrusel/carrusel7.jpg',
    alt: 'Lobby corporativo con revestimientos de madera y mobiliario a medida',
  },
  {
    src: '/oficina2.jpg',
    alt: 'Sala de reuniones corporativa con paneles de madera y vista a la ciudad de Panamá',
  },
];

const serviceHighlights = [
  {
    title: 'Remodelación de apartamentos',
    description: 'Interiores llave en mano para Costa del Este, Punta Pacífica y Santa María con acabados boutique.',
    href: '/servicios/remodelacion-apartamentos',
  },
  {
    title: 'Residencias de autor',
    description: 'Diseño y ampliaciones integrales que conectan interior y exterior para familias exigentes.',
    href: '/servicios/remodelacion-casas',
  },
  {
    title: 'Oficinas boutique',
    description: 'Espacios corporativos estratégicos que reflejan identidad de marca y optimizan operación.',
    href: '/servicios/remodelacion-oficinas',
  },
  {
    title: 'Llave en mano',
    description: 'Diseño, coordinación y construcción completa para proyectos residenciales y comerciales.',
    href: '/servicios/diseno-y-construccion',
  },
];

function Home() {
  const pains = [
    {
      pain: 'Incertidumbre con contratistas y presupuestos que cambian cada semana.',
      solution:
        'Firmamos contratos con precios cerrados, hitos calendarizados y seguimiento financiero semanal para que sepas exactamente cómo avanza tu inversión.',
    },
    {
      pain: 'Proyectos que se alargan por falta de planos o permisos municipales.',
      solution:
        'Gestionamos planos arquitectónicos en Panamá, memorias estructurales y trámites municipales completos para iniciar obra en la fecha acordada.',
    },
    {
      pain: 'Diseños que no representan tu estilo de vida o la identidad de tu negocio.',
      solution:
        'Integramos moodboards, renders y muestras físicas para alinear expectativas estéticas, funcionalidad y branding antes de construir.',
    },
  ];

  const faqs = serviceFaqs['remodelacion-apartamentos'];
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      <SeoHead
        title="Arquitecto en Panamá | Remodelaciones y Diseño | Marvin Pérez"
        description="Arquitecto en Panamá especializado en remodelaciones residenciales y comerciales llave en mano con control de presupuesto, permisos y acabados premium."
        keywords={['arquitecto panamá', 'arquitecto en panamá', 'remodelación de casas panamá', 'remodelación de apartamentos panamá', 'remodelación de oficinas panamá']}
        openGraph={{ type: 'website', image: 'https://marvin-arquitecto.com/marviper.jpg' }}
      />
      <HeroShowcase
        eyebrow="Showroom de arquitectura"
        heading="Arquitecto en Panamá para espacios residenciales y corporativos de alto nivel"
        subheading="Diseño, obra y supervisión llave en mano para proyectos que hablan de tu marca."
        slides={heroSlides}
        primaryCtaHref="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
        secondaryCtaHref="#proyectos"
      />
      <section className="bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-start">
          <div className="space-y-6 text-base leading-7 text-[#1a1a1a]/80 lg:max-w-2xl">
            <h2 className="text-3xl font-semibold text-[#1a1a1a]">Remodelaciones premium con control total</h2>
            <p>
              Durante más de dos décadas, Marvin Pérez de Obaldía ha liderado remodelaciones integrales en Costa del Este, Punta Pacífica, Santa María y el centro financiero de la ciudad. Trabajamos con clientes que buscan resultados predecibles: coordinamos diseño, ingeniería y construcción para que recibas un espacio listo para habitar sin sorpresas.
            </p>
            <p>
              Nuestro estudio combina gestión estratégica y artesanía. Validamos cada decisión con renders realistas, cronogramas transparentes y proveedores certificados; además, nuestro equipo de obra ejecuta acabados de alto detalle con supervisión diaria.
            </p>
            <div>
              <a
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Leer más sobre los servicios
              </a>
            </div>
          </div>
          <div className="grid flex-1 gap-4 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80 sm:grid-cols-2">
            {serviceHighlights.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Servicio</p>
                  <p className="text-lg font-semibold text-[#1a1a1a]">{service.title}</p>
                  <p className="text-sm text-[#1a1a1a]/70">{service.description}</p>
                </div>
                <span className="mt-4 text-xs font-semibold text-primary transition-colors group-hover:text-secondary">
                  Explorar detalles →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ProjectsShowcase
        id="proyectos"
        projects={featuredProjects}
        heading="Proyectos recientes con sello de autor"
        description="Apartamentos frente al mar, residencias familiares y oficinas boutique que entregamos llave en mano en Ciudad de Panamá."
      />
      <PainSolutionSection
        heading="Dolores frecuentes que resolvemos con arquitectura estratégica"
        description="Transformamos preocupaciones comunes en resultados tangibles para propietarios exigentes de Ciudad de Panamá."
        items={pains}
      />
      <ProcessSection
        steps={processSteps}
        heading="Proceso llave en mano con supervisión permanente"
        description="Te acompañamos desde la visión inicial hasta la entrega lista para habitar, documentando cada decisión y manteniéndote informado con reportes semanales."
      />
      <TestimonialsSection
        testimonials={testimonials}
        heading="Testimonios de clientes que confiaron en nosotros"
        description="Familias y empresas que transformaron sus espacios resaltan nuestra comunicación clara, precisión en costos y acabados de alto nivel."
      />
      <FAQAccordion
        items={faqs}
        heading="Preguntas frecuentes sobre remodelación de apartamentos en Panamá"
        description="Respondemos las dudas clave antes de iniciar tu proyecto para que tomes decisiones con certeza."
        visibleCount={3}
        ctaLabel="Ver todas las preguntas"
        ctaHref="/servicios/remodelacion-apartamentos"
      />
      <ContactBlock />
    </>
  );
}

export default Home;
