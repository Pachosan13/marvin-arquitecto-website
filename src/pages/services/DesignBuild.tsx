import HeroSection from '../../components/sections/HeroSection';
import PainSolutionSection from '../../components/sections/PainSolutionSection';
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import ProcessSection from '../../components/sections/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQAccordion from '../../components/sections/FAQAccordion';
import SeoHead from '../../components/seo/SeoHead';
import { processSteps, projects, serviceFaqs, testimonials } from '../data/siteContent';

const designBuildFaqs = serviceFaqs['diseno-y-construccion'];

function DesignBuild() {
  const pains = [
    {
      pain: 'Coordinación compleja entre arquitectos, ingenieros y contratistas que genera errores y retrabajos.',
      solution:
        'Centralizamos diseño, ingenierías y construcción en un solo equipo que gestiona comunicación, cronograma y presupuesto.',
    },
    {
      pain: 'Sobrecostos inesperados por cambios sin control y proveedores no certificados.',
      solution:
        'Definimos presupuesto llave en mano con contratos claros, homologamos proveedores y controlamos cambios con órdenes aprobadas.',
    },
    {
      pain: 'Falta de visibilidad sobre avances, calidad y decisiones críticas.',
      solution:
        'Implementamos reportes semanales, dashboards en la nube y visitas virtuales/presenciales para validar cada hito.',
    },
  ];

  return (
    <>
      <SeoHead
        title="Diseño y construcción llave en mano en Panamá"
        description="Servicio de diseño y construcción llave en mano en Panamá. Un solo equipo coordina arquitectura, ingenierías, permisos y obra con presupuesto cerrado y supervisión directa."
        keywords={['diseño y construcción panamá', 'remodelación llave en mano panamá', 'arquitecto panamá']}
        openGraph={{ type: 'website' }}
      />
      <HeroSection
        eyebrow="Llave en mano"
        heading="Diseño y construcción llave en mano en Panamá"
        subheading="Un solo equipo dirige arquitectura, ingenierías y obra para entregar proyectos residenciales y comerciales sin estrés."
        description="Coordinamos cada etapa: visión, diseño, permisos, presupuesto cerrado, ejecución, mobiliario y entrega con garantías."
        imageSrc="/planos.jpg"
        imageAlt="Planos arquitectónicos y muestras de materiales"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-7 text-[#1a1a1a]/80">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Un solo contrato, resultados garantizados</h3>
            <p>
              Nuestro servicio de diseño y construcción panamá está pensado para propietarios que desean un aliado integral. Iniciamos con un workshop para entender objetivos, presupuesto y cronograma deseado. Luego desarrollamos un concepto arquitectónico con renders, moodboards y maquetas digitales que muestran el potencial del proyecto.
            </p>
            <p>
              Simultáneamente coordinamos ingenierías estructurales, eléctricas, mecánicas y sanitarias. Elaboramos documentación para permisos municipales, bomberos y juntas comunales. Al tener diseño y construcción en la misma mesa, reducimos errores, adelantamos compras críticas y aseguramos que cada decisión esté alineada con la realidad de obra.
            </p>
            <p>
              Construimos un presupuesto llave en mano con alcance detallado, hitos y pagos vinculados a entregables. Gestionamos licitaciones, homologamos proveedores y negociamos mejores condiciones. Mantenemos transparencia total con reportes semanales que comparan avance físico y financiero.
            </p>
            <p>
              Durante la obra asignamos un project manager dedicado, supervisores de campo y especialistas por disciplina. Controlamos calidad, seguridad ocupacional y logística. También manejamos compras de acabados importados, mobiliario a medida y equipamiento especializado para que todo llegue en tiempo.
            </p>
            <p>
              Antes de entregar realizamos recorridos de revisión, listas de punch y pruebas de sistemas. Coordinamos limpieza profunda, estilismo y entrega formal con manual de mantenimiento y garantías. Además, ofrecemos soporte posentrega para ajustes menores y acompañamiento durante los primeros meses de operación.
            </p>
            <p>
              Hemos ejecutado proyectos residenciales, oficinas, restaurantes y locales comerciales bajo este modelo. Los clientes destacan la tranquilidad de tratar con un solo equipo que responde por diseño, presupuesto y calidad final.
            </p>
          </article>
          <aside className="space-y-6 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Incluye</h3>
            <ul className="space-y-3">
              <li>Workshop estratégico y roadmap del proyecto</li>
              <li>Arquitectura, interiorismo e ingenierías integradas</li>
              <li>Gestión de permisos y licencias completos</li>
              <li>Presupuesto llave en mano con hitos claros</li>
              <li>Project management, supervisión y control de calidad</li>
              <li>Entrega con mobiliario, estilismo y garantías</li>
            </ul>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Aplicable a</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Residencias de alta gama y villas</li>
                <li>Oficinas boutique y coworking</li>
                <li>Restaurantes de autor y experiencias gastronómicas</li>
                <li>Locales comerciales y showrooms</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1e3a8a]/20 p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">Resultados</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Menos retrabajos y mejor control de costos</li>
                <li>Comunicación directa con un solo responsable</li>
                <li>Integración total de diseño, tecnología y construcción</li>
                <li>Entrega en tiempos acordados con soporte posventa</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <PainSolutionSection
        heading="Por qué elegir diseño y construcción llave en mano"
        description="Centralizamos especialistas y decisiones para proteger tu inversión en cada etapa."
        items={pains}
      />
      <ProjectsGrid
        projects={projects}
        heading="Proyectos entregados bajo modalidad llave en mano"
        description="Residencial, comercial y hospitality diseñados y construidos por un solo equipo."
      />
      <ProcessSection
        steps={processSteps}
        heading="Nuestro método llave en mano"
        description="Diagnóstico, diseño, presupuesto cerrado, ejecución supervisada y entrega con garantías."
      />
      <TestimonialsSection
        testimonials={testimonials}
        heading="Clientes que eligieron nuestro modelo integral"
        description="Historias de éxito en residencial y comercial con resultados medibles."
      />
      <FAQAccordion items={designBuildFaqs} heading="Preguntas frecuentes sobre diseño y construcción" />
    </>
  );
}

export default DesignBuild;
