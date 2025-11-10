function ContactBlock() {
  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="mx-auto w-full max-w-6xl px-4 text-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-secondary">Conversemos sobre tu proyecto</h2>
            <p className="text-base text-white/80">
              Cuéntanos sobre tu apartamento, casa, oficina o inversión comercial. Respondemos en menos de 24 horas con una llamada de diagnóstico sin costo.
            </p>
            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
              <dl className="grid gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-secondary">Teléfono</span>
                  <a href="tel:+50766758035" className="text-white/80 transition-colors hover:text-secondary">
                    +507 6675-8035
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary">Email</span>
                  <a href="mailto:marvinper@mparquitecto.com" className="text-white/80 transition-colors hover:text-secondary">
                    marvinper@mparquitecto.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary">Oficina</span>
                  <p className="text-white/80">La Cresta, Calle José Gabriel Duque, Ciudad de Panamá</p>
                </div>
              </dl>
            </div>
          </div>
          <form className="space-y-4 rounded-3xl bg-white p-6 text-[#1a1a1a] shadow-lg" aria-label="Formulario de contacto">
            <div>
              <label htmlFor="nombre" className="text-sm font-semibold">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-xl border border-[#1e3a8a]/20 bg-white px-4 py-3 text-sm text-[#1a1a1a] shadow-inner focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="correo" className="text-sm font-semibold">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-[#1e3a8a]/20 bg-white px-4 py-3 text-sm shadow-inner focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="text-sm font-semibold">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-[#1e3a8a]/20 bg-white px-4 py-3 text-sm shadow-inner focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="tipo-proyecto" className="text-sm font-semibold">
                Tipo de proyecto
              </label>
              <select
                id="tipo-proyecto"
                name="tipo-proyecto"
                className="mt-2 w-full rounded-xl border border-[#1e3a8a]/20 bg-white px-4 py-3 text-sm shadow-inner focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-secondary"
                defaultValue="apartamento"
              >
                <option value="apartamento">Remodelación de apartamento</option>
                <option value="casa">Remodelación de casa</option>
                <option value="oficina">Remodelación de oficina</option>
                <option value="diseno-construccion">Diseño y construcción llave en mano</option>
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="text-sm font-semibold">
                Cuéntanos sobre tu espacio
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="mt-2 w-full rounded-xl border border-[#1e3a8a]/20 bg-white px-4 py-3 text-sm shadow-inner focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e3a8a]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Solicitar diagnóstico
            </button>
            <p className="text-xs text-[#1a1a1a]/60">
              Al enviar aceptas recibir comunicaciones sobre arquitectura y remodelaciones. Tus datos se tratan con confidencialidad y puedes darte de baja en cualquier momento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactBlock;
