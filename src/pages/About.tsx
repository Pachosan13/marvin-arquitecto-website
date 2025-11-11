/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Building, Award, Calendar, MapPin, Users } from 'lucide-react';

// SEO helpers
function upsertMeta(name: string, content: string) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertProp(prop: string, content: string) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${prop}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", prop);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectJsonLd(id: string, obj: any) {
  if (!obj) return;
  const prev = document.getElementById(id);
  if (prev) prev.remove();
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = id;
  s.text = JSON.stringify(obj);
  document.head.appendChild(s);
}

const About = () => {
  useEffect(() => {
    const title = "Sobre el Arquitecto Marvin Pérez de Obaldía | 25+ años transformando espacios en Panamá";
    const description = "Conoce la trayectoria del Arq. Marvin Pérez De Obaldía. 25+ años de experiencia en remodelaciones, diseño arquitectónico y construcción en Ciudad de Panamá.";
    const url = `${window.location.origin}/sobre-el-arquitecto`;

    document.title = title;
    upsertMeta("description", description);
    upsertLink("canonical", url);

    upsertProp("og:title", title);
    upsertProp("og:description", description);
    upsertProp("og:type", "website");
    upsertProp("og:url", url);
    upsertProp("/marviper.png");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=1200&auto=format&fit=crop");

    // JSON-LD for Person and WebPage
    injectJsonLd("jsonld-person", {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Marvin Pérez De Obaldía",
      "jobTitle": "Arquitecto",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Marvin Pérez de Obaldía - Arquitecto",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ciudad de Panamá",
          "addressCountry": "PA"
        }
      },
      "alumniOf": {
        "@type": "University",
        "name": "Universidad de Panamá"
      },
      "knowsAbout": [
        "Arquitectura",
        "Remodelaciones y Construcciones en General",
        "Desarrollo de Planos / Autocad",
        "Diseños Arquitectónicos – Anteproyectos",
        "Diseño de Interiores",
        "Cálculo de Presupuestos",
        "Mantenimientos Generales"
      ],
      "areaServed": "Ciudad de Panamá",
      "nationality": "Panameño"
    });

    injectJsonLd("jsonld-webpage", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": `${window.location.origin}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sobre el Arquitecto",
            "item": url
          }
        ]
      }
    });
  }, []);

  const education = [
    {
      period: "1993 – 1998", 
      institution: "Universidad de Panamá",
      degree: "Licenciatura en Arquitectura",
      icon: GraduationCap
    },
    {
      period: "1987 – 1992",
      institution: "Colegio De La Salle",
      degree: "Bachiller en Ciencias, Letras y Filosofía (Secundaria)",
      icon: Award
    },
    {
      period: "1980 – 1986",
      institution: "Colegio De La Salle",
      degree: "Educación Primaria",
      icon: Award
    }
  ];

  const experience = [
    {
      period: "2003 – 2025",
      company: "Independiente",
      role: "Arquitecto Principal",
      description: "Construcciones en general, diseños arquitectónicos y desarrollos de anteproyectos, confección y desarrollo de planos, remodelaciones generales y diseño de interiores en residencias, oficinas, consultorios, locales comerciales, etc.",
      icon: Building
    },
    {
      period: "2001 – 2003",
      company: "Oficina del Casco Antiguo (Ministerio de la Presidencia)",
      role: "Coordinador y Supervisor de Proyectos",
      description: "Coordinador y supervisor de proyectos de restauración, elaboración de planos para proyectos de restauración, cálculos de presupuestos, inspecciones de obras, evaluaciones de proyectos, administración de obras de construcción y personal.",
      icon: Building
    },
    {
      period: "2001",
      company: "Arte y Dimensiones, S.A.",
      role: "Desarrollador de Proyectos",
      description: "Desarrollos de planos y anteproyectos, diseños particulares y presentaciones digitales de proyectos arquitectónicos.",
      icon: Building
    },
    {
      period: "1999 – 2000",
      company: "Sistemas Energéticos de Panamá",
      role: "Dibujante de Planos Electro-Mecánicos",
      description: "Dibujante de planos Electro-Mecánicos (Proyecto Urbanización Costa del Este, Colegio San Agustín y Sub-Estaciones Eléctricas), inspecciones de proyectos eléctricos, sub estaciones eléctricas, etc.",
      icon: Building
    },
    {
      period: "1998 – 1999",
      company: "Sistemas Energéticos de Panamá",
      role: "Dibujante de Planos Electro-Mecánicos",
      description: "Dibujante de planos Electro-Mecánicos (Proyecto Termo-Eléctrica de Bahía Las Minas, Colón), levantamientos de campo, inspecciones generales.",
      icon: Building
    },
    {
      period: "1997 – 1998",
      company: "Ingelmec, S.A.",
      role: "Especialista en Presupuestos",
      description: "Cálculo de presupuesto de obras, preparación de licitaciones, inspección y administración de proyectos de construcción.",
      icon: Building
    },
    {
      period: "1996",
      company: "Arq. Leopoldo Pérez E.",
      role: "Asistente de Proyectos",
      description: "Apoyo en el desarrollo de proyectos arquitectónicos y supervisión de obras bajo la dirección del arquitecto titular.",
      icon: Building
    },
    {
      period: "1995 – 1996",
      company: "Conart, S.A. / Arq. Adolfo Ortíz",
      role: "Especialista en Presentaciones",
      description: "Presentaciones artísticas de proyectos arquitectónicos, anteproyectos y maquetas.",
      icon: Building
    }
  ];

  const specialties = [
    "Remodelaciones y Construcciones en General",
    "Desarrollo de Planos / Autocad",
    "Diseños Arquitectónicos – Anteproyectos",
    "Asesoría en Decoración y Diseño de Interiores",
    "Cálculo de Presupuestos",
    "Trabajos de mantenimientos generales en residencias"
  ];

  return (
    <div className="bg-bg text-text-hi">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-b-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/marviper.png)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Arq. Marvin Pérez De Obaldía
            </h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              25+ años transformando espacios en Ciudad de Panamá con diseño funcional, 
              presupuestos transparentes y entregas puntuales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/agenda"
                className="bg-cta hover:bg-cta-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Agendar consulta
              </Link>
              <a
                href="https://wa.me/50700000000?text=Hola%20Marvin%2C%20quiero%20conocer%20más%20sobre%20tu%20experiencia"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-text-hi px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-2 font-serif text-text-hi mb-6">
              Experiencia que transforma espacios
            </h2>
            <p className="text-body text-text-lo leading-relaxed mb-8">
              Arquitecto panameño con más de 30 años de experiencia especializado en construcciones 
              generales, diseños arquitectónicos, remodelaciones integrales y diseño de interiores. 
              Graduado de la Universidad de Panamá en 1998, ha desarrollado una metodología única que 
              combina diseño funcional con control riguroso de tiempos y presupuestos.
            </p>
            
            {/* Key Stats */}
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-divider">
                <div className="text-3xl font-bold text-cta mb-2">30+</div>
                <div className="text-text-lo">Años de experiencia</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-divider">
                <div className="text-3xl font-bold text-cta mb-2">300+</div>
                <div className="text-text-lo">Proyectos completados</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-divider">
                <div className="text-3xl font-bold text-cta mb-2">98%</div>
                <div className="text-text-lo">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-heading-2 font-serif text-text-hi mb-12 text-center">
              Trayectoria profesional
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-divider hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center">
                        <exp.icon className="w-6 h-6 text-cta" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-heading-4 font-serif text-text-hi mb-1">
                            {exp.role}
                          </h3>
                          <div className="text-cta font-semibold">
                            {exp.company}
                          </div>
                        </div>
                        <div className="bg-section px-4 py-2 rounded-full text-sm font-medium text-text-lo mt-2 lg:mt-0">
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-text-lo leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Specialties */}
      <section className="py-16 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-heading-2 font-serif text-text-hi mb-8">
                  Formación académica y profesional
                </h2>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-divider"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-cta/10 rounded-lg flex items-center justify-center">
                            <edu.icon className="w-5 h-5 text-cta" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-sm text-cta font-semibold mb-1">
                            {edu.period}
                          </div>
                          <h3 className="text-heading-4 font-serif text-text-hi mb-2">
                            {edu.degree}
                          </h3>
                          <div className="text-text-lo">
                            {edu.institution}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h2 className="text-heading-2 font-serif text-text-hi mb-8">
                  Actividades profesionales
                </h2>
                
                <div className="bg-white rounded-2xl p-8 border border-divider">
                  <p className="text-body text-text-lo mb-6 leading-relaxed">
                    Servicios especializados desarrollados a lo largo de más de tres décadas 
                    de práctica profesional en el mercado panameño.
                  </p>
                  
                  <div className="grid gap-3">
                    {specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-section rounded-lg"
                      >
                        <div className="w-2 h-2 bg-cta rounded-full flex-shrink-0" />
                        <span className="text-text-hi font-medium">
                          {specialty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-2 font-serif text-text-hi mb-6">
              Filosofía de trabajo
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-divider">
              <p className="text-body text-text-lo leading-relaxed mb-6">
                "Cada proyecto es una oportunidad de mejorar la calidad de vida de las personas. 
                Mi enfoque combina funcionalidad, estética y viabilidad económica para crear 
                espacios que realmente transformen la experiencia diaria de quienes los habitan. 
                Con más de 30 años de experiencia, he aprendido que el éxito radica en la 
                atención al detalle y el compromiso con la excelencia."
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Users className="w-8 h-8 text-cta mx-auto mb-3" />
                  <h3 className="text-heading-4 font-serif text-text-hi mb-2">
                    Enfoque humano
                  </h3>
                  <p className="text-sm text-text-lo">
                    Diseños centrados en las necesidades reales de cada familia
                  </p>
                </div>
                
                <div className="text-center">
                  <Award className="w-8 h-8 text-cta mx-auto mb-3" />
                  <h3 className="text-heading-4 font-serif text-text-hi mb-2">
                    Calidad garantizada
                  </h3>
                  <p className="text-sm text-text-lo">
                    Materiales de primera y supervisión técnica constante
                  </p>
                </div>
                
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-cta mx-auto mb-3" />
                  <h3 className="text-heading-4 font-serif text-text-hi mb-2">
                    Compromiso temporal
                  </h3>
                  <p className="text-sm text-text-lo">
                    Cronogramas realistas con entregas puntuales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 border border-divider">
              <h2 className="text-heading-2 font-serif text-text-hi mb-4">
                ¿Listo para transformar tu espacio?
              </h2>
              <p className="text-body text-text-lo mb-8">
                Con más de 30 años de experiencia, estoy aquí para hacer realidad tu proyecto 
                con la calidad y transparencia que me caracterizan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/agenda"
                  className="bg-cta hover:bg-cta-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Agendar visita técnica
                </Link>
                <Link
                  to="/"
                  className="border-2 border-cta text-cta hover:bg-cta hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;