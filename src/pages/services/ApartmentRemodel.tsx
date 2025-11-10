import HeroSection from '../../components/sections/HeroSection';
import PainSolutionSection from '../../components/sections/PainSolutionSection';
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import ProcessSection from '../../components/sections/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQAccordion from '../../components/sections/FAQAccordion';
import SeoHead from '../../components/seo/SeoHead';
import { processSteps, projects, serviceFaqs, testimonials } from '../data/siteContent';

const apartmentFaqs = serviceFaqs['remodelacion-apartamentos'];

function ApartmentRemodel() {
  const pains = [
    {
      pain: 'Obras que se extienden por semanas sin avances claros ni responsables definidos.',
      solution:
        'Creamos cronogramas semanales con hitos y responsables, compartimos reportes con fotos y aseguramos cuadrillas especializadas para cada etapa.',
    },
    {
      pain: 'Dificultad para coordinar permisos con el PH, ascensores y áreas comunes.',
      solution:
        'Gestionamos toda la documentación, notificamos a la administración y protegemos accesos comunes con nuestro equipo de logística.',
    },
    {
      pain: 'Cambios de diseño sobre la marcha que elevan costos y retrasan entregas.',
      solution:
        'Validamos diseño con renders, moodboards y muestras físicas para tomar decisiones antes de iniciar construcción.',
    },
  ];

  const filteredProjects = projects.filter((project) => project.tags.includes('apartamentos'));

  return (
    <>
      <SeoHead
        title="Remodelación de apartamentos en Panamá | Arquitecto"
        description="Remodelación de apartamentos en Panamá con diseño, permisos y obra llave en mano. Optimización de espacios, acabados premium y cronograma garantizado."
        keywords={['remodelación de apartamentos panamá', 'arquitecto panamá', 'arquitecto remodelaciones panamá']}
        openGraph={{ type: 'website' }}
      />
      <HeroSection
        eyebrow="Apartamentos"
        heading="Remodelación de apartamentos en Panamá sin sorpresas"
        subheading="Redistribuimos espacios, diseñamos cocinas gourmet y entregamos acabados premium que elevan el valor de tu propiedad."
        description="Coordinamos permisos del PH, planificamos logística, definimos presupuesto cerrado y supervisamos cada etapa hasta la entrega lista para habitar."
        imageSrc="/Render1.png"
        imageAlt="Cocina moderna en apartamento remodelado"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-7 text-[#1a1a1a]/80">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Apartamentos diseñados para tu estilo de vida</h3>
            <p>
              Diseñamos remodelaciones de apartamentos panamá para familias, parejas ejecutivas e inversionistas que requieren un proceso controlado. Iniciamos con una visita técnica o recorrido virtual para evaluar instalaciones existentes, estructura y reglamentos del PH. Luego desarrollamos un diagnóstico que identifica oportunidades de redistribución, iluminación, almacenamiento y confort acústico.
            </p>
            <p>
              A partir del diagnóstico construimos una propuesta integral con planos, renders y moodboards que muestran materiales, mobiliario y paleta cromática. Trabajamos contigo para definir cocina, baños, recámaras y áreas sociales que respondan a tu estilo de vida. Si el apartamento se destinará a alquiler, sugerimos acabados resistentes y estrategias para maximizar ocupación y tarifas.
            </p>
            <p>
              Gestionamos permisos con el municipio y la administración del edificio. Elaboramos carta de responsabilidad profesional, planos técnicos y memorias cuando se requiere intervención estructural. Coordinamos horarios de carga, protección de ascensores y rutas de acceso para minimizar molestias a vecinos y mantener la obra en orden.
            </p>
            <p>
              Durante la ejecución asignamos cuadrillas especializadas para demolición, instalaciones, acabados finos y carpintería a medida. Supervisamos diariamente, documentamos avances con fotografías y mantenemos comunicación continua vía WhatsApp y correo. También manejamos compras de electrodomésticos, luminarias y mobiliario para garantizar compatibilidad y tiempos de entrega.
            </p>
            <p>
              Nuestro presupuesto llave en mano incluye mano de obra, materiales, mobiliario fijo y estilismo final. Los cambios solicitados durante la obra se registran con órdenes aprobadas para mantener claridad financiera. Antes de la entrega realizamos controles de calidad, limpieza profunda y capacitación sobre sistemas instalados para que disfrutes tu apartamento desde el día uno.
            </p>
            <p>
              Si resides en otro país, habilitamos un dashboard en la nube donde podrás revisar avances, aprobar decisiones y participar en reuniones virtuales. También coordinamos visitas presenciales cuando estés en la ciudad para que experimentes los materiales y ajustes finales.
            </p>
            <p>
              Nuestro equipo ha remodelado apartamentos en Costa del Este, Punta Pacífica, Santa María, Coco del Mar y el Casco Antiguo, adaptando cada proyecto a las características del inmueble y reglamentos específicos. Entregamos espacios sofisticados, funcionales y preparados para soportar el clima tropical de Panamá.
            </p>
          </article>
          <aside className="space-y-6 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Incluye</h3>
            <ul className="space-y-3">
              <li>Diagnóstico técnico y levantamiento de espacios</li>
              <li>Planos, renders y moodboards personalizados</li>
              <li>Presupuesto llave en mano y control financiero</li>
              <li>Gestión de permisos y comunicación con el PH</li>
              <li>Supervisión diaria y reportes semanales</li>
              <li>Entrega con limpieza, estilismo y garantías</li>
            </ul>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Ideas populares</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Cocinas abiertas con isla y almacenamiento oculto</li>
                <li>Closets vestidores con iluminación integrada</li>
                <li>Baños tipo spa con duchas de lluvia y revestimientos importados</li>
                <li>Estudios híbridos para home office y visitas</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1e3a8a]/20 p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">Resultados</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Valor de reventa incrementado en promedio 18%</li>
                <li>Optimización de almacenamiento y circulación</li>
                <li>Reducción de ruido y mejoras de climatización</li>
                <li>Entrega dentro de 8 a 12 semanas según alcance</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <PainSolutionSection
        heading="Desafíos típicos en remodelación de apartamentos"
        description="Resolvemos los puntos críticos de coordinación y diseño para que disfrutes un proceso ágil."
        items={pains}
      />
      <ProjectsGrid
        projects={filteredProjects}
        heading="Apartamentos transformados recientemente"
        description="Proyectos en Costa del Este, Punta Pacífica y Casco Antiguo con acabados personalizados y mobiliario a medida."
      />
      <ProcessSection
        steps={processSteps}
        heading="Proceso llave en mano para apartamentos"
        description="Cinco etapas claras que aseguran control total de presupuesto, diseño y tiempos de entrega."
      />
      <TestimonialsSection
        testimonials={testimonials}
        heading="Familias y propietarios satisfechos"
        description="Clientes que confiaron en nuestro estudio para remodelar sus apartamentos en Panamá."
      />
      <FAQAccordion
        items={apartmentFaqs}
        heading="Preguntas frecuentes sobre remodelación de apartamentos"
      />
    </>
  );
}

export default ApartmentRemodel;
