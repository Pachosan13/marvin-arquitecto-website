/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';

const BeforeAfter = () => {
  const [sliderValues, setSliderValues] = useState([50, 50, 50]);
  const [autoOscillate, setAutoOscillate] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // ...
const projects = [
  {
    id: 1,
    location: 'Residencia en El Valle',
    duration: '8 semanas',
    budgetVariation: '+1.2%',
    beforeImage: '/planos.jpg',
    afterImage: '/Render1.png', 
    alt: 'remodelación apartamento El Valle antes y después',
    carouselImages: [
      '/planos.jpg',
      '/RENDER.png',
    ]
  },
  {
      id: 2,
      location: 'Consultorio en Town Center',
      duration: '6 semanas',
      budgetVariation: '0%',
      beforeImage: '/antesconsultorio.png',
      afterImage: '/IMG_20220422_174902.jpg',
      alt: 'remodelación consultorio médico antes y después',
      carouselImages: [
        '/antesconsultorio.png',
        '/IMG_20220422_174902.jpg',
        'towncenter1.jpg',
        'towncenter2.jpg'
      ]
    },
    {
      id: 3,
      location: 'Residencia en Altos del Chase',
      duration: '10 semanas',
      budgetVariation: '+0.8%',
      beforeImage: '/CASAI.jpg',
      afterImage: '/CASAIV.jpg',
      alt: 'remodelación casa Altos del Chase antes y después',
      carouselImages: [
        '/CASAI.jpg',
        '/recamara.jpg',
        '/CASAIV.jpg',
        '/CASAIII.jpg',
        '/CHASETERRAZA.jpg',
        '/COCINACHASE.jpg',
      ]
    },
    {
      id: 4,
      location: 'Oficina en Obarrio',
      duration: '7 semanas',
      budgetVariation: '+0.5%',
      beforeImage: 'antesoficina.png',
      afterImage: 'oficina1.jpg',
      alt: 'remodelación oficina Obarrio antes y después',
      carouselImages: [
        '/oficina.jpg',
        'oficina2.jpg',
        'oficina1.jpg',
      ]
    }
  ];

  // Auto-oscillation effect
  useEffect(() => {
    if (!autoOscillate) return;

    const interval = setInterval(() => {
      setSliderValues(prev => prev.map((value, index) => {
        const time = Date.now() / 1000;
        const oscillation = Math.sin(time * 0.5 + index * 2) * 30 + 50;
        return Math.max(20, Math.min(80, oscillation));
      }));
    }, 100);

    return () => clearInterval(interval);
  }, [autoOscillate]);

  const handleSliderChange = (index: number, value: number) => {
    setAutoOscillate(false);
    setSliderValues(prev => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  };

  const resetAutoOscillation = () => {
    setAutoOscillate(true);
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setAutoOscillate(false);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setAutoOscillate(true);
  };
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
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Before/After Slider */}
              <div className="relative h-64 overflow-hidden">
                {/* Before Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.beforeImage})` }}
                />
                
                {/* After Image with clip-path */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                  style={{
                    backgroundImage: `url(${project.afterImage})`,
                    clipPath: `polygon(${sliderValues[index]}% 0%, 100% 0%, 100% 100%, ${sliderValues[index]}% 100%)`
                  }}
                />

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300"
                  style={{ left: `${sliderValues[index]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-4 border-cta flex items-center justify-center">
                    <div className="w-2 h-2 bg-cta rounded-full" />
                  </div>
                </div>

                {/* Interactive Slider Input */}
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={sliderValues[index]}
                  onChange={(e) => handleSliderChange(index, Number(e.target.value))}
                  onMouseEnter={() => setAutoOscillate(false)}
                  onMouseLeave={resetAutoOscillation}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  aria-label={`Comparador antes y después para ${project.location}`}
                />

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Antes
                </div>
                <div className="absolute top-4 right-4 bg-cta text-white px-3 py-1 rounded-full text-sm font-medium">
                  Después
                </div>
              </div>

              {/* Project Meta */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-heading-4 font-serif text-text-hi">
                    {project.location}
                  </h3>
                  <span className="text-sm text-text-lo bg-section px-3 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-text-lo">Variación presupuestaria:</span>
                  <span className={`text-sm font-semibold ${
                    project.budgetVariation === '0%' ? 'text-cta' : 'text-wood'
                  }`}>
                    {project.budgetVariation}
                  </span>
                </div>

                <button 
                  onClick={() => openProjectModal(project)}
                  className="w-full bg-cta hover:bg-cta-hover text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group"
                >
                  Ver caso completo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Control Instructions */}
        <div className="text-center mt-8">
          <p className="text-sm text-text-lo">
            Arrastra el control o deja que se mueva automáticamente
          </p>
        </div>
      </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
                  <span className={`text-sm font-semibold ${
                    selectedProject.budgetVariation === '0%' ? 'text-cta' : 'text-wood'
                  }`}>
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
              {/* Project Carousel */}
              <div className="mb-6">
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
                  thumbWidth={24}
                  className="project-carousel"
                >
                  {selectedProject.carouselImages.map((image: string, index: number) => (
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

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-section rounded-xl p-6">
                  <h4 className="text-heading-4 font-serif text-text-hi mb-4">
                    Detalles del proyecto
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-lo">Ubicación:</span>
                      <span className="text-text-hi font-semibold">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-lo">Duración:</span>
                      <span className="text-text-hi font-semibold">{selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-lo">Variación presupuestaria:</span>
                      <span className={`font-semibold ${
                        selectedProject.budgetVariation === '0%' ? 'text-cta' : 'text-wood'
                      }`}>
                        {selectedProject.budgetVariation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeforeAfter;