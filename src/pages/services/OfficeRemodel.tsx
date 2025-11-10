import HeroSection from '../../components/sections/HeroSection';
import PainSolutionSection from '../../components/sections/PainSolutionSection';
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import ProcessSection from '../../components/sections/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQAccordion from '../../components/sections/FAQAccordion';
import SeoHead from '../../components/seo/SeoHead';
import { processSteps, projects, serviceFaqs, testimonials } from '../data/siteContent';

const officeFaqs = serviceFaqs['remodelacion-oficinas'];

function OfficeRemodel() {
  const pains = [
    {
      pain: 'Oficinas que no reflejan la marca ni generan confianza en clientes y talento.',
      solution:
        'Construimos briefings estratégicos, diseñamos experiencias de marca y aplicamos materiales coherentes con tu identidad corporativa.',
    },
    {
      pain: 'Interrupción operativa por obras extensas durante horario laboral.',
      solution:
        'Planificamos trabajos nocturnos o fines de semana, coordinamos logística con administración y mantenemos estaciones clave operativas.',
    },
    {
      pain: 'Infraestructura tecnológica y de climatización obsoleta que afecta productividad.',
      solution:
        'Integramos cableado, data, HVAC, iluminación y acústica con especialistas MEP para garantizar confort y eficiencia energética.',
    },
  ];

  const filteredProjects = projects.filter((project) => project.tags.includes('oficinas'));

  return (
    <>
      <SeoHead
        title="Remodelación de oficinas en Panamá | Arquitectura corporativa"
        description="Remodelación de oficinas en Panamá con identidad de marca, tecnología integrada y ejecución fuera de horario. Diseño llave en mano para despachos, clínicas y agencias."
        keywords={['remodelación de oficinas panamá', 'arquitecto comercial panamá', 'diseño de espacios comerciales panamá']}
        openGraph={{ type: 'website' }}
      />
      <HeroSection
        eyebrow="Oficinas"
        heading="Remodelación de oficinas en Panamá con identidad y eficiencia"
        subheading="Creamos espacios que potencian productividad, bienestar y experiencia de clientes."
        description="Integramos interiorismo, tecnología y gestión de obra para entregar oficinas boutique, clínicas y agencias listas para operar."
        imageSrc="/oficina1.jpg"
        imageAlt="Oficina corporativa moderna"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-7 text-[#1a1a1a]/80">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Oficinas que inspiran confianza y resultados</h3>
            <p>
              Remodelamos oficinas panamá para firmas legales, agencias creativas, clínicas y empresas tecnológicas que necesitan espacios de alto rendimiento. Iniciamos con un taller estratégico para comprender procesos, cultura, identidad de marca y expectativas de clientes. Con esa información diseñamos layouts eficientes, zonas colaborativas y áreas de hospitalidad que fortalecen reputación.
            </p>
            <p>
              Desarrollamos conceptos de diseño que combinan materiales nobles, iluminación cálida y soluciones acústicas. Integramos branding ambiental, señalización y arte local para crear experiencias memorables. Cada propuesta incluye renders, moodboards y prototipos de mobiliario para validar decisiones con directivos y equipos internos.
            </p>
            <p>
              Coordinamos ingenierías para electricidad, data, HVAC, audio, video y seguridad. Trabajamos con especialistas certificados para garantizar cumplimiento de normativas y eficiencia energética. También diseñamos estaciones de trabajo ergonómicas, salas de juntas híbridas, phone booths y áreas de bienestar con vegetación natural.
            </p>
            <p>
              Planificamos ejecución por fases o fuera de horario para evitar interrupciones. Nuestro equipo de logística protege pisos, coordina accesos y mantiene limpia la zona de obra. Gestionamos permisos municipales, inspecciones y relaciones con la administración del edificio. Mantendrás operaciones activas mientras transformamos tu oficina.
            </p>
            <p>
              Ofrecemos presupuesto llave en mano con hitos y reportes semanales que comparan avance físico y financiero. Documentamos cada decisión, registramos cambios y aseguramos entrega puntual. Al finalizar instalamos mobiliario, calibramos sistemas tecnológicos y realizamos entrenamiento para tu equipo de mantenimiento.
            </p>
            <p>
              Hemos ejecutado proyectos en Obarrio, Punta Pacífica, Costa del Este y Santa María. Los espacios resultantes aumentan retención de talento, elevan percepción de marca y facilitan reuniones con clientes estratégicos.
            </p>
          </article>
          <aside className="space-y-6 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Incluye</h3>
            <ul className="space-y-3">
              <li>Briefing estratégico con stakeholders clave</li>
              <li>Diseño interior, branding ambiental y señalización</li>
              <li>Coordinación de ingenierías MEP y tecnología</li>
              <li>Presupuesto llave en mano con reportes semanales</li>
              <li>Ejecución fuera de horario y logística controlada</li>
              <li>Entrega con mobiliario, decoración y garantía</li>
            </ul>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Soluciones clave</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Salas híbridas con tecnología plug & play</li>
                <li>Estaciones ergonómicas con cableado oculto</li>
                <li>Áreas de hospitalidad para clientes VIP</li>
                <li>Zonas de bienestar con biofilia integrada</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1e3a8a]/20 p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">Resultados</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Experiencia del cliente alineada con tu marca</li>
                <li>Mayor productividad y satisfacción del equipo</li>
                <li>Optimización de metros cuadrados y flujos</li>
                <li>Implementación en 6 a 10 semanas según alcance</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <PainSolutionSection
        heading="Retos frecuentes en remodelación de oficinas"
        description="Soluciones para empresas que requieren espacios flexibles, tecnológicos y con identidad."
        items={pains}
      />
      <ProjectsGrid
        projects={filteredProjects}
        heading="Oficinas que hemos transformado"
        description="Despachos legales, agencias creativas y clínicas privadas con ambientes premium y tecnología integrada."
      />
      <ProcessSection
        steps={processSteps}
        heading="Proceso corporativo llave en mano"
        description="Metodología con planificación, supervisión y comunicación constante para entregar tu oficina sin contratiempos."
      />
      <TestimonialsSection
        testimonials={testimonials}
        heading="Directivos que confiaron en nosotros"
        description="Historias de empresas que hoy disfrutan oficinas estratégicas y memorables."
      />
      <FAQAccordion items={officeFaqs} heading="Preguntas frecuentes sobre remodelación de oficinas" />
    </>
  );
}

export default OfficeRemodel;
