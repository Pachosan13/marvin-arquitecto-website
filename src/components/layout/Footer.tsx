import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import LocationBadge from '../ui/LocationBadge';

const quickLinks = [
  { label: 'Servicios de arquitectura', to: '/servicios' },
  { label: 'Remodelación de apartamentos', to: '/servicios/remodelacion-apartamentos' },
  { label: 'Remodelación de casas', to: '/servicios/remodelacion-casas' },
  { label: 'Remodelación de oficinas', to: '/servicios/remodelacion-oficinas' },
  { label: 'Diseño y construcción', to: '/servicios/diseno-y-construccion' },
];

const blogLinks = [
  { label: 'Blog de arquitectura', to: '/blog' },
  { label: 'Guía para remodelar en Panamá', to: '/blog/guia-remodelacion-panama' },
  { label: 'Checklist de apartamentos', to: '/blog/checklist-remodelacion-apartamentos' },
  { label: 'Tendencias de oficinas', to: '/blog/tendencias-oficinas-panama' },
];

function Footer() {
  return (
    <footer className="border-t border-gray/30 bg-gray">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-primary">Arquitecto en Panamá</p>
          <p className="text-base text-text/80">
            Diseño y remodelaciones de alto nivel para familias y negocios en Ciudad de Panamá. Soluciones llave en mano con cronogramas claros y presupuesto garantizado.
          </p>
          <LocationBadge variant="dark" />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-text">Explora</p>
          <nav className="flex flex-col gap-2 text-sm text-text/80" aria-label="Enlaces rápidos">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-text">Aprende</p>
          <nav className="flex flex-col gap-2 text-sm text-text/80" aria-label="Enlaces al blog">
            {blogLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4 text-sm text-text/80">
          <p className="text-sm font-semibold uppercase tracking-wide text-text">Contacto directo</p>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
            <span>La Cresta, Calle José Gabriel Duque, Ciudad de Panamá</span>
          </div>
          <a
            href="tel:+50766758035"
            className="flex items-center gap-3 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden />
            +507 6675-8035
          </a>
          <a
            href="mailto:marvinper@mparquitecto.com"
            className="flex items-center gap-3 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray"
          >
            <Mail className="h-4 w-4 text-primary" aria-hidden />
            marvinper@mparquitecto.com
          </a>
          <div className="flex gap-4 pt-2" aria-label="Redes sociales">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/20 p-2 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray"
              aria-label="Instagram de Marvin Pérez de Obaldía"
            >
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/20 p-2 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-gray"
              aria-label="Facebook de Marvin Pérez de Obaldía"
            >
              <Facebook className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray/40 bg-white/60 py-4 text-center text-xs text-text/60">
        © {new Date().getFullYear()} Marvin Pérez de Obaldía · Arquitecto en Panamá. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
