import { useMemo } from 'react';
import ProjectsGrid from '../../components/sections/ProjectsGrid';
import SeoHead from '../../components/seo/SeoHead';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { projects } from '../data/siteContent';

function ProjectsIndex() {
  const tags = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.tags))), []);

  return (
    <>
      <SeoHead
        title="Proyectos de arquitectura y remodelación en Panamá"
        description="Explora proyectos residenciales y comerciales entregados por Marvin Pérez de Obaldía en Ciudad de Panamá. Remodelaciones llave en mano con diseño, permisos y obra."
        keywords={['proyectos arquitectura panamá', 'remodelación llave en mano panamá', 'arquitecto panamá']}
        openGraph={{ type: 'website' }}
      />
      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Proyectos' }]} />
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">Proyectos de arquitectura y remodelación en Panamá</h2>
          <p className="mt-4 text-base text-[#1a1a1a]/70">
            Selección de proyectos residenciales, comerciales y de hospitalidad diseñados y construidos por nuestro estudio. Cada caso incluye diagnóstico, diseño, permisos, ejecución y entrega con mobiliario listo para habitar o abrir puertas.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#1a1a1a]/60">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#1e3a8a]/10 px-3 py-1 text-[#1a1a1a]/70">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <ProjectsGrid
        projects={projects}
        heading="Casos destacados"
        description="Cada proyecto integra diseño, construcción, control financiero y acompañamiento cercano del arquitecto."
      />
    </>
  );
}

export default ProjectsIndex;
