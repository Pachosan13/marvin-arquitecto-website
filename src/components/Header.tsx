import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre Marvin', path: '/sobre' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-md shadow-soft-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="text-lg font-serif uppercase tracking-[0.3em] text-dark">
          M. P. Arquitecto
        </Link>
        <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.18em] text-muted lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-200 ${
                  isActive ? 'text-dark after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-accent' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-dark px-5 py-2 text-xs font-medium tracking-[0.2em] text-dark transition-all hover:bg-dark hover:text-white"
          >
            Agendar llamada
          </a>
        </nav>
        <button
          type="button"
          className="rounded-full border border-dark p-2 text-dark lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/10 bg-white px-6 pb-6 pt-4 shadow-soft-lg lg:hidden">
          <nav className="flex flex-col space-y-4 text-sm uppercase tracking-[0.18em] text-dark">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'text-accent' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/50766758035?text=Hola%20Marvin%2C%20quiero%20cotizar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-dark px-5 py-3 text-xs font-semibold tracking-[0.2em] text-dark"
            >
              Agendar llamada
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
