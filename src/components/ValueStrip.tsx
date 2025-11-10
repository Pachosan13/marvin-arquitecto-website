import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const ValueStrip = () => {
  const values = [
    {
      icon: Shield,
      title: 'Presupuesto transparente',
      description: 'Sin aumentos sin explicación. Alcance, renders y cronograma antes de empezar.'
    },
    {
      icon: Clock,
      title: 'Entrega a tiempo',
      description: 'Cronograma claro y reportes semanales.'
    },
    {
      icon: Award,
      title: 'Garantía de acabados',
      description: 'Estética + calidad constructiva.'
    }
  ];

  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-panel border border-divider rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <value.icon className="w-8 h-8 text-cta" />
              </div>
              <h3 className="text-heading-4 font-serif text-text-hi mb-3">
                {value.title}
              </h3>
              <p className="text-text-lo leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStrip;