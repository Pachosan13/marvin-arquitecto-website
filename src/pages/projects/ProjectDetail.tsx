import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SeoHead from '../../components/seo/SeoHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import { projects } from '../data/siteContent';

function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: project.title,
    description: project.brief,
    image: project.gallery.map((item) => `https://marvin-arquitecto.com${item.src}`),
    location: project.location,
    areaServed: 'Ciudad de Panamá',
    dateCreated: project.year,
    creator: {
      '@type': 'Person',
      name: 'Marvin Pérez de Obaldía',
    },
  };

  return (
    <>
      <SeoHead
        title={`${project.title} | Proyecto de arquitectura en Panamá`}
        description={project.brief}
        keywords={['proyectos arquitectura panamá', 'arquitecto panamá', ...project.tags]}
        jsonLd={[projectSchema]}
        openGraph={{ type: 'article', image: `https://marvin-arquitecto.com${project.cover}` }}
      />
      <article className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
          <Breadcrumbs
            items={[
              { label: 'Inicio', to: '/' },
              { label: 'Proyectos', to: '/proyectos' },
              { label: project.title },
            ]}
          />
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">{project.title}</h2>
          <p className="mt-4 text-base text-[#1a1a1a]/70">{project.brief}</p>
          <div className="mt-6 grid gap-4 text-sm text-[#1a1a1a]/80 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-[#1a1a1a]">Ubicación</p>
              <p>{project.location}</p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a]">Área</p>
              <p>{project.area}</p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a]">Año</p>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={project.cover}
            alt={project.coverAlt}
            className="h-[480px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-base leading-7 text-[#1a1a1a]/80">
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">Alcance del proyecto</h3>
              <ul className="list-disc space-y-2 pl-6">
                {project.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Cada fase se ejecutó con coordinación integral entre diseño, ingeniería y obra. Entregamos reportes semanales, gestionamos compras de acabados importados y mantuvimos comunicación directa con los propietarios a través de videollamadas y visitas guiadas.
              </p>
            </div>
            <aside className="space-y-4 rounded-3xl border border-[#1e3a8a]/10 bg-[#f8f8f8] p-6 text-sm text-[#1a1a1a]/80">
              <p className="text-sm font-semibold text-[#1a1a1a]">Características clave</p>
              <ul className="space-y-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1e3a8a]">
                    #{tag}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-[#1a1a1a]">Servicios incluidos</p>
              <p className="text-xs text-[#1a1a1a]/70">
                Diseño arquitectónico, interiorismo, coordinación de ingenierías, gestión de permisos, construcción llave en mano y entrega con estilismo.
              </p>
            </aside>
          </section>
          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Galería del proyecto</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.gallery.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-3xl">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    width={item.width}
                    height={item.height}
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
      </article>
      <ProjectsGrid
        projects={related}
        heading="Otros proyectos que podrían interesarte"
        description="Explora más remodelaciones residenciales y comerciales ejecutadas por nuestro estudio."
      />
    </>
  );
}

export default ProjectDetail;
