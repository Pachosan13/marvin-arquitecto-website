import { useState } from 'react';
import type { Project } from '../pages/data/siteContent';
import Lightbox from './Lightbox';

interface ProjectsShowcaseProps {
  readonly projects: readonly Project[];
  readonly heading: string;
  readonly description?: string;
  readonly id?: string;
}

function ProjectsShowcase({ projects, heading, description, id }: ProjectsShowcaseProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeProject = typeof activeProjectIndex === 'number' ? projects[activeProjectIndex] : null;

  return (
    <section id={id} className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Portafolio</p>
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">{heading}</h2>
          {description ? <p className="text-base text-[#1a1a1a]/70">{description}</p> : null}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#1e3a8a]/10 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                type="button"
                className="relative block aspect-[4/3] w-full overflow-hidden"
                onClick={() => {
                  setActiveProjectIndex(index);
                  setActiveImageIndex(0);
                }}
              >
                <img
                  src={project.cover}
                  alt={project.coverAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-[#1a1a1a] shadow">Ver fotos</span>
              </button>
              <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">{project.title}</h3>
                  <p className="text-sm text-[#1a1a1a]/70">{project.brief}</p>
                </div>
                <dl className="grid grid-cols-2 gap-4 text-xs text-[#1a1a1a]/60">
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-[#1a1a1a]/60">Ubicación</dt>
                    <dd className="text-[#1a1a1a]/80">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-[#1a1a1a]/60">Año</dt>
                    <dd className="text-[#1a1a1a]/80">{project.year}</dd>
                  </div>
                </dl>
                <div className="mt-auto flex items-center justify-between border-t border-[#1e3a8a]/10 pt-4">
                  <ul className="flex flex-wrap gap-2 text-xs font-semibold text-primary">
                    {project.tags.slice(0, 3).map((tag) => (
                      <li key={tag} className="rounded-full bg-[#f8f8f8] px-3 py-1">
                        #{tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/proyectos/${project.slug}`}
                    className="rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeProject ? (
        <Lightbox
          images={activeProject.gallery}
          startIndex={activeImageIndex}
          isOpen={activeProjectIndex !== null}
          onClose={() => {
            setActiveProjectIndex(null);
            setActiveImageIndex(0);
          }}
        />
      ) : null}
    </section>
  );
}

export default ProjectsShowcase;
