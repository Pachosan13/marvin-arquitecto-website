import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MapPin, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { label: 'Remodelación de casas', href: '/servicios/remodelacion-casas-apartamentos-panama', type: 'page' },
    { label: 'Remodelación de apartamentos', href: '/servicios/remodelacion-casas-apartamentos-panama', type: 'page' },
    { label: 'Remodelación de oficinas', href: '/servicios/construccion-general-panama', type: 'page' },
    { label: 'Sobre el Arquitecto', href: '/sobre-el-arquitecto', type: 'page' },
    { label: 'Planos arquitectónicos', href: '/servicios/planos-arquitectonicos-panama', type: 'page' },
    { label: 'Proceso de trabajo', href: 'process', type: 'section' },
    { label: 'Proyectos realizados', href: 'before-after', type: 'section' },
    { label: 'Contacto', href: 'book-form', type: 'section' }
  ];

  const scrollToSection = (sectionId: string) => {
    // Always navigate to home with section parameter
    // This ensures consistent behavior and lets Home.tsx handle the scrolling
    navigate(`/?section=${sectionId}`);
  };

  return (
    <footer className="bg-text-hi text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Marvin Pérez de Obaldía
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Arquitecto especializado en remodelaciones integrales con control 
              de tiempos y presupuesto en Ciudad de Panamá.
            </p>
            <p className="text-cta font-semibold text-sm">
              Transformamos espacios sin sorpresas
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                link.type === 'page' ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-white/80 hover:text-cta transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-white/80 hover:text-cta transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MessageCircle className="w-5 h-5 text-cta mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/80 mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/50700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cta transition-colors"
                  >
                    +507 6675-8035
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-cta mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/80 mb-1">Email</div>
                  <a
                    href="mailto:marvinper@mparquitecto.com"
                    className="text-white hover:text-cta transition-colors"
                  >
                    marvinper@mparquitecto.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-cta mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/80 mb-1">Ubicación</div>
                  <span className="text-white">Ciudad de Panamá</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <p className="text-white/60 text-sm mb-4 lg:mb-0">
              © {currentYear} Marvin Pérez de Obaldía - Arquitecto. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection('book-form')}
                className="bg-cta hover:bg-cta-hover text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
              >
                Agendar visita
              </button>
              <a
                href="https://wa.me/50700000000?text=Hola%20Marvin%2C%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 text-white hover:bg-white/10 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;