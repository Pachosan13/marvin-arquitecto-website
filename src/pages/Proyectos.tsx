import ProjectsShowcase from '../components/ProjectsShowcase';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, localBusinessSchema } from '../seo/jsonld';

const Proyectos = () => {
  const canonical = 'https://mparquitecto.com/proyectos';

  return (
    <>
      <SeoHead
        title="Portafolio de proyectos | Marvin Pérez Arquitecto en Panamá"
        description="Explora proyectos residenciales y corporativos diseñados y ejecutados por Marvin Pérez de Obaldía en Ciudad de Panamá."
        canonical={canonical}
        schema={[
          localBusinessSchema({
            name: 'Marvin Pérez Arquitecto',
            description: 'Portafolio de remodelaciones residenciales y oficinas llave en mano en Panamá.',
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
              { name: 'Proyectos', item: canonical },
            ],
          }),
        ]}
      />
      <main className="section-padding py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Portfolio</span>
          <h1 className="mt-6 text-4xl font-serif text-dark md:text-5xl">Proyectos residenciales y corporativos</h1>
          <p className="mt-6 text-lg text-muted">
            Cada obra se dirige con una visión integral que combina diseño arquitectónico, interiorismo y coordinación de obra.
            Aquí algunos destacados.
          </p>
        </div>
      </main>
      <ProjectsShowcase />
    </>
  );
};

export default Proyectos;
