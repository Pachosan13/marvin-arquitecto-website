import React from 'react';
import { Search, PenTool, Calculator, Hammer, CheckCircle2 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Diagnóstico y levantamiento',
      description: 'Evaluación técnica del espacio y definición de necesidades específicas.',
      timeEstimate: '1-5 días'
    },
    {
      icon: PenTool,
      title: 'Anteproyecto y renders',
      description: 'Diseño conceptual con visualizaciones 3D para validar la propuesta.',
      timeEstimate: '2 a 4 semanas'
    },
    {
      icon: Calculator,
      title: 'Presupuesto cerrado',
      description: 'Cotización detallada con especificaciones técnicas y cronograma.',
      timeEstimate: '3-5 días'
    },
    {
      icon: Hammer,
      title: 'Ejecución y supervisión',
      description: 'Obra ejecutada con reportes semanales y control de calidad.',
      timeEstimate: '6-12 semanas'
    },
    {
      icon: CheckCircle2,
      title: 'Entrega + garantías',
      description: 'Entrega final con garantías de acabados y manual de mantenimiento.',
      timeEstimate: '1 día'
    }
  ];

  return (
    <section id="process" className="py-20 bg-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 font-serif text-text-hi mb-4">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-body text-text-lo max-w-2xl mx-auto">
            Un método probado que garantiza transparencia, calidad y entregas puntuales
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line - Hidden on mobile, visible on lg+ */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-divider z-0">
                  <div className="w-8 h-8 bg-cta rounded-full absolute -top-4 -right-4 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-divider">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-cta text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 pt-2">
                  <step.icon className="w-8 h-8 text-cta mx-auto" />
                </div>

                {/* Time Estimate Chip */}
                <div className="mb-4 text-center">
                  <span className="inline-block bg-section text-text-lo px-3 py-1 rounded-full text-sm font-medium">
                    {step.timeEstimate}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-heading-4 font-serif text-text-hi mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-text-lo text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary CTA */}
        <div className="text-center mt-12">
          <div className="bg-section rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-heading-3 font-serif text-text-hi mb-4">
              De la idea a la entrega en 8-14 semanas
            </h3>
            <p className="text-body text-text-lo mb-6">
              Proceso estructurado con controles de calidad en cada etapa 
              (Según Magnitud y Alcance de Proyecto)
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('book-form');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-cta hover:bg-cta-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Comenzar mi proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;