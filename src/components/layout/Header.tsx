import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre Marvin', to: '/sobre' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray/40 bg-white/90 backdrop-blur-xl">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-secondary focus:px-3 focus:py-2 focus:text-primary"
        href="#contenido"
      >
        Saltar al contenido principal
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-left"
          aria-label="Inicio - Arquitecto en Panamá Marvin Pérez de Obaldía"
          onClick={handleClose}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-lg font-semibold text-primary">
            MPO
          </span>
          <span className="hidden flex-col text-sm font-semibold text-text sm:flex">
            Marvin Pérez de Obaldía
            <span className="text-xs font-normal text-primary">
              Arquitecto en Panamá
            </span>
          </span>
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-sm font-medium text-text lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${isActive ? 'text-primary' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Agenda una llamada
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-primary/20 p-2 text-primary transition-all hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 lg:hidden"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>
      {isOpen && (
        <div id="menu-movil" className="border-t border-gray/30 bg-white shadow-lg lg:hidden" role="dialog" aria-modal="true">
          <nav className="flex flex-col gap-2 px-4 py-4 text-sm font-medium text-text" aria-label="Navegación principal móvil">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleClose}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${isActive ? 'bg-primary/10 text-primary' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="rounded-md bg-primary px-3 py-2 text-center text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Escríbenos por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
