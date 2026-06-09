import React from 'react';
import { MapPin } from 'lucide-react';

const Results = () => {
  const metrics = [
    '+100 proyectos',
    '6–10 semanas típicas',
    'Variación <2%',
    'Supervisión periódica',
    'Presupuesto transparente',
  ];

  const zones = [
    {
      name: 'Consultorio Punta Pacífica',
      image: '/RENDER.jpg'
    },
    {
      name: 'El Chase',
      image: '/CASAIV.jpg'
    },
    {
      name: 'San Francisco',
      image: '/recamara.jpg'
    },
    {
      name: 'Towncenter',
      image: '/oficina2.jpg'
    },
    {
      name: 'PH Vitri',
      image: '/CHASETERRAZA.jpg'
    },
    {
      name: 'Costa del Este',
      image: '/CHASETERRAZA.jpg'
    }
  ];

  return (
    <section id="results" className="py-20 bg-section">
      <div className="container mx-auto lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-16 lg:gap-x-16 items-center">
          {/* Left Column - Copy + Marquee */}
          <div className="px-4">
            <h2 className="text-heading-2 font-serif text-text-hi mb-6">
              Resultados comprobados en Panamá
            </h2>
            <p className="text-body text-text-lo mb-8 leading-relaxed">
              Más de 25 años transformando espacios en Ciudad de Panamá con 
              metodología estructurada, presupuestos controlados y entregas puntuales.
            </p>

            {/* Marquee Container */}
            <div className="overflow-hidden bg-white rounded-xl p-1 border border-divider">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set */}
                {metrics.map((metric, index) => (
                  <div
                    key={`first-${index}`}
                    className="inline-block bg-cta text-white px-6 py-3 rounded-lg font-semibold text-sm mx-2 whitespace-nowrap"
                  >
                    {metric}
                  </div>
                ))}
                {/* Second set for seamless loop */}
                {metrics.map((metric, index) => (
                  <div
                    key={`second-${index}`}
                    className="inline-block bg-cta text-white px-6 py-3 rounded-lg font-semibold text-sm mx-2 whitespace-nowrap"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Zone Cards */}
          <div className="grid grid-cols-1 px-4 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-6">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                {/* Background Image */}
                <div
                  className="h-32 md:h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${zone.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-white mr-2" />
                    <h3 className="text-white font-serif text-base md:text-lg font-semibold">
                      {zone.name}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-cta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;