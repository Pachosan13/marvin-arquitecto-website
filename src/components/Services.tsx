import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'casas',
      title: 'Remodelación de casas en Panamá',
      subtitle: 'llave en mano',
      image: '/recamara.jpg',
      gridClass: 'md:col-span-3 md:row-span-2',
      alt: 'remodelación casa moderna El Cangrejo',
      linkSlug: 'remodelacion-casas-apartamentos-panama'
    },
    {
      id: 'apartamentos',
      title: 'Apartamentos',
      subtitle: 'Reformas integrales sin sorpresas',
      image: '/AntyDespcases/phvitri.jpg',
      gridClass: 'md:col-span-2 md:row-span-1',
      alt: 'remodelación apartamento Costa del Este',
      linkSlug: 'remodelacion-casas-apartamentos-panama'
    },
    {
      id: 'oficinas',
      title: 'Oficinas',
      subtitle: 'Espacios productivos y con identidad',
      image: '/oficina2.jpg',
      gridClass: 'md:col-span-1 md:row-span-2',
      alt: 'remodelación oficina moderna San Francisco',
      linkSlug: 'construccion-general-panama'
    },
    {
      id: 'planos',
      title: 'Diseños arquitectónicos y Planos',
      subtitle: 'Planos y permisos',
      image: '/Render1.png',
      gridClass: 'md:col-span-2 md:row-span-1',
      alt: 'planos arquitectónicos Panamá',
      linkSlug: 'planos-arquitectonicos-panama'
    },
    {
      id: 'llave-en-mano',
      title: 'Llave en mano',
      subtitle: 'Delegas todo. Nosotros coordinamos',
      image: '/CHASETERRAZA.jpg',
      gridClass: 'md:col-span-2 md:row-span-1',
      alt: 'proyecto llave en mano Bella Vista',
      linkSlug: 'servicio-llave-en-mano-panama'
    },
    {
      id: 'interiores',
      title: 'Arquitectura de interiores',
      subtitle: 'Materiales, iluminación y mobiliario',
      image: '/carrusel/carrusel4.jpg',
      gridClass: 'md:col-span-2 md:row-span-1',
      alt: 'arquitectura interiores Panamá',
      linkSlug: 'arquitectura-interiores-panama'
    },
    {
      id: 'administracion',
      title: 'Administración de proyectos',
      subtitle: 'Gestión integral y supervisión profesional',
      image: '/oficina.jpg',
      gridClass: 'md:col-span-2 md:row-span-1',
      alt: 'administración proyectos construcción Panamá',
      linkSlug: 'administracion-proyectos-panama'
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimientos Generales',
      subtitle: 'Reparaciones rápidas y mantenimiento preventivo',
      image: '/antesconsultorio.png',
      gridClass: 'md:col-span-2 md:row-span-1',
      alt: 'mantenimiento general casas oficinas Panamá',
      linkSlug: 'mantenimiento-general-panama'
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('book-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 font-serif text-text-hi mb-4">
            Servicios de arquitectura y remodelación
          </h2>
          <p className="text-body text-text-lo max-w-2xl mx-auto">
            Transformamos espacios con diseño funcional y ejecución profesional en Ciudad de Panamá
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[160px]">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/servicios/${service.linkSlug}`}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${service.gridClass}`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-serif text-xl md:text-2xl font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm mb-4 transform transition-all duration-300 opacity-90 group-hover:opacity-100">
                  {service.subtitle}
                </p>
                
                {/* CTA Chip */}
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border-2 border-transparent group-hover:border-wood rounded-full px-4 py-2 w-fit transition-all duration-300">
                  <span className="text-white font-semibold text-sm mr-2">Explorar</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Screen reader text */}
              <span className="sr-only">{service.alt}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;