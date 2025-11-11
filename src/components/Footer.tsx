import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' },
];

const Footer = () => {
  return (
    <footer className="bg-[#6e3b2b] text-white">
      <div className="section-padding py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Marvin Pérez de Obaldía</p>
            <h3 className="text-3xl font-serif leading-tight">
              Arquitecto en Panamá especializado en remodelaciones residenciales y corporativas.
            </h3>
            <p className="max-w-md text-sm text-white/75">
              Costa del Este · Punta Pacífica · Centro financiero. Proyectos llave en mano con control total de calidad, tiempos y
              presupuesto.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Teléfono: <a href="tel:+50766758035" className="underline-offset-4 hover:underline">+507 6675-8035</a></li>
              <li>
                Correo: <a href="mailto:hola@mp-arquitecto.com" className="underline-offset-4 hover:underline">hola@mp-arquitecto.com</a>
              </li>
              <li>Atendemos Panamá Centro y playa.</li>
              <li>Horario: Lunes a viernes · 9:00 a 18:00</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Enlaces</p>
            <ul className="mt-4 space-y-3 text-sm uppercase tracking-[0.2em] text-white/80">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp directo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-6 text-center text-xs uppercase tracking-[0.3em] text-white/60">
        © {new Date().getFullYear()} Marvin Pérez Arquitecto. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
