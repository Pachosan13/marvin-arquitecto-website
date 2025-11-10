import HeroSection from '../../components/sections/HeroSection';
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import ProcessSection from '../../components/sections/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQAccordion from '../../components/sections/FAQAccordion';
import SeoHead from '../../components/seo/SeoHead';
import { processSteps, projects, serviceFaqs, testimonials } from '../data/siteContent';

const faqItems = [
  ...serviceFaqs['remodelacion-apartamentos'].slice(0, 2),
  ...serviceFaqs['remodelacion-casas'].slice(0, 2),
  serviceFaqs['diseno-y-construccion'][0],
];

function ServicesOverview() {
  const serviceCards = [
    {
      title: 'Remodelación de apartamentos en Panamá',
      description:
        'Redistribuimos espacios, diseñamos cocinas gourmet y entregamos acabados premium respetando reglamentos de PH. Coordinamos permisos, logística de elevadores y protección de áreas comunes.',
      link: '/servicios/remodelacion-apartamentos',
    },
    {
      title: 'Remodelación de casas con ampliación',
      description:
        'Integramos interior y exterior, modernizamos fachadas y creamos terrazas bioclimáticas. Nos encargamos de estudios estructurales, paisajismo y mobiliario a medida.',
      link: '/servicios/remodelacion-casas',
    },
    {
      title: 'Remodelación de oficinas y comercios',
      description:
        'Diseñamos espacios que reflejan tu marca, optimizamos operación y mejoramos experiencia del cliente. Incluye cableado, iluminación, mobiliario y gestión fuera de horario.',
      link: '/servicios/remodelacion-oficinas',
    },
    {
      title: 'Diseño y construcción llave en mano',
      description:
        'Un solo equipo coordina diseño, ingeniería y obra. Con cronograma, presupuesto cerrado y supervisión directa del arquitecto en cada hito crítico.',
      link: '/servicios/diseno-y-construccion',
    },
  ];

  return (
    <>
      <SeoHead
        title="Servicios de arquitectura y remodelación en Panamá"
        description="Estudio de arquitectura en Panamá especializado en remodelaciones de apartamentos, casas y oficinas. Diseño, permisos y construcción llave en mano."
        keywords={['arquitecto panamá', 'servicios de arquitectura panamá', 'diseño y construcción panamá']}
        openGraph={{ type: 'website' }}
      />
      <HeroSection
        eyebrow="Servicios"
        heading="Servicios de arquitectura y remodelación en Panamá"
        subheading="Diseñamos y ejecutamos proyectos residenciales y comerciales con control total de presupuesto y tiempos."
        description="Nuestro portafolio integra consultoría, diseño, gestión de permisos y construcción llave en mano para familias y empresas que buscan resultados medibles."
        imageSrc="/CASA.jpg"
        imageAlt="Render de sala remodelada con iluminación cálida"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-7 text-[#1a1a1a]/80">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Arquitectura centrada en tus objetivos</h3>
            <p>
              Cada servicio parte de una estrategia personalizada. Analizamos tu estilo de vida, operación comercial o plan de inversión y definimos un roadmap realista. Desde la primera reunión digital identificamos prioridades, analizamos normativa y generamos estimaciones de inversión alineadas a tus expectativas. Nuestro enfoque combina creatividad con rigurosidad financiera para que tu proyecto avance sin improvisaciones.
            </p>
            <p>
              En remodelación de apartamentos panamá cuidamos el mínimo detalle: coordinación con administración del edificio, logística de acceso, protección de ascensores y horarios de trabajo. Preparamos renders para validar diseño, especificamos materiales disponibles y creamos un cronograma que optimiza cada semana de trabajo. El resultado: entregas puntuales y espacios listos para habitar, con mobiliario y decoración integrados.
            </p>
            <p>
              Para remodelación de casas panamá, nuestro equipo evalúa estructura, ventilación, iluminación natural y relación con el exterior. Diseñamos ampliaciones que maximizan metros cuadrados aprovechables y creamos terrazas bioclimáticas para disfrutar el clima tropical. También asesoramos en permisos especiales, impacto en vecinos y selección de materiales duraderos para la costa.
            </p>
            <p>
              En remodelación de oficinas panamá combinamos análisis operativo, cultura organizacional y branding. Diseñamos flujos eficientes, salas de colaboración y áreas de hospitalidad que refuerzan la experiencia del cliente. Además, coordinamos instalaciones tecnológicas, acústica y mobiliario ergonómico para impulsar productividad y bienestar del equipo.
            </p>
            <p>
              Si buscas diseño y construcción panamá con un solo contrato, nuestra modalidad llave en mano integra arquitectura, ingeniería MEP, presupuestos, compras y obra. Garantizamos precios cerrados, cláusulas claras y reportes semanales. También ofrecemos administración de riesgos, control de calidad y soporte posentrega para ajustes menores.
            </p>
            <p>
              Más allá del diseño, nos ocupamos de gestionar permisos, licencias y documentación técnica. Trabajamos con proveedores locales e internacionales certificados, garantizamos trazabilidad de materiales y coordinamos importaciones cuando el proyecto lo requiere. Todo queda documentado en expedientes digitales accesibles para ti y tu equipo financiero.
            </p>
            <p>
              Nuestro acompañamiento incluye asesoría para evaluar propiedades antes de comprarlas, estudios de factibilidad y planificación de fases para adaptar el proyecto a tu flujo de inversión. También implementamos soluciones sustentables como iluminación eficiente, ventilación cruzada y materiales de bajo mantenimiento que reducen costos a largo plazo.
            </p>
          </article>
          <aside className="space-y-6 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Portafolio de servicios</h3>
            <ul className="space-y-3">
              {serviceCards.map((service) => (
                <li key={service.title}>
                  <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href={service.link}>
                    {service.title}
                  </a>
                  <p className="mt-2 text-xs text-[#1a1a1a]/70">{service.description}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Incluye siempre</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Diagnóstico técnico y briefing estratégico</li>
                <li>Renders y tableros de materiales para validar diseño</li>
                <li>Presupuesto llave en mano con hitos claros</li>
                <li>Supervisión del arquitecto y reportes semanales</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1e3a8a]/20 p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">Sectores atendidos</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Residencial premium y vacation rentals</li>
                <li>Oficinas boutique, estudios legales y agencias</li>
                <li>Restaurantes de autor y clínicas privadas</li>
                <li>Locales comerciales en centros estratégicos</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <ProjectsGrid
        projects={projects}
        heading="Ejemplos de proyectos por servicio"
        description="Explora cómo transformamos apartamentos, casas, oficinas y restaurantes con propuestas personalizadas."
      />
      <ProcessSection
        steps={processSteps}
        heading="Metodología llave en mano"
        description="Cinco etapas con responsables claros y comunicación constante para entregar tu proyecto en tiempo, forma y presupuesto."
      />
      <TestimonialsSection
        testimonials={testimonials}
        heading="Clientes que confiaron en nuestro estudio"
        description="Historias reales de familias y directivos que experimentaron una remodelación sin estrés."
      />
      <FAQAccordion
        items={faqItems}
        heading="Preguntas frecuentes sobre nuestros servicios"
        description="Respondemos inquietudes antes de iniciar tu proyecto para garantizar transparencia."
      />
    </>
  );
}

export default ServicesOverview;
