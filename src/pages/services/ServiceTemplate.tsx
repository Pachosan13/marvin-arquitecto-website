import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp, Shield, Eye, Users, Clipboard, Award, Clock, HardHat, CheckCircle, FileCheck, ClipboardCheck, Footprints as Blueprint, Home, Palette, Lightbulb, Box, UserCheck, TrendingUp, Calendar, FileText, GitBranch, Calculator } from "lucide-react";
import { SERVICE_DATA } from "../../data/services";

const C = {
  bg:"#F7F5F1", section:"#EEE9E2", panel:"#E2D7C8",
  text:"#2B2F33", mute:"#6C6A65", div:"#DDD5CC", cta:"#6FA27A", ctaH:"#5B8E66"
};

function m(name: string, content: string){ if(!content) return; let el=document.querySelector(`meta[name="${name}"]`); if(!el){el=document.createElement("meta");el.setAttribute("name",name);document.head.appendChild(el);} el.setAttribute("content",content);}
function p(prop: string, content: string){ if(!content) return; let el=document.querySelector(`meta[property="${prop}"]`); if(!el){el=document.createElement("meta");el.setAttribute("property",prop);document.head.appendChild(el);} el.setAttribute("content",content);}
function l(rel: string, href: string){ if(!href) return; let el=document.querySelector(`link[rel="${rel}"]`); if(!el){el=document.createElement("link");el.setAttribute("rel",rel);document.head.appendChild(el);} el.setAttribute("href",href);}
function jsonld(id: string, obj: any){ if(!obj) return; const prev=document.getElementById(id); if(prev) prev.remove(); const s=document.createElement("script"); s.type="application/ld+json"; s.id=id; s.text=JSON.stringify(obj); document.head.appendChild(s);}

export default function ServiceTemplate(){
  const { slug } = useParams<{ slug: string }>();
  const data = useMemo(()=> (SERVICE_DATA as any)[slug || ''] || null, [slug]);
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      shield: Shield, eye: Eye, users: Users, clipboard: Clipboard, award: Award, clock: Clock,
      'hard-hat': HardHat, 'check-circle': CheckCircle, 'file-check': FileCheck, 
      'clipboard-check': ClipboardCheck, blueprint: Blueprint, home: Home, palette: Palette,
      lightbulb: Lightbulb, box: Box, 'user-check': UserCheck, 'trending-up': TrendingUp,
      calendar: Calendar, 'file-text': FileText, 'git-branch': GitBranch, calculator: Calculator
    };
    return icons[iconName] || Shield;
  };

  useEffect(()=> {
    if(!data) return;
    document.title = data.seo_title || data.service_name;
    m("description", data.seo_description || "");
    l("canonical", data.canonical_url || window.location.href);
    p("og:title", data.seo_title || data.service_name);
    p("og:description", data.seo_description || "");
    p("og:type", "website");
    p("og:url", data.canonical_url || window.location.href);
    p("og:image", data.og_image || "");
    m("twitter:card","summary_large_image");
    m("twitter:title", data.seo_title || data.service_name);
    m("twitter:description", data.seo_description || "");
    m("twitter:image", data.og_image || "");

    jsonld("jsonld-bc", {
      "@context":"https://schema.org","@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"Inicio","item":`${window.location.origin}/`},
        {"@type":"ListItem","position":2,"name":"Servicios","item":`${window.location.origin}/servicios/`},
        {"@type":"ListItem","position":3,"name":data.service_name,"item":data.canonical_url||window.location.href}
      ]
    });
    jsonld("jsonld-svc", {
      "@context":"https://schema.org","@type":"Service",
      "name":data.service_name,"serviceType":data.service_name,
      "areaServed":data.city||"Ciudad de Panamá",
      "provider":{"@type":"LocalBusiness","name":"Marvin Pérez – Arquitecto en Panamá","areaServed":data.city||"Ciudad de Panamá","telephone":data.phone?`+507 ${data.phone}`:"+507 0000-0000","url":window.location.origin}
    });
    if(Array.isArray(data.faqs)&&data.faqs.length){
      jsonld("jsonld-faq",{"@context":"https://schema.org","@type":"FAQPage","mainEntity":data.faqs.map((x: any)=>({"@type":"Question","name":x.q,"acceptedAnswer":{"@type":"Answer","text":x.a}}))});
    }
  },[data]);

  if(!data) return <div style={{minHeight:'60vh'}} className="flex items-center justify-center">Servicio no encontrado.</div>;
  const wa = data.whatsapp ? `https://wa.me/${data.whatsapp}` : "#";

  return (
    <div style={{background:C.bg, color:C.text}}>
      {/* HERO */}
      <section className="relative overflow-hidden rounded-b-2xl">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.hero_image})` }}
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">{data.seo_title}</h1>
          <p className="mt-4 max-w-2xl text-white/90">{data.hero_subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={`/agenda?service=${encodeURIComponent(data.seo_title)}`} className="px-6 py-3 rounded-xl text-white font-semibold" style={{background:C.cta}} data-gtm="HeroCTA_Click">Agendar visita (48h)</Link>
            <a href="#cases" className="px-6 py-3 rounded-xl border-2 border-white text-white hover:bg-white hover:text-text-hi font-semibold transition-all duration-200">Ver proyectos</a>
            {wa && <a href={`${wa}?text=Hola%20Marvin%2C%20quiero%20información%20sobre:%20${encodeURIComponent(data.seo_title)}`} target="_blank" rel="noreferrer" className="px-4 py-3 rounded-xl border-2 border-white text-white hover:bg-white hover:text-text-hi transition-all duration-200">WhatsApp</a>}
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-sm" style={{color:C.mute}}>
            <span className="border rounded-full px-3 py-1 bg-white/20 backdrop-blur-sm border-white/30 text-white">Presupuesto transparente</span>
            <span className="border rounded-full px-3 py-1 bg-white/20 backdrop-blur-sm border-white/30 text-white">Entrega a tiempo</span>
            <span className="border rounded-full px-3 py-1 bg-white/20 backdrop-blur-sm border-white/30 text-white">Garantía de acabados</span>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="py-12" style={{background:C.section, borderTop:`1px solid ${C.div}`, borderBottom:`1px solid ${C.div}`}}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {data.pains?.map((p: string,i: number)=>(
            <div key={i} className="rounded-2xl p-6 border" style={{borderColor:C.div, background:C.panel}}>{p}</div>
          ))}
        </div>
      </section>

      {/* SCOPE */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl">Alcance del servicio</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-3">
            {data.scope?.map((s: string,i: number)=>(
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{background:C.cta}}/>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm" style={{color:C.mute}}>Zonas: {(data.zones||[]).join(" · ")}</div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-14" style={{background:C.section, borderTop:`1px solid ${C.div}`, borderBottom:`1px solid ${C.div}`}}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg mb-12" style={{color:C.mute}}>
              Ventajas que nos diferencian en el mercado panameño
            </p>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.benefits.map((benefit: any, i: number) => {
                const IconComponent = getIcon(benefit.icon);
                // Create different sizes for bento effect
                const isLarge = i === 0 || i === 3;
                const gridClass = isLarge ? "md:col-span-2" : "md:col-span-1";
                
                return (
                  <div
                    key={i}
                    className={`group rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:scale-105 ${gridClass}`}
                    style={{borderColor:C.div, background:C.panel}}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                          style={{background: `${C.cta}20`}}
                        >
                          <IconComponent className="w-6 h-6" style={{color: C.cta}} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-opacity-90 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{color:C.mute}}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* BEFORE/AFTER */}
      <section id="cases" className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {data.cases_ab?.map((c: any,i: number)=>(
            <figure key={i} className="rounded-2xl overflow-hidden border" style={{borderColor:C.div, background:C.panel}}>
              <div className="relative h-56">
                <img src={c.after_img} alt={`${c.title} — después`} className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 w-1/2 overflow-hidden" aria-hidden="true">
                  <img src={c.before_img} alt="" className="w-full h-full object-cover"/>
                </div>
              </div>
              <figcaption className="p-4">
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm" style={{color:C.mute}}>{c.zone} · {c.weeks} semanas · Variación {c.variance}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14" style={{background:C.section, borderTop:`1px solid ${C.div}`, borderBottom:`1px solid ${C.div}`}}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl">Proceso</h2>
          <ol className="mt-6 grid md:grid-cols-5 gap-4">
            {data.process?.map((s: any,i: number)=>(
              <li key={i} className="rounded-2xl p-5 border" style={{borderColor:C.div, background:C.panel}}>
                <div className="text-sm mb-1" style={{color:C.mute}}>Paso {i+1}</div>
                <div className="font-semibold">{s.step}</div>
                <div className="text-sm" style={{color:C.mute}}>{s.time}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CASE CARDS */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {data.case_cards?.map((c: any,i: number)=>(
            <figure key={i} className="rounded-2xl overflow-hidden border" style={{borderColor:C.div, background:C.panel}}>
              <img src={c.img} alt={c.title} className="h-48 w-full object-cover"/>
              <figcaption className="p-4">
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm" style={{color:C.mute}}>{c.metrics}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14" style={{background:C.section, borderTop:`1px solid ${C.div}`, borderBottom:`1px solid ${C.div}`}}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {data.testimonials?.map((t: any,i: number)=>(
            <blockquote key={i} className="rounded-2xl p-6 border" style={{borderColor:C.div, background:C.panel}}>
              <div className="text-lg">"{t.quote}"</div>
              <div className="mt-2 text-sm" style={{color:C.mute}}>{t.author}</div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* MINI FORM */}
      <section id="book-form" className="py-16">
        <div className="max-w-3xl mx-auto px-4 rounded-2xl p-6 border" style={{borderColor:C.div, background:C.panel}}>
          <h2 className="text-3xl md:text-4xl">Cuéntame tu idea y agenda tu visita (48h)</h2>
          <p className="mt-2" style={{color:C.mute}}>Respuesta en 24–48h por WhatsApp.</p>
          <form className="grid md:grid-cols-2 gap-4 mt-6" onSubmit={(e)=>{e.preventDefault(); alert("¡Gracias! Te contactaremos por WhatsApp.");}}>
            <div><label className="text-sm">Nombre</label><input required className="w-full rounded-xl border px-3 py-2" style={{borderColor:C.div}} placeholder="Tu nombre"/></div>
            <div><label className="text-sm">WhatsApp</label><input required className="w-full rounded-xl border px-3 py-2" style={{borderColor:C.div}} placeholder="507…"/></div>
            <div><label className="text-sm">Tipo de proyecto</label><select className="w-full rounded-xl border px-3 py-2" style={{borderColor:C.div}}><option>Casa</option><option>Apartamento</option><option>Oficina</option><option>Local comercial</option></select></div>
            <div><label className="text-sm">Zona</label><select className="w-full rounded-xl border px-3 py-2" style={{borderColor:C.div}}>{(data.zones||[]).map((z: string)=> <option key={z}>{z}</option>)}<option>Otra</option></select></div>
            <div className="md:col-span-2"><label className="text-sm">Mensaje</label><textarea rows={4} className="w-full rounded-xl border px-3 py-2" style={{borderColor:C.div}} placeholder="Cuéntanos un poco de tu proyecto…"/></div>
            <div className="md:col-span-2 flex flex-wrap gap-3">
              <Link to={`/agenda?service=${encodeURIComponent(data.seo_title)}`} className="px-6 py-3 rounded-2xl text-white font-semibold" style={{background:C.cta}} data-gtm="MiniForm_Submit">Agendar visita</Link>
              {wa !== "#" && <a href={`${wa}?text=Hola%20Marvin%2C%20quiero%20agendar%20una%20visita%20sobre:%20${encodeURIComponent(data.seo_title)}`} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl border font-semibold" style={{borderColor:C.cta}}>Hablar por WhatsApp</a>}
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{background:C.section, borderTop:`1px solid ${C.div}`}}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl mb-4">Preguntas frecuentes</h2>
          <p className="text-lg mb-12" style={{color:C.mute}}>
            Resolvemos las dudas más comunes sobre este servicio
          </p>
          
          <div className="space-y-4">
            {data.faqs?.map((f: any,i: number)=>(
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-md"
                style={{borderColor:C.div, background:C.panel}}
              >
                <button
                  onClick={() => toggleFaqItem(i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-opacity-50 transition-colors duration-200"
                  style={{background: openFaqItems.includes(i) ? `${C.cta}10` : 'transparent'}}
                  aria-expanded={openFaqItems.includes(i)}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3 className="font-semibold text-lg pr-4">
                    {f.q}
                  </h3>
                  <div className="flex-shrink-0" style={{color: C.cta}}>
                    {openFaqItems.includes(i) ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${i}`}
                  className={`px-6 transition-all duration-300 ${
                    openFaqItems.includes(i) 
                      ? 'pb-5 opacity-100' 
                      : 'pb-0 opacity-0 h-0 overflow-hidden'
                  }`}
                >
                  <div className="border-t pt-5" style={{borderColor:C.div}}>
                    <p className="leading-relaxed" style={{color:C.mute}}>
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA after FAQ */}
          <div className="text-center mt-12">
            <div className="rounded-2xl p-8 border" style={{borderColor:C.div, background:C.panel}}>
              <h3 className="text-2xl md:text-3xl mb-4">
                ¿Tienes alguna otra pregunta?
              </h3>
              <p className="mb-6" style={{color:C.mute}}>
                Contactanos directamente para resolver cualquier duda específica sobre tu proyecto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to={`/agenda?service=${encodeURIComponent(data.seo_title)}`} 
                  className="px-6 py-3 rounded-2xl text-white font-semibold transition-colors duration-200" 
                  style={{background:C.cta}}
                >
                  Agendar consulta
                </Link>
                {data.whatsapp && (
                  <a
                    href={`https://wa.me/${data.whatsapp}?text=Hola%20Marvin%2C%20tengo%20una%20pregunta%20sobre%20${encodeURIComponent(data.seo_title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-200 hover:text-white"
                    style={{borderColor:C.cta, color:C.cta}}
                    onMouseEnter={(e) => e.currentTarget.style.background = C.cta}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    Preguntar por WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8"><Link to="/" className="underline">Volver al inicio</Link></div>
        </div>
      </section>
    </div>
  );
}