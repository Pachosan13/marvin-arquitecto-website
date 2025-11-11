import { useMemo, useState } from 'react';
import { PROJECTS, type Project } from '../data/projects';
import Lightbox from './Lightbox';
import { useReveal } from '../hooks/useReveal';

const ProjectTile = ({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) => {
  const { ref, visible } = useReveal<HTMLDivElement>({ rootMargin: '-80px' });

  return (
    <div
      ref={ref}
      className={`mb-6 break-inside-avoid overflow-hidden rounded-[36px] bg-white shadow-soft-lg transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <button type="button" onClick={onOpen} className="group relative block w-full overflow-hidden text-left">
        <img
          src={project.cover}
          alt={`${project.title} - ${project.location}`}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding={index < 2 ? 'sync' : 'async'}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-6 text-white">
          <span className="text-xs uppercase tracking-[0.4em] opacity-70">{project.category}</span>
          <p className="mt-2 font-serif text-2xl">{project.title}</p>
          <p className="text-sm uppercase tracking-[0.3em] opacity-80">
            {project.location} · {project.year}
          </p>
        </div>
      </button>
    </div>
  );
};

const ProjectsShowcase = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery = useMemo(() => {
    if (!activeProject) return [];
    return activeProject.gallery?.length ? activeProject.gallery : [activeProject.cover];
  }, [activeProject]);

  const handleOpen = (project: Project, index = 0) => {
    setActiveProject(project);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setActiveProject(null);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (!gallery.length) return;
    setCurrentIndex((value) => (value + 1) % gallery.length);
  };

  const handlePrev = () => {
    if (!gallery.length) return;
    setCurrentIndex((value) => (value - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="proyectos" className="section-padding py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Portfolio</span>
          <h2 className="text-4xl font-serif text-dark md:text-5xl">Proyectos recientes</h2>
          <p className="mx-auto max-w-3xl text-base text-muted">
            Espacios residenciales y corporativos diseñados con precisión. Cada proyecto equilibra estética, funcionalidad y
            resultados medibles en tiempos de entrega.
          </p>
        </div>
        <div className="columns-1 gap-6 sm:columns-2">
          {PROJECTS.map((project, index) => (
            <ProjectTile key={project.slug} project={project} index={index} onOpen={() => handleOpen(project, 0)} />
          ))}
        </div>
      </div>
      <Lightbox
        open={Boolean(activeProject)}
        images={gallery}
        currentIndex={currentIndex}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default ProjectsShowcase;
