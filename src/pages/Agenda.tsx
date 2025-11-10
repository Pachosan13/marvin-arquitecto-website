import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const C = {
  bg:"#F7F5F1", section:"#EEE9E2", panel:"#E2D7C8",
  text:"#2B2F33", mute:"#6C6A65", div:"#DDD5CC", cta:"#6FA27A", ctaH:"#5B8E66"
};

// helpers SEO/Schema
function upsertMeta(name: string, content: string){ if(!content) return; let el=document.querySelector(`meta[name="${name}"]`); if(!el){ el=document.createElement("meta"); el.setAttribute("name",name); document.head.appendChild(el);} el.setAttribute("content",content); }
function upsertProp(prop: string, content: string){ if(!content) return; let el=document.querySelector(`meta[property="${prop}"]`); if(!el){ el=document.createElement("meta"); el.setAttribute("property",prop); document.head.appendChild(el);} el.setAttribute("content",content); }
function upsertLink(rel: string, href: string){ if(!href) return; let el=document.querySelector(`link[rel="${rel}"]`); if(!el){ el=document.createElement("link"); el.setAttribute("rel",rel); document.head.appendChild(el);} el.setAttribute("href",href); }
function injectJsonLd(id: string, obj: any){ if(!obj) return; const prev=document.getElementById(id); if(prev) prev.remove(); const s=document.createElement("script"); s.type="application/ld+json"; s.id=id; s.text=JSON.stringify(obj); document.head.appendChild(s); }

export default function Agenda(){
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const service = params.get("service");

  // SEO
  useEffect(()=> {
    const title = service ? `Agenda tu visita – ${service} | Marvin Pérez` : "Agenda tu visita | Marvin Pérez – Arquitecto en Panamá";
    const desc  = "Reserva tu visita o consulta. Calendario en línea con confirmación inmediata por email/WhatsApp.";
    const url   = `${window.location.origin}/agenda${window.location.search||""}`;

    document.title = title;
    upsertMeta("description", desc);
    upsertLink("canonical", url);

    upsertProp("og:title", title);
    upsertProp("og:description", desc);
    upsertProp("og:type", "website");
    upsertProp("og:url", url);

    injectJsonLd("jsonld-webpage", {
      "@context":"https://schema.org",
      "@type":"WebPage",
      "name": title,
      "description": desc,
      "url": url,
      "breadcrumb":{"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Inicio","item":`${window.location.origin}/`},
        {"@type":"ListItem","position":2,"name":"Agenda","item":url}
      ]}
    });
  }, [service]);

  // EMBED GHL — insert script on mount (lazy + preconnect)
  useEffect(()=> {
    // preconnect
    const pc = document.createElement("link");
    pc.rel = "preconnect";
    pc.href = "https://api.leadconnectorhq.com";
    document.head.appendChild(pc);

    const s = document.createElement("script");
    s.src = "https://api.leadconnectorhq.com/widget/booking/vVPkI8l3JYk4WtIEMl3m";
    s.async = true;
    document.getElementById("ghl-scripts")?.appendChild(s) || document.body.appendChild(s);
    return ()=> { s.remove(); };
  }, []);

  return (
    <div style={{background:C.bg, color:C.text}}>
      <section className="relative overflow-hidden rounded-b-2xl">
        <div className="relative max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-semibold">Agenda tu visita</h1>
          <p className="mt-3 max-w-2xl" style={{color:C.mute}}>
            Selecciona fecha y hora en el calendario. Confirmación inmediata. {service ? `Servicio: ${service}.` : ""}
          </p>
        </div>
      </section>

      <section className="py-10" style={{background:C.section, borderTop:`1px solid ${C.div}`, borderBottom:`1px solid ${C.div}`}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border overflow-hidden" style={{borderColor:C.div, background:C.panel}}>
            <div 
              id="ghl-widget" 
              className="ghl-booking-widget min-h-[600px]"
              data-widget-id="vVPkI8l3JYk4WtIEMl3m"
            >
              {/* Fallback content - will be replaced by GHL widget */}
              <div className="p-6 text-center">
                <p className="text-sm mb-4" style={{color:C.mute}}>
                  Cargando calendario...
                </p>
                <p className="text-sm" style={{color:C.mute}}>
                  Si el calendario no aparece, 
                  {" "}<a className="underline" href="https://api.leadconnectorhq.com/widget/booking/vVPkI8l3JYk4WtIEMl3m" target="_blank" rel="noreferrer">abre este enlace</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl p-5 border" style={{borderColor:C.div, background:C.panel}}>Presupuesto transparente</div>
          <div className="rounded-2xl p-5 border" style={{borderColor:C.div, background:C.panel}}>Entrega a tiempo</div>
          <div className="rounded-2xl p-5 border" style={{borderColor:C.div, background:C.panel}}>Garantía de acabados</div>
        </div>
      </section>

      {/* espacio para el script host si se usa */}
      <div id="ghl-scripts" />
    </div>
  );
}