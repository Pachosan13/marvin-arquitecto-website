import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: '¿Cuánto tiempo toma una remodelación completa?',
      answer: 'El tiempo varía según el alcance del proyecto. Para apartamentos típicos (80-120m²), el proceso completo toma entre 6-10 semanas. Casas más grandes pueden requerir 10-14 semanas. Siempre proporcionamos un cronograma detallado durante la fase de cotización, con fechas específicas para cada etapa: demolición, instalaciones, acabados y entrega final.'
    },
    {
      question: '¿Cómo funcionan sus presupuestos sin sorpresas?',
      answer: 'Nuestro método incluye un levantamiento técnico exhaustivo donde identificamos todos los trabajos necesarios antes de cotizar. El presupuesto detalla materiales, mano de obra, permisos y contingencias. Solo aplicamos variaciones si el cliente solicita cambios al proyecto original. Mantenemos comunicación semanal sobre avances y cualquier ajuste necesario se discute y aprueba previamente.'
    },
    {
      question: '¿Qué incluye el servicio llave en mano?',
      answer: 'El servicio llave en mano abarca desde el diseño hasta la entrega final: planos arquitectónicos, permisos municipales, demolición controlada, instalaciones eléctricas e hidráulicas, acabados, pintura, y coordinación de todos los oficios. También gestionamos la compra de materiales, supervisión diaria de obra, limpieza final y entrega con garantías. El cliente solo define sus necesidades y nosotros ejecutamos todo.'
    },
    {
      question: '¿Manejan permisos y documentación municipal?',
      answer: 'Sí, gestionamos todos los permisos requeridos según el tipo de proyecto. Para remodelaciones menores, tramitamos las notificaciones municipales correspondientes. En proyectos que requieren planos aprobados, coordinamos con ingenieros estructurales y realizamos el seguimiento completo ante las autoridades municipales. Esto está incluido en nuestros presupuestos y cronogramas de trabajo.'
    },
    {
      question: '¿Pueden adaptar cualquier estilo arquitectónico?',
      answer: 'Trabajamos diversos estilos según las preferencias del cliente y las características del espacio: moderno, contemporáneo, minimalista, tropical, industrial y tradicional. Nuestro enfoque es crear espacios funcionales que reflejen la personalidad del usuario, respetando las limitaciones estructurales y presupuestarias. Siempre presentamos renders 3D para validar la propuesta antes de iniciar obra.'
    },
    {
      question: '¿Qué garantías ofrecen en sus trabajos?',
      answer: 'Ofrecemos garantía de 2 años en trabajos estructurales, 1 año en instalaciones eléctricas e hidráulicas, y 6 meses en acabados como pintura y detalles menores. Todos nuestros proveedores son certificados y sus materiales incluyen garantías del fabricante. Realizamos una revisión post-entrega a los 30 días para verificar que todo funcione correctamente y atender cualquier detalle menor.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 font-serif text-text-hi mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-body text-text-lo max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos de trabajo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-divider overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-bg/50 transition-colors duration-200"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-heading-4 font-serif text-text-hi pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-cta">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 transition-all duration-300 ${
                    openItems.includes(index) 
                      ? 'pb-5 opacity-100' 
                      : 'pb-0 opacity-0 h-0 overflow-hidden'
                  }`}
                >
                  <div className="border-t border-divider pt-5">
                    <p className="text-text-lo leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after FAQ */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 border border-divider">
              <h3 className="text-heading-3 font-serif text-text-hi mb-4">
                ¿Tienes alguna otra pregunta?
              </h3>
              <p className="text-body text-text-lo mb-6">
                Contactanos directamente para resolver cualquier duda específica sobre tu proyecto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('book-form');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-cta hover:bg-cta-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Agendar consulta
                </button>
                <a
                  href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20tengo%20una%20pregunta%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-cta text-cta hover:bg-cta hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQ;