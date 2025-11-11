import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, localBusinessSchema } from '../seo/jsonld';
import { useReveal } from '../hooks/useReveal';

const Sobre = () => {
  const canonical = 'https://mparquitecto.com/sobre';
  const { ref: storyRef, visible: storyVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: sidebarRef, visible: sidebarVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: methodologyRef, visible: methodologyVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });

  return (
    <>
      <SeoHead
        title="Sobre Marvin Pérez de Obaldía | Arquitecto en Panamá"
        description="Conoce la trayectoria de Marvin Pérez de Obaldía, arquitecto panameño especializado en remodelaciones residenciales y oficinas llave en mano."
        canonical={canonical}
        schema={[
          localBusinessSchema({
            name: 'Marvin Pérez de Obaldía - Arquitecto',
            description: 'Trayectoria y metodología de Marvin Pérez de Obaldía en Ciudad de Panamá.',
            url: 'https://mparquitecto.com',
            telephone: '+50766758035',
            email: 'hola@mp-arquitecto.com',
            address: {
              addressLocality: 'Ciudad de Panamá',
              addressRegion: 'Panamá',
              addressCountry: 'PA',
            },
          }),
          breadcrumbSchema({
            items: [
              { name: 'Inicio', item: 'https://mparquitecto.com/' },
              { name: 'Sobre', item: canonical },
            ],
          }),
        ]}
      />
      <main className="section-padding py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Estudio</span>
          <h1 className="mt-6 text-4xl font-serif text-dark md:text-5xl">Sobre Marvin Pérez de Obaldía</h1>
          <p className="mt-6 text-lg text-muted">
            Arquitecto panameño con más de dos décadas dirigiendo remodelaciones de alto nivel para residencias y corporativos. Su
            sello: precisión constructiva, estética atemporal y procesos transparentes.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div
            ref={storyRef}
            className={`space-y-6 transition-all duration-700 ${storyVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h2 className="text-3xl font-serif text-dark">Diseño con dirección de obra integrada</h2>
            <p className="text-base text-muted">
              Marvin estudió arquitectura en Panamá y ha colaborado con estudios internacionales en proyectos residenciales y
              corporativos. Desde 2003 lidera su firma, enfocada en remodelaciones llave en mano donde el diseño, la selección de
              materiales y la ejecución se manejan desde un mismo equipo.
            </p>
            <p className="text-base text-muted">
              Cada proyecto inicia con un diagnóstico profundo del espacio y las necesidades del cliente. Posteriormente se
              desarrollan moodboards, renders y planos técnicos que sirven como hoja de ruta para coordinar a proveedores,
              fabricantes y especialistas.
            </p>
            <div className="rounded-[32px] bg-cement p-8 text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-dark/70">Reconocimientos y membresías</p>
              <ul className="mt-4 space-y-2 text-base text-dark/80">
                <li>Miembro idóneo de la Junta Técnica de Ingeniería y Arquitectura (JTIA).</li>
                <li>Certificado en Project Management para construcción, Panamá 2021.</li>
                <li>Docente invitado en la Universidad de Panamá para talleres de interiorismo.</li>
              </ul>
            </div>
          </div>
          <div
            ref={sidebarRef}
            className={`space-y-10 transition-all duration-700 ${sidebarVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="overflow-hidden rounded-[40px]">
              <img src="/oficina1.jpg" alt="Equipo en estudio de arquitectura" loading="lazy" decoding="async" />
            </div>
            <div className="space-y-4 text-sm uppercase tracking-[0.3em] text-muted">
              <div>
                <p className="text-3xl font-serif text-dark">+60</p>
                <p>remodelaciones residenciales entregadas</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-dark">+25</p>
                <p>oficinas llave en mano</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-dark">9/10</p>
                <p>clientes refieren nuestro trabajo</p>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={methodologyRef}
          className={`mx-auto mt-24 max-w-5xl transition-all duration-700 ${
            methodologyVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-serif text-dark">Metodología</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[{
              title: 'Escucha activa',
              description: 'Identificamos prioridades estéticas y funcionales desde la primera reunión. Sin juicios, con claridad.',
            }, {
              title: 'Diseño colaborativo',
              description: 'Moodboards, renders y muestras físicas permiten visualizar cada decisión antes de construir.',
            }, {
              title: 'Dirección rigurosa',
              description: 'Coordinamos contratistas, inspeccionamos avances y documentamos cada etapa con reportes visuales.',
            }].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-black/10 bg-white p-8 shadow-soft-lg">
                <h3 className="text-xl font-serif text-dark">{item.title}</h3>
                <p className="mt-4 text-base text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Sobre;
