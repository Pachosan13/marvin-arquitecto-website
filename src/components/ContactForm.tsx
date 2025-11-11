/* eslint-disable */
import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    projectType: '',
    zone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Casa',
    'Apartamento', 
    'Oficina',
    'Local comercial'
  ];

  const zones = [
    'El Cangrejo',
    'Bella Vista',
    'San Francisco',
    'Costa del Este',
    'Otra'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        whatsapp: '',
        projectType: '',
        zone: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappMessage = `Hola Marvin, quiero agendar una visita técnica.

Nombre: ${formData.name}
Tipo de proyecto: ${formData.projectType}
Zona: ${formData.zone}
Mensaje: ${formData.message}

Espero tu respuesta. ¡Gracias!`;

  if (isSubmitted) {
    return (
      <section id="book-form" className="py-20 bg-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 border border-divider shadow-lg">
              <CheckCircle className="w-16 h-16 text-cta mx-auto mb-6" />
              <h2 className="text-heading-2 font-serif text-text-hi mb-4">
                ¡Solicitud enviada!
              </h2>
              <p className="text-body text-text-lo mb-6">
                Recibirás una respuesta en 24-48 horas por WhatsApp con la propuesta inicial y disponibilidad para la visita técnica.
              </p>
              <div className="bg-section p-4 rounded-lg">
                <p className="text-sm text-text-lo">
                  <strong>Próximos pasos:</strong><br />
                  1. Revisión de tu solicitud<br />
                  2. Contacto por WhatsApp<br />
                  3. Programación de visita técnica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-form" className="py-20 bg-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-serif text-text-hi mb-4">
              Cuéntame tu idea y agenda tu visita (48h)
            </h2>
            <p className="text-body text-text-lo max-w-2xl mx-auto">
              Comparte en 60 segundos qué deseas lograr y recibe una estimación 
              y timeline en 24–48h por WhatsApp.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-divider shadow-lg overflow-hidden">
            <div style={{ height: '787px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/cu8cHKb6i50YlKjhXgeJ"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-cu8cHKb6i50YlKjhXgeJ"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Filtro Citas"
                data-height="787"
                data-layout-iframe-id="inline-cu8cHKb6i50YlKjhXgeJ"
                data-form-id="cu8cHKb6i50YlKjhXgeJ"
                title="Filtro Citas"
              />
            </div>
          </div>
        </div>
        
        {/* GHL Form Script */}
        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      </div>
    </section>
  );
};

export default ContactForm;