import HeroSection from '../../components/sections/HeroSection';
import PainSolutionSection from '../../components/sections/PainSolutionSection';
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import ProcessSection from '../../components/sections/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import FAQAccordion from '../../components/sections/FAQAccordion';
import SeoHead from '../../components/seo/SeoHead';
import { processSteps, projects, serviceFaqs, testimonials } from '../data/siteContent';

const houseFaqs = serviceFaqs['remodelacion-casas'];

function HouseRemodel() {
  const pains = [
    {
      pain: 'Falta de integración entre interior, terraza y jardín que limita experiencias familiares.',
      solution:
        'Diseñamos ampliaciones y envolventes bioclimáticas que conectan interior y exterior con ventilación cruzada y protección solar.',
    },
    {
      pain: 'Sobrecostos por cambios de alcance y proveedores sin control.',
      solution:
        'Gestionamos contratos con precios cerrados, homologamos proveedores y monitoreamos avances físicos vs financieros cada semana.',
    },
    {
      pain: 'Fachadas desactualizadas que no reflejan tu estilo ni valor de la propiedad.',
      solution:
        'Renovamos fachadas con materiales nobles, iluminación arquitectónica y paisajismo curado para incrementar plusvalía.',
    },
  ];

  const filteredProjects = projects.filter((project) => project.tags.includes('casas'));

  return (
    <>
      <SeoHead
        title="Remodelación de casas en Panamá | Arquitectura residencial"
        description="Remodelación de casas en Panamá con ampliaciones, terrazas bioclimáticas y diseño interior personalizado. Presupuesto cerrado y supervisión directa."
        keywords={['remodelación de casas panamá', 'arquitectura residencial panamá', 'ampliación y remodelación de casas panamá']}
        openGraph={{ type: 'website' }}
      />
      <HeroSection
        eyebrow="Casas"
        heading="Remodelación de casas en Panamá con ampliaciones inteligentes"
        subheading="Integramos arquitectura, interiorismo y paisajismo para transformar tu hogar en un oasis moderno y funcional."
        description="Planificamos cada etapa: diagnóstico estructural, diseño personalizado, permisos municipales y obra llave en mano con garantías."
        imageSrc="/CASAIV.jpg"
        imageAlt="Terraza remodelada de casa con mobiliario exterior"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-7 text-[#1a1a1a]/80">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Hogares a la medida de tu familia</h3>
            <p>
              Remodelar tu casa en Panamá implica coordinar estructuras, instalaciones, permisos y convivencia diaria. Nuestro equipo gestiona cada aspecto para que disfrutes el proceso sin estrés. Empezamos con un levantamiento detallado para evaluar cimentación, columnas, instalaciones y ventilación natural. Con esos datos proponemos ampliaciones, reconfiguración de espacios y mejoras energéticas que potencian tu estilo de vida.
            </p>
            <p>
              Diseñamos cocinas abiertas, terrazas techadas, master suites, cuartos de huéspedes y zonas de entretenimiento adaptadas a familias con niños, mascotas o visitas frecuentes. También creamos estudios y gimnasios privados con aislamiento acústico. Seleccionamos materiales resistentes al clima tropical y proponemos soluciones de iluminación que aportan calidez y eficiencia.
            </p>
            <p>
              Gestionamos permisos municipales, estudios estructurales y coordinación con juntas comunales cuando el proyecto lo requiere. Trabajamos con ingenieros idóneos para garantizar seguridad y cumplimiento normativo. Además, planificamos la obra por fases para minimizar interrupciones, incluso si la familia permanece en la casa durante la remodelación.
            </p>
            <p>
              Implementamos contratos llave en mano con hitos, entregas y pagos escalonados. Supervisamos obra diariamente, compartimos avances con fotografías y organizamos reuniones semanales presenciales o virtuales para validar decisiones. Nuestro equipo de logística controla abastecimiento, almacenamiento y protección del mobiliario existente.
            </p>
            <p>
              También actualizamos fachadas con nuevos revestimientos, iluminación arquitectónica y paisajismo curado. Incorporamos pérgolas bioclimáticas, piscinas, decks y jardines verticales para disfrutar del exterior durante todo el año. Si buscas ampliar o añadir niveles, coordinamos estudios estructurales y permisos especiales con las autoridades competentes.
            </p>
            <p>
              Al finalizar la obra realizamos un recorrido completo, detallamos garantías, entregamos manual de mantenimiento y organizamos una sesión de estilismo. Si viajas con frecuencia o resides temporalmente fuera del país, coordinamos visitas virtuales y cuidamos cada detalle hasta tu regreso.
            </p>
            <p>
              Hemos remodelado casas en Clayton, Costa del Este, Brisas del Golf y Coronado, creando viviendas que reflejan la identidad de cada familia. Los resultados se traducen en mayor confort, valor patrimonial y espacios pensados para compartir.
            </p>
          </article>
          <aside className="space-y-6 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Incluye</h3>
            <ul className="space-y-3">
              <li>Diagnóstico estructural y de instalaciones</li>
              <li>Diseño arquitectónico, interiorismo y paisajismo</li>
              <li>Permisos municipales, juntas comunales y bomberos</li>
              <li>Presupuesto llave en mano con hitos definidos</li>
              <li>Supervisión diaria del arquitecto líder</li>
              <li>Entrega con limpieza, mobiliario e iluminación</li>
            </ul>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Ideas destacadas</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Terrazas con pérgolas bioclimáticas y barra gourmet</li>
                <li>Fachadas contemporáneas con revestimientos naturales</li>
                <li>Suites principales con vestidor y baño spa</li>
                <li>Family rooms con sistemas audiovisuales integrados</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#1e3a8a]/20 p-5">
              <p className="text-sm font-semibold text-[#1a1a1a]">Resultados</p>
              <ul className="mt-3 space-y-2 text-xs text-[#1a1a1a]/70">
                <li>Aumento de plusvalía de hasta 22 %</li>
                <li>Ambientes confortables con mejor climatización</li>
                <li>Integración de interior y exterior para reuniones</li>
                <li>Garantía de obra y acompañamiento posentrega</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <PainSolutionSection
        heading="Retos comunes al remodelar casas en Panamá"
        description="Soluciones estratégicas para ampliar, modernizar y proteger tu inversión familiar."
        items={pains}
      />
      <ProjectsGrid
        projects={filteredProjects}
        heading="Casas transformadas con nuestro estudio"
        description="Explora ampliaciones, terrazas y fachadas renovadas que hemos entregado en Ciudad de Panamá."
      />
      <ProcessSection
        steps={processSteps}
        heading="Proceso integral para remodelar tu casa"
        description="Del diagnóstico a la entrega llave en mano con supervisión constante y comunicación transparente."
      />
      <TestimonialsSection
        testimonials={testimonials}
        heading="Familias que confían en nuestro estudio"
        description="Testimonios de clientes que renovaron su hogar con resultados extraordinarios."
      />
      <FAQAccordion items={houseFaqs} heading="Preguntas frecuentes sobre remodelación de casas" />
    </>
  );
}

export default HouseRemodel;
