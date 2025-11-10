import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const scrollToSection = (sectionId: string) => {
    // Close the menu first
    setIsMenuOpen(false);
    
    // Always navigate to home with section parameter
    // This ensures consistent behavior and lets Home.tsx handle the scrolling
    navigate(`/?section=${sectionId}`);
  };

  const navigationItems = [
    { label: 'Servicios', href: 'services', type: 'section' },
    { label: 'Proyectos', href: 'before-after', type: 'section' },
    { label: 'Proceso', href: 'process', type: 'section' },
    { label: 'Materiales', href: 'materials', type: 'section' },
    { label: 'Sobre el Arquitecto', href: '/sobre-el-arquitecto', type: 'page' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4 relative">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/mplogo.jpg" 
                alt="Marvin Pérez - Arquitecto en Panamá" 
                className="h-12 sm:h-14 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </Link>

            {/* Menu button - visible on all screen sizes */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute right-0 text-text-hi hover:text-cta transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-divider">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                item.type === 'page' ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-text-hi hover:text-cta transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-2 text-base font-medium text-text-hi hover:text-cta transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-lg">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-text-hi hover:text-cta transition-colors z-[70]"
            aria-label="Cerrar menú"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Menu Content */}
          <div className="flex items-center justify-end h-full pr-16">
            <nav className="text-right">
              {/* Navigation Links with Cascade Animation */}
              <div className="space-y-8 mb-16">
                {navigationItems.map((item, index) => (
                  <div
                    key={item.href}
                    className="transform transition-all duration-700 ease-out"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideInRight 0.8s ease-out forwards'
                    }}
                  >
                    {item.type === 'page' ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-right text-4xl lg:text-5xl font-serif text-text-hi hover:text-cta transition-all duration-300 hover:translate-x-[-8px]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="block text-right text-4xl lg:text-5xl font-serif text-text-hi hover:text-cta transition-all duration-300 hover:translate-x-[-8px]"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* CTAs with Cascade Animation */}
              <div 
                className="space-y-4 transform transition-all duration-700 ease-out"
                style={{
                  animationDelay: `${navigationItems.length * 100}ms`,
                  animation: 'slideInRight 0.8s ease-out forwards'
                }}
              >
                <div className="flex flex-col items-end space-y-4">
                  <a
                    href="https://wa.me/50700000000?text=Hola%20Marvin%2C%20quiero%20agendar%20una%20visita%20técnica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 border-2 border-cta text-cta hover:bg-cta hover:text-white transition-all duration-300 rounded-lg font-semibold text-lg"
                    aria-label="Abrir WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp
                  </a>
                  <Link
                    to="/agenda"
                    className="bg-cta hover:bg-cta-hover text-white px-8 py-3 rounded-lg font-bold text-lg uppercase tracking-wide transition-all duration-300"
                    aria-label="Agendar visita"
                  >
                    Agendar visita (48h)
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Keyframes for cascade animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;