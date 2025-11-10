import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dra. Martha  Martínez',
      location: 'Clayton',
      text: 'El talento y dedicación de Marvin hacen cada proyecto único y recomendable.',
      rating: 5
    },
    {
      name: 'Amada Suarez',
      location: 'Town Center',
      text: 'Marvin es un arquitecto responsable, honesto y comprometido, que entrega proyectos seguros, ordenados y de absoluta confianza.',
      rating: 5
    },
    {
      name: 'Dra. Carmen Amada Pinzón',
      location: 'Clínica Dermoestética', 
      text: 'Marvin realizó remodelaciones respetando diseño y presupuesto, con resultados extraordinarios.',
      rating: 5
    },
    {
      name: 'Ana Rodríguez',
      location: 'San Francisco',
      text: 'Diseño funcional y acabados impecables. Recomiendo sus servicios sin dudarlo.',
      rating: 5
    },
    {
      name: 'Dra. Doria Gutierrez de Marchena',
      location: 'Consultorios América',
      text: 'Excelente profesional y siempre se ha destacado por su compromiso y respeto a los detalles de las obras a él encomendadas.',
      rating: 5
    },
    {
      name: 'Ing. Eduardo Lima',
      location: 'Costa del Este - Buenaventura',
      text: 'Excelente profesional. Muy creativo con ideas novedosas. Ha estado a cargo de todas las remodelaciones de mi casa y de las oficinas de mis empresas por los últimos 16 años.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 font-serif text-text-hi mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-body text-text-lo max-w-2xl mx-auto">
            Testimonios reales de propietarios que confiaron en nosotros para transformar sus espacios
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-divider hover:shadow-lg transition-all duration-300 group hover:bg-cta/5"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-cta/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-cta fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-lo leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-divider pt-4">
                <div className="font-semibold text-text-hi text-sm">
                  {testimonial.name}
                </div>
                <div className="text-text-lo text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white rounded-xl p-6 border border-divider">
            <div className="text-3xl font-bold text-cta mb-2">98%</div>
            <div className="text-text-lo text-sm">Clientes satisfechos</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-divider">
            <div className="text-3xl font-bold text-cta mb-2">5.0</div>
            <div className="text-text-lo text-sm">Promedio de calificación</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-divider">
            <div className="text-3xl font-bold text-cta mb-2">85%</div>
            <div className="text-text-lo text-sm">Clientes recurrentes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;