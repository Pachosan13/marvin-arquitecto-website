import HeroSection from '../components/sections/HeroSection';
import PainSolutionSection from '../components/sections/PainSolutionSection';
import ProcessSection from '../components/sections/ProcessSection';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQAccordion from '../components/sections/FAQAccordion';
import ContactBlock from '../components/sections/ContactBlock';
import SeoHead from '../components/seo/SeoHead';
import { blogPosts, processSteps, projects, serviceFaqs, testimonials } from './data/siteContent';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'Marvin Pérez de Obaldía · Arquitecto en Panamá',
  image: 'https://marvin-arquitecto.com/marviper.jpg',
  url: 'https://marvin-arquitecto.com',
  telephone: '+50766758035',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle José Gabriel Duque, La Cresta',
    addressLocality: 'Ciudad de Panamá',
    addressRegion: 'Panamá',
    addressCountry: 'PA',
  },
  priceRange: '$$$',
  areaServed: ['Ciudad de Panamá', 'Costa del Este', 'Clayton', 'Punta Pacífica'],
  sameAs: ['https://www.instagram.com', 'https://www.facebook.com'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
};

function Home() {
  const heroDescription =
    'Acompañamos a familias y empresas de nivel medio-alto en Ciudad de Panamá que necesitan remodelaciones sin sobresaltos, con un arquitecto líder que coordina diseño, permisos y obra llave en mano.';

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
        'Nuestro proceso inmersivo integra moodboards, renders y muestras físicas para alinear expectativas estéticas, funcionalidad y branding.',
    },
  ];

  const faqs = serviceFaqs['remodelacion-apartamentos'];

  const blogHighlights = blogPosts.slice(0, 3);

  return (
    <>
      <SeoHead
        title="Arquitecto en Panamá | Remodelaciones llave en mano"
        description="Arquitecto en Panamá especializado en remodelación de apartamentos, casas y oficinas. Diseños llave en mano con presupuesto cerrado, cronograma y garantía."
        keywords={['arquitecto panamá', 'arquitecto en panamá', 'remodelación de casas panamá', 'remodelación de apartamentos panamá', 'remodelación de oficinas panamá']}
        jsonLd={[localBusinessSchema]}
        openGraph={{ type: 'website', image: 'https://marvin-arquitecto.com/marviper.jpg' }}
      />
      <HeroSection
        eyebrow="Arquitectura estratégica"
        heading="Arquitecto en Panamá para remodelaciones llave en mano"
        subheading="Diseñamos, gestionamos y construimos espacios residenciales y comerciales que aumentan el valor de tu propiedad."
        description={heroDescription}
        imageSrc="/RENDER.png"
        imageAlt="Equipo de arquitectura revisando planos en un espacio moderno"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-7 text-[#1a1a1a]/80">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Remodelaciones premium sin improvisaciones</h3>
            <p>
              Desde hace más de dos décadas, guiamos a clientes exigentes en Costa del Este, Punta Pacífica, Santa María y el centro financiero de la ciudad. Escuchamos tus aspiraciones y diseñamos soluciones a la medida: reorganizamos espacios, integramos cocinas gourmet, mejoramos climatización y traducimos tu estilo de vida en cada detalle. Nuestro equipo combina arquitectos, interioristas y project managers especializados en proyectos residenciales y comerciales de alto impacto.
            </p>
            <p>
              Sabemos que tu tiempo es limitado. Por eso ofrecemos comunicación constante vía WhatsApp, reportes semanales y visitas virtuales cuando viajas. Coordinamos proveedores certificados, controlamos cronogramas y garantizamos acabados impecables para que solo tengas que decidir sobre diseño, materiales y presupuesto final. Cada entrega incluye manual de mantenimiento, garantías por escrito y acompañamiento post-obra.
            </p>
            <p>
              Trabajamos con familias que buscan renovar apartamentos con vista a la bahía, empresarios que desean residencias personalizadas en Clayton, y ejecutivos que necesitan oficinas boutique que comuniquen confianza. También atendemos a desarrolladores que desean transformar locales comerciales en destinos memorables, desde restaurantes de autor hasta clínicas especializadas.
            </p>
            <p>
              Nuestra metodología combina tecnología y artesanía. Digitalizamos el proceso con modelos 3D, tableros colaborativos y seguimiento financiero, mientras cuidamos la ejecución en sitio con artesanos idóneos. Esto se traduce en remodelaciones de apartamentos en Panamá listas para habitar, ampliaciones de casas que integran interior y exterior, y oficinas con acústica y cableado oculto que respaldan tu operación.
            </p>
            <p>
              Como arquitecto remodelaciones Panamá, aseguramos que cada decisión responda a confort, rentabilidad y estilo. Seleccionamos materiales duraderos, maximizamos iluminación natural y diseñamos almacenamiento inteligente. También cuidamos detalles regulatorios: normativas de PH, permisos municipales, coordinación con bomberos y seguridad ocupacional. Tu proyecto avanza con orden, transparencia y resultados predecibles.
            </p>
            <p>
              Si inviertes en alquileres de corto plazo o deseas revalorizar una propiedad antes de vender, calculamos retorno estimado y proponemos intervenciones estratégicas. Implementamos soluciones llave en mano para que consigas mayor ocupación, tarifas premium y reseñas impecables. Además, nuestras remodelaciones de oficinas en Panamá incorporan áreas colaborativas, tecnología integrada y experiencias de hospitalidad que motivan a tu equipo e impresionan a clientes.
            </p>
            <p>
              Estamos comprometidos con el diseño responsable. Optimizamos climatización, aislamos ruidos y utilizamos iluminación eficiente. Cuando el proyecto lo permite, incorporamos vegetación, materiales reciclados y estrategias bioclimáticas que reducen costos de operación y elevan la calidad de vida. Coordinamos auditorías técnicas y entregamos documentación completa para certificaciones o inspecciones futuras.
            </p>
            <p>
              Confía en un despacho que entiende tus prioridades: cumplimiento de plazos, control de presupuesto y estética coherente con tu estilo o marca. Te acompañamos desde la primera idea hasta la entrega con olor a nuevo, listas de chequeo y seguimiento post-ocupación para garantizar que todo funcione como esperas.
            </p>
          </article>
          <aside className="space-y-6 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Servicios destacados</h3>
            <ul className="space-y-3">
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/remodelacion-apartamentos">
                  Remodelación de apartamentos en Panamá
                </a>
              </li>
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/remodelacion-casas">
                  Remodelación de casas con ampliación inteligente
                </a>
              </li>
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/remodelacion-oficinas">
                  Oficinas boutique y espacios comerciales memorables
                </a>
              </li>
              <li>
                <a className="text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href="/servicios/diseno-y-construccion">
                  Diseño y construcción llave en mano en Panamá
                </a>
              </li>
            </ul>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Próximas fechas disponibles</p>
              <p className="mt-2 text-sm">
                Agenda tu diagnóstico inicial para la semana del {new Date().toLocaleDateString('es-PA', { month: 'long', day: 'numeric' })}.
              </p>
              <a
                href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1e3a8a]/90"
              >
                Reservar diagnóstico
              </a>
            </div>
            <div className="rounded-2xl border border-[#1e3a8a]/20 p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">Últimos artículos</p>
              <ul className="mt-3 space-y-2">
                {blogHighlights.map((post) => (
                  <li key={post.slug}>
                    <a className="text-sm text-[#1e3a8a] underline-offset-4 transition-colors hover:text-[#d4af37]" href={`/blog/${post.slug}`}>
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <PainSolutionSection
        heading="Dolores frecuentes que resolvemos con arquitectura estratégica"
        description="Transformamos preocupaciones comunes en resultados tangibles para propietarios exigentes de Ciudad de Panamá."
        items={pains}
      />
      <ProjectsGrid
        projects={projects}
        heading="Proyectos recientes que entregamos llave en mano"
        description="Apartamentos, casas y oficinas en Ciudad de Panamá que renovamos con planificación integral, control de presupuesto y diseño impecable."
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
        description="Resolvemos dudas frecuentes antes de iniciar tu proyecto para que tomes decisiones con certeza."
      />
      <ContactBlock />
    </>
  );
}

export default Home;
