import ContactSection from '../components/ContactSection';
import SeoHead from '../seo/SeoHead';
import { breadcrumbSchema, localBusinessSchema } from '../seo/jsonld';

const Contacto = () => {
  const canonical = 'https://mparquitecto.com/contacto';

  return (
    <>
      <SeoHead
        title="Contacto | Marvin Pérez Arquitecto en Panamá"
        description="Agenda una reunión con Marvin Pérez de Obaldía para tu remodelación residencial o corporativa en Ciudad de Panamá."
        canonical={canonical}
        schema={[
          localBusinessSchema({
            name: 'Marvin Pérez Arquitecto',
            description: 'Contacto directo para remodelaciones llave en mano en Ciudad de Panamá.',
            url: 'https://mparquitecto.com',
            telephone: '+50766758035',
            email: 'hola@mp-arquitecto.com',
            address: {
              addressLocality: 'Ciudad de Panamá',
              addressRegion: 'Panamá',
              addressCountry: 'PA',
            },
          }),
          breadcrumbSchema({
            items: [
              { name: 'Inicio', item: 'https://mparquitecto.com/' },
              { name: 'Contacto', item: canonical },
            ],
          }),
        ]}
      />
      <main className="section-padding py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-muted">Contacto</span>
          <h1 className="mt-6 text-4xl font-serif text-dark md:text-5xl">Agenda una consultoría inicial</h1>
          <p className="mt-6 text-lg text-muted">
            Comencemos con una videollamada o visita técnica para evaluar el alcance de tu remodelación. Respuesta en menos de 24
            horas hábiles.
          </p>
        </div>
      </main>
      <ContactSection />
    </>
  );
};

export default Contacto;
