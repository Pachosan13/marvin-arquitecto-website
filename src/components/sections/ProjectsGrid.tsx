import type { Project } from '../../pages/data/siteContent';
import { Link } from 'react-router-dom';

interface ProjectsGridProps {
  readonly projects: readonly Project[];
  readonly heading: string;
  readonly description: string;
}

function ProjectsGrid({ projects, heading, description }: ProjectsGridProps) {
  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">{heading}</h2>
          <p className="text-base text-[#1a1a1a]/70">{description}</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/proyectos/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-transform hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <div className="relative">
                <img
                  src={project.cover}
                  alt={project.coverAlt}
                  className="h-60 w-full object-cover"
                  loading="lazy"
                  srcSet={`${project.cover}?w=480 480w, ${project.cover}?w=960 960w, ${project.cover}?w=1440 1440w`}
                  sizes="(min-width: 1024px) 540px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1e3a8a]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">{project.title}</h3>
                <p className="text-sm text-[#1a1a1a]/70">{project.brief}</p>
                <dl className="grid grid-cols-2 gap-4 text-xs text-[#1a1a1a]/60">
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-[#1a1a1a]/70">Ubicación</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-[#1a1a1a]/70">Área</dt>
                    <dd>{project.area}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-[#1a1a1a]/70">Año</dt>
                    <dd>{project.year}</dd>
                  </div>
                </dl>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a]">
                  Ver proyecto completo
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid;
