import ContactBlock from '../components/sections/ContactBlock';
import SeoHead from '../components/seo/SeoHead';

const professionalSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Marvin Pérez de Obaldía · Arquitecto en Panamá',
  url: 'https://marvin-arquitecto.com/contacto',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+50766758035',
      contactType: 'customer service',
      areaServed: 'PA',
      availableLanguage: ['es'],
    },
  ],
};

function Contact() {
  return (
    <>
      <SeoHead
        title="Contacto y cotizaciones | Arquitecto en Panamá"
        description="Agenda un diagnóstico con Marvin Pérez de Obaldía. Arquitecto en Panamá para remodelaciones de apartamentos, casas, oficinas y proyectos llave en mano."
        keywords={['arquitecto panamá', 'arquitecto en panamá', 'cotizar remodelación panamá']}
        jsonLd={[professionalSchema]}
        openGraph={{ type: 'website' }}
      />
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-4xl space-y-6 px-4 text-base leading-7 text-[#1a1a1a]/80">
          <h2 className="text-3xl font-semibold text-[#1a1a1a]">Arquitecto en Panamá disponible para tu próxima remodelación</h2>
          <p>
            Queremos que agendar tu diagnóstico sea sencillo. Completa el formulario o escríbenos directamente por WhatsApp para reservar tu sesión inicial. En esa llamada conoceremos tus objetivos, definiremos alcance preliminar y acordaremos los siguientes pasos para cotizar con precisión. Trabajamos con propietarios e inversionistas que buscan resultados de alto nivel en Ciudad de Panamá y áreas cercanas.
          </p>
          <p>
            Si tienes planos existentes, fotografías o ideas de referencia, compártelas en el mensaje. Mientras más información tengamos, más rápido podremos preparar una propuesta ajustada a tus prioridades. Si estás fuera del país, podemos coordinar reuniones virtuales y recorridos remotos para que avances sin detener tu agenda.
          </p>
          <p>
            Nuestro horario de atención es de lunes a viernes de 8:00 a.m. a 6:00 p.m. y los sábados con cita previa. Respondemos cada mensaje en menos de 24 horas hábiles. También ofrecemos visitas técnicas pagadas para evaluar inmuebles antes de comprarlos o definir alcance de remodelaciones complejas.
          </p>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}

export default Contact;
