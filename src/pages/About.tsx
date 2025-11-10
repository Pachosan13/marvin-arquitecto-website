import HeroSection from '../components/sections/HeroSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SeoHead from '../components/seo/SeoHead';
import { processSteps, testimonials } from './data/siteContent';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marvin Pérez de Obaldía',
  jobTitle: 'Arquitecto',
  alumniOf: 'Universidad de Panamá',
  url: 'https://marvin-arquitecto.com/sobre',
  image: 'https://marvin-arquitecto.com/marviper.jpg',
  worksFor: {
    '@type': 'ProfessionalService',
    name: 'Estudio Marvin Pérez de Obaldía',
  },
  sameAs: ['https://www.instagram.com', 'https://www.facebook.com'],
};

function About() {
  return (
    <>
      <SeoHead
        title="Sobre el arquitecto Marvin Pérez de Obaldía | Arquitecto en Panamá"
        description="Conoce la trayectoria de Marvin Pérez de Obaldía, arquitecto en Panamá especializado en remodelaciones premium, diseño interior y proyectos llave en mano."
        keywords={['arquitecto panamá', 'arquitecto en panamá', 'arquitecto remodelaciones panamá']}
        jsonLd={[personSchema]}
        openGraph={{ type: 'profile', image: 'https://marvin-arquitecto.com/marviper.jpg' }}
      />
      <HeroSection
        eyebrow="Trayectoria"
        heading="Arquitecto en Panamá con visión humana y estratégica"
        subheading="Marvin Pérez de Obaldía lidera un estudio boutique que combina detalle artesanal, gestión rigurosa y acompañamiento cercano."
        description="Más de 20 años creando espacios memorables para familias y negocios en Ciudad de Panamá."
        imageSrc="/marviper.jpg"
        imageAlt="Retrato del arquitecto Marvin Pérez de Obaldía en estudio de diseño"
        ctaLabel="Agenda mentoría de proyecto"
        secondaryCtaLabel="Descarga portafolio completo"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-7 text-[#1a1a1a]/80">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Historia y propósito</h3>
            <p>
              Desde sus primeros años colaborando con despachos internacionales, Marvin entendió que la arquitectura debía ir más allá de planos y renders. Su objetivo siempre ha sido mejorar la vida de las personas que habitan los espacios y proteger la inversión de quienes confían en su equipo. Tras liderar proyectos residenciales y comerciales en Costa del Este y Punta Pacífica, fundó su propio estudio para ofrecer una atención personalizada de principio a fin.
            </p>
            <p>
              El estudio integra arquitectura, interiorismo y construcción bajo un mismo contrato llave en mano. Esto permite que los clientes tomen decisiones informadas, con un interlocutor único que coordina especialistas, proveedores y autoridades. Marvin lidera personalmente la etapa conceptual, revisa cada entrega técnica y participa en las reuniones clave con familias, juntas directivas y administradores de PH.
            </p>
            <p>
              Su enfoque se basa en escuchar historias, analizar hábitos y traducir aspiraciones en soluciones concretas: cocinas que promueven reuniones familiares, terrazas bioclimáticas para disfrutar de la ciudad, oficinas flexibles que conectan cultura corporativa y productividad. Cada proyecto inicia con entrevistas en profundidad, estudios de iluminación y diagnóstico del inmueble. Luego se definen estrategias que contemplan estilo, presupuesto y tiempos realistas.
            </p>
            <p>
              Marvin es miembro activo del Colegio de Arquitectos de Panamá y ha participado en foros sobre renovación urbana y tendencias de hospitality. Además, colabora con diseñadores de iluminación, ingenieros estructurales y especialistas en domótica para integrar tecnología sin sacrificar calidez. Su filosofía es clara: espacios bellos que también funcionan con precisión quirúrgica.
            </p>
            <p>
              El compromiso del estudio con la transparencia se refleja en reportes semanales, cronogramas accesibles en la nube y visitas guiadas a obra. Los clientes reciben comparativos de materiales, alternativas de inversión y asesoría en garantías para que cada decisión esté respaldada por datos. Gracias a este enfoque, el 80 % de los nuevos proyectos proviene de referidos directos y familias que amplían su portafolio inmobiliario.
            </p>
            <p>
              La visión de Marvin también incluye el impacto social: fomenta la contratación de artesanos locales, promueve capacitación en obra y apoya proyectos de vivienda digna en comunidades vulnerables. Cada año destina horas pro bono para asesorar a emprendedores gastronómicos y creativos que necesitan transformar locales con recursos limitados pero alto potencial.
            </p>
          </article>
          <aside className="space-y-6 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Credenciales</h3>
              <ul className="mt-4 space-y-3">
                <li>Arquitecto idóneo, Junta Técnica de Ingeniería y Arquitectura</li>
                <li>Especialización en interiorismo residencial, Barcelona</li>
                <li>Certificación en gestión de proyectos PMP®</li>
                <li>Miembro Colegio de Arquitectos de Panamá</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Reconocimientos</h3>
              <ul className="mt-4 space-y-3">
                <li>Premio a Mejor Remodelación Residencial · 2022</li>
                <li>Distinción Diseño de Oficinas Boutique · 2023</li>
                <li>Invitado a Panel de Hospitalidad Sostenible · 2024</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Valores del estudio</p>
              <ul className="mt-3 space-y-2">
                <li>Escucha empática y acompañamiento cercano</li>
                <li>Transparencia financiera y contratos claros</li>
                <li>Diseño atemporal con detalles artesanales</li>
                <li>Responsabilidad social y ambiental</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-[#f8f8f8] py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h3 className="text-2xl font-semibold text-[#1a1a1a]">Equipo multidisciplinario</h3>
          <p className="mt-4 text-base text-[#1a1a1a]/70">
            Marvin lidera un equipo de 12 profesionales que incluye arquitectos, diseñadores de interiores, coordinadores de obra, especialistas en iluminación y supervisores de calidad. Cada rol tiene protocolos claros para garantizar que tu proyecto avance con precisión. Utilizamos herramientas digitales para coordinar proveedores y documentar cambios en tiempo real, evitando sorpresas y retrasos.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Arquitectura & Concepto</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/70">
                Desarrollo de estrategias espaciales, moodboards, renders y selección de materiales que reflejen tu estilo de vida o ADN corporativo.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Coordinación técnica</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/70">
                Gestión de planos, permisos, ingenierías, presupuesto llave en mano y seguimiento financiero con reportes semanales.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a]">Construcción & entrega</p>
              <p className="mt-2 text-sm text-[#1a1a1a]/70">
                Supervisión en sitio, control de calidad, instalación de mobiliario y acompañamiento post-obra con garantía escrita.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProcessSection
        steps={processSteps}
        heading="Proceso de trabajo dirigido por Marvin"
        description="Cada etapa tiene responsables definidos y comunicación constante para asegurar que tu proyecto cumpla objetivos estéticos, financieros y de tiempo."
      />
      <TestimonialsSection
        testimonials={testimonials}
        heading="Qué dicen los clientes sobre Marvin"
        description="Historias de familias, directivos y emprendedores que confiaron en el liderazgo del estudio."
      />
    </>
  );
}

export default About;
