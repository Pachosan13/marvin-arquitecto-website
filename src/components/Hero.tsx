import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroImages = [
    {
      src: '/carrusel/carrusel.jpg',
      alt: 'Remodealción Completa de baño'
    },
    {
      src: '/carrusel/carrusel1.jpg',
      alt: 'Remodealción Completa de Sala'
    },
    {
      src: '/carrusel/carrusel2.jpg',
      alt: 'Remodealción Completa de Cocina'
    },
    {
      src: '/carrusel/carrusel3.jpg',
      alt: 'Remodealción Completa de Cocina'
    },
    {
      src: '/carrusel/carrusel7.jpg',
      alt: 'Remodealción Completa de Oficina'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    'Presupuesto transparente',
    'Entrega a tiempo',
    'Garantía de acabados'
  ];

  return (
    <section id="hero" className="relative flex overflow-hidden">
      {/* Hero Carousel Background */}
      <div className="absolute inset-0">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={6000}
          transitionTime={800}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          className="h-full"
        >
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-screen">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Individual overlay for each image */}
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content with Parallax Effect */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex items-center justify-center flex-1 min-h-[calc(100vh-80px)] pt-20">
        <div className="max-w-4xl">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              <span className="block">Arquitecto en Panamá</span>
              <span className="block text-cta">Que Transforma Tu Espacio</span>
              <span className="block">Y Tu Vida.</span>
            </h1>
            
            <p className="text-body text-white mb-8 max-w-2xl">
              Diseño funcional + obra con control de tiempos y presupuesto para 
              <strong className="text-text-hi"> casas, apartamentos y oficinas</strong> en Ciudad de Panamá.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Link
                to="/agenda"
                className="bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-all duration-200 flex items-center justify-center group"
                aria-label="Agendar visita"
              >
                Agendar visita (48h)
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => scrollToSection('before-after')}
                className="border-2 border-white bg-white/20 backdrop-blur-sm hover:bg-white/30 text-text-hi px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
              >
                Ver proyectos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;