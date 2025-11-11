import { useReveal } from '../hooks/useReveal';

const ContactSection = () => {
  const { ref: introRef, visible: introVisible } = useReveal<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: formRef, visible: formVisible } = useReveal<HTMLFormElement>({ rootMargin: '-100px' });

  return (
    <section id="contacto" className="bg-dark py-24 text-white">
      <div className="section-padding">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div
            ref={introRef}
            className={`space-y-6 transition-all duration-700 ${introVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-accent">Contacto</span>
            <h2 className="text-4xl font-serif leading-tight md:text-5xl">
              Conversemos sobre tu próximo proyecto en Ciudad de Panamá
            </h2>
            <p className="text-base text-white/70">
              Agenda una reunión virtual o presencial en Costa del Este. Entregamos cronogramas y presupuesto cerrado en menos de
              10 días hábiles.
            </p>
            <div className="space-y-3 text-sm uppercase tracking-[0.3em] text-white/60">
              <p>Teléfono · +507 6675-8035</p>
              <p>Correo · hola@mp-arquitecto.com</p>
              <p>Zona de atención · Costa del Este, Punta Pacífica y centro financiero</p>
            </div>
            <a
              href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-white hover:text-dark"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <form
            ref={formRef}
            action="https://formsubmit.co/949255f860d2a7d2b5b1d19b45f9cee5"
            method="POST"
            className={`space-y-5 rounded-3xl bg-white/5 p-10 backdrop-blur transition-all duration-700 ${
              formVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <input type="hidden" name="_subject" value="Nueva consulta desde mparquitecto.com" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-accent"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-accent"
                  placeholder="nombre@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-accent"
                  placeholder="+507"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Tipo de proyecto
              </label>
              <select
                id="project"
                name="project"
                className="w-full rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm text-white outline-none transition focus:border-accent"
                required
              >
                <option value="" className="text-dark">
                  Selecciona una opción
                </option>
                <option value="Residencial" className="text-dark">
                  Residencial
                </option>
                <option value="Corporativo" className="text-dark">
                  Corporativo
                </option>
                <option value="Comercial" className="text-dark">
                  Comercial
                </option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Cuéntanos sobre el proyecto
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-3xl border border-white/20 bg-transparent px-6 py-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-accent"
                placeholder="Metraje, ubicación, estilo deseado, presupuesto aproximado..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-dark transition hover:bg-accent hover:text-white"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
