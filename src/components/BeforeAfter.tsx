import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';

const BeforeAfter = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      location: 'Residencia en El Valle',
      duration: '8 semanas',
      budgetVariation: '+1.2%',
      image: '/Render1.png',
      alt: 'Residencia moderna en El Valle',
      gallery: ['/Render1.png', '/CASA.jpg'],
    },
    {
      id: 2,
      location: 'Consultorio en Town Center',
      duration: '6 semanas',
      budgetVariation: '0%',
      image: '/oficina2.jpg',
      alt: 'Consultorio en Town Center, Costa del Este',
      gallery: ['/oficina2.jpg', '/oficina1.jpg'],
    },
    {
      id: 3,
      location: 'Residencia en Altos del Chase',
      duration: '10 semanas',
      budgetVariation: '+0.8%',
      image: '/COCINACHASE.jpg',
      alt: 'Cocina en residencia Altos del Chase',
      gallery: ['/COCINACHASE.jpg', '/recamara.jpg', '/Render1.png'],
    },
    {
      id: 4,
      location: 'Oficina en Obarrio',
      duration: '7 semanas',
      budgetVariation: '+0.5%',
      image: '/oficina1.jpg',
      alt: 'Oficina corporativa en Obarrio',
      gallery: ['/oficina1.jpg', '/oficina2.jpg'],
    },
  ];

  const openProjectModal = (project: any) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <>
      <section id="before-after" className="py-20 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 font-serif text-text-hi mb-4">
              Proyectos realizados
            </h2>
            <p className="text-body text-text-lo max-w-2xl mx-auto">
              Transformaciones reales con presupuesto controlado y entregas puntuales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Single curated photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Project Meta */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-heading-4 font-serif text-text-hi">
                      {project.location}
                    </h3>
                    <span className="shrink-0 text-sm text-text-lo bg-section px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm text-text-lo">Variación presupuestaria:</span>
                    <span className="text-sm font-semibold text-text-hi">
                      {project.budgetVariation}
                    </span>
                  </div>

                  <button
                    onClick={() => openProjectModal(project)}
                    className="mt-auto w-full bg-cta hover:bg-cta-hover text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group/btn"
                  >
                    Ver caso completo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={closeProjectModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-divider">
              <div>
                <h3 className="text-heading-3 font-serif text-text-hi">
                  {selectedProject.location}
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-text-lo bg-section px-3 py-1 rounded-full">
                    {selectedProject.duration}
                  </span>
                  <span className="text-sm font-semibold text-text-hi">
                    Variación: {selectedProject.budgetVariation}
                  </span>
                </div>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 hover:bg-section rounded-full transition-colors duration-200"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6 text-text-hi" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <Carousel
                showThumbs={true}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={false}
                showArrows={true}
                showIndicators={true}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                thumbWidth={64}
                className="project-carousel"
              >
                {selectedProject.gallery.map((image: string, index: number) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`${selectedProject.location} - imagen ${index + 1}`}
                      className="w-full h-auto object-contain rounded-lg max-h-[calc(90vh-180px)]"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeforeAfter;
