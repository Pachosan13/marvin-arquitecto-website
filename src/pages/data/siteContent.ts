export interface ProjectGalleryItem {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface Project {
  readonly title: string;
  readonly slug: string;
  readonly cover: string;
  readonly coverAlt: string;
  readonly tags: readonly string[];
  readonly brief: string;
  readonly location: string;
  readonly area: string;
  readonly year: string;
  readonly scope: readonly string[];
  readonly gallery: readonly ProjectGalleryItem[];
}

export const projects: readonly Project[] = [
  {
    title: 'Apartamento Costa del Este con acabado boutique',
    slug: 'apartamento-costa-del-este',
    cover: '/RENDER.png',
    coverAlt: 'Sala remodelada con acabados cálidos y mobiliario contemporáneo',
    tags: ['apartamentos', 'interiorismo', 'llave en mano'],
    brief:
      'Remodelación integral de apartamento de 180 m² para una familia que deseaba un espacio luminoso, acogedor y listo para recibir amigos. Incluyó rediseño de distribución, cocina gourmet y mobiliario a medida.',
    location: 'Costa del Este, Ciudad de Panamá',
    area: '180 m²',
    year: '2024',
    scope: ['Interiorismo', 'Gestión de permisos', 'Construcción llave en mano', 'Diseño de iluminación'],
    gallery: [
      { src: '/RENDER.png', alt: 'Sala principal con iluminación cálida y mobiliario a medida', width: 1600, height: 900 },
      { src: '/Render1.png', alt: 'Cocina abierta con isla de cuarzo y lámparas doradas', width: 1600, height: 900 },
      { src: '/oficina.jpg', alt: 'Estudio con escritorio flotante y paneles de madera', width: 1600, height: 900 },
    ],
  },
  {
    title: 'Casa en Clayton con ampliación y terraza bioclimática',
    slug: 'casa-clayton-terraza-bioclimatica',
    cover: '/CASA.jpg',
    coverAlt: 'Vista exterior de casa remodelada con terrazas y vegetación',
    tags: ['casas', 'ampliación', 'fachada'],
    brief:
      'Proyecto de ampliación y remodelación total que integró la vida interior con la terraza y la piscina. Enfocado en ventilación cruzada, iluminación natural y materiales duraderos.',
    location: 'Clayton, Ciudad de Panamá',
    area: '420 m²',
    year: '2023',
    scope: ['Arquitectura', 'Diseño estructural', 'Paisajismo', 'Gestión de proveedores'],
    gallery: [
      { src: '/CASAIV.jpg', alt: 'Terraza cubierta con mobiliario exterior y celosías', width: 1600, height: 900 },
      { src: '/CHASETERRAZA.jpg', alt: 'Detalle de terraza con comedor y pérgola de madera', width: 1600, height: 900 },
      { src: '/CASA.jpg', alt: 'Fachada remodelada con vegetación', width: 1600, height: 900 },
    ],
  },
  {
    title: 'Oficinas boutique para despacho legal en Obarrio',
    slug: 'oficinas-boutique-despacho-legal-obarrio',
    cover: '/oficina1.jpg',
    coverAlt: 'Sala de juntas moderna con iluminación lineal',
    tags: ['oficinas', 'branding', 'interiores'],
    brief:
      'Diseño y ejecución de oficinas boutique para un despacho legal que buscaba proyectar confianza y sofisticación. Incluyó planificación de espacios, acústica y mobiliario custom.',
    location: 'Obarrio, Ciudad de Panamá',
    area: '250 m²',
    year: '2023',
    scope: ['Programación arquitectónica', 'Construcción interior', 'Tecnología y data', 'Diseño gráfico ambiental'],
    gallery: [
      { src: '/oficina2.jpg', alt: 'Recepción con paneles de madera y logo retroiluminado', width: 1600, height: 900 },
      { src: '/oficina.jpg', alt: 'Área de trabajo colaborativa con iluminación puntual', width: 1600, height: 900 },
      { src: '/oficina1.jpg', alt: 'Sala de reuniones con vidrio acanalado', width: 1600, height: 900 },
    ],
  },
  {
    title: 'Restaurante de autor en Casco Antiguo',
    slug: 'restaurante-autor-casco-antiguo',
    cover: '/antesconsultorio.png',
    coverAlt: 'Restaurante con iluminación cálida y muros de piedra expuesta',
    tags: ['comercial', 'hospitality', 'restaurantes'],
    brief:
      'Transformación de local histórico en experiencia gastronómica contemporánea respetando patrimonio. Se incorporaron acabados artesanales, cocina abierta y acústica controlada.',
    location: 'Casco Antiguo, Ciudad de Panamá',
    area: '320 m²',
    year: '2022',
    scope: ['Restauración', 'Interiorismo', 'Ingeniería MEP', 'Supervisión de obra'],
    gallery: [
      { src: '/COCINACHASE%20I.jpg', alt: 'Cocina abierta con acabados en latón y mármol', width: 1600, height: 900 },
      { src: '/oficina.jpg', alt: 'Salón principal con sillas tapizadas y muros texturizados', width: 1600, height: 900 },
      { src: '/RENDER.png', alt: 'Detalle de barra con iluminación puntual', width: 1600, height: 900 },
    ],
  },
  {
    title: 'Penthouse en Punta Pacífica con terrazas panorámicas',
    slug: 'penthouse-punta-pacifica',
    cover: '/recamara.jpg',
    coverAlt: 'Dormitorio principal con vista panorámica y acabados cálidos',
    tags: ['apartamentos', 'luxury', 'interiorismo'],
    brief:
      'Renovación total de penthouse de 360 m² con terrazas panorámicas, spa privado y sistema domótico para una familia que viaja con frecuencia.',
    location: 'Punta Pacífica, Ciudad de Panamá',
    area: '360 m²',
    year: '2024',
    scope: ['Interiorismo', 'Domótica', 'Construcción llave en mano', 'Styling final'],
    gallery: [
      { src: '/recamara.jpg', alt: 'Dormitorio principal con cabecero a medida y vistas a la bahía', width: 1600, height: 900 },
      { src: '/carrusel/carrusel6.jpg', alt: 'Área social con terraza y mobiliario contemporáneo', width: 1600, height: 900 },
      { src: '/Render1.png', alt: 'Cocina abierta con isla de cuarzo y luminarias lineales', width: 1600, height: 900 },
    ],
  },
  {
    title: 'Oficina creativa para agencia en Costa del Este',
    slug: 'oficina-creativa-costa-del-este',
    cover: '/oficina2.jpg',
    coverAlt: 'Recepción de oficina creativa con iluminación cálida y logo suspendido',
    tags: ['oficinas', 'comercial', 'branding'],
    brief:
      'Diseño colaborativo para agencia de marketing con zonas flexibles, phone booths acústicos y branding inmersivo.',
    location: 'Costa del Este, Ciudad de Panamá',
    area: '210 m²',
    year: '2023',
    scope: ['Programación espacial', 'Ingeniería MEP', 'Construcción interior', 'Branding ambiental'],
    gallery: [
      { src: '/oficina2.jpg', alt: 'Lobby con paneles de madera y mostrador escultórico', width: 1600, height: 900 },
      { src: '/oficina1.jpg', alt: 'Sala de reuniones con vidrio acanalado y luz cálida', width: 1600, height: 900 },
      { src: '/oficina.jpg', alt: 'Área colaborativa con escritorios compartidos y vegetación', width: 1600, height: 900 },
    ],
  },
  {
    title: 'Casa de playa en Santa Clara con vista al Pacífico',
    slug: 'casa-playa-santa-clara',
    cover: '/carrusel/carrusel4.jpg',
    coverAlt: 'Terraza de casa de playa con piscina infinita y mar al fondo',
    tags: ['casas', 'playa', 'interior-exterior'],
    brief:
      'Proyecto de segunda residencia que integra terrazas, piscina y suites privadas con ventilación cruzada y materiales resistentes al ambiente salino.',
    location: 'Santa Clara, Panamá',
    area: '520 m²',
    year: '2022',
    scope: ['Arquitectura', 'Paisajismo', 'Interiorismo', 'Gestión de obra'],
    gallery: [
      { src: '/carrusel/carrusel4.jpg', alt: 'Terraza principal con piscina infinita y camastros', width: 1600, height: 900 },
      { src: '/carrusel/carrusel2.jpg', alt: 'Sala abierta conectada al exterior con mobiliario cálido', width: 1600, height: 900 },
      { src: '/CASAIV.jpg', alt: 'Pasarela exterior con vegetación tropical', width: 1600, height: 900 },
    ],
  },
  {
    title: 'Consultorio boutique en San Francisco',
    slug: 'consultorio-boutique-san-francisco',
    cover: '/planos.jpg',
    coverAlt: 'Planos y muestras de materiales sobre una mesa de diseño',
    tags: ['comercial', 'salud', 'interiores'],
    brief:
      'Adaptación de consultorio médico con experiencia tipo spa, circulaciones eficientes y materiales higiénicos de alto diseño.',
    location: 'San Francisco, Ciudad de Panamá',
    area: '140 m²',
    year: '2023',
    scope: ['Interiorismo', 'Gestión de permisos', 'Control de obra', 'Ambientación final'],
    gallery: [
      { src: '/planos.jpg', alt: 'Equipo de arquitectura revisando planos y acabados', width: 1600, height: 900 },
      { src: '/antesconsultorio.png', alt: 'Sala de espera con iluminación cálida y mobiliario cómodo', width: 1600, height: 900 },
      { src: '/carrusel/carrusel7.jpg', alt: 'Recepción con madera oscura y detalles dorados', width: 1600, height: 900 },
    ],
  },
];

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      'Marvin y su equipo se encargaron de absolutamente todo. Recibimos reportes semanales, visualizamos cada avance y el presupuesto se mantuvo intacto. Nuestra casa hoy se siente como un hotel boutique.',
    author: 'Patricia Gómez',
    role: 'Residencial · Costa del Este',
  },
  {
    quote:
      'Lograron traducir nuestra cultura corporativa en un espacio que inspira. La entrega fue puntual y sin contratiempos, incluso coordinando mudanza y cableado de data sin detener la operación.',
    author: 'Gabriel Díaz',
    role: 'Socio Director · Despacho Legal en Obarrio',
  },
  {
    quote:
      'Traían propuestas claras, renders realistas y un cronograma cumplido al día. Los clientes nos felicitan por el ambiente del restaurante y la acústica controlada.',
    author: 'María Laura Sánchez',
    role: 'Propietaria · Restaurante Casco Antiguo',
  },
];

export interface ProcessStep {
  readonly title: string;
  readonly description: string;
}

export const processSteps: readonly ProcessStep[] = [
  {
    title: 'Diagnóstico estratégico',
    description:
      'Analizamos estilo de vida, operación y aspiraciones. Revisamos planos existentes, medimos el inmueble y definimos prioridades por impacto y presupuesto.',
  },
  {
    title: 'Diseño inmersivo',
    description:
      'Prototipamos en 3D, generamos moodboards y seleccionamos materiales con entregas presenciales y virtuales para validar cada decisión estética y funcional.',
  },
  {
    title: 'Presupuesto cerrado',
    description:
      'Construimos un presupuesto llave en mano con hitos claros, proveedores certificados y cláusulas de control de cambios para proteger tu inversión.',
  },
  {
    title: 'Obra supervisada',
    description:
      'Ejecutamos con cuadrillas especializadas, reportes semanales y visitas de supervisión. Coordinamos permisos, seguridad y vecinos.',
  },
  {
    title: 'Entrega lista para habitar',
    description:
      'Instalamos mobiliario, decoramos y hacemos walk-through contigo para validar detalles. Incluye manual de mantenimiento y garantías por escrito.',
  },
];

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export const serviceFaqs: Record<string, readonly FAQItem[]> = {
  'remodelacion-apartamentos': [
    { question: '¿Cuánto cuesta remodelar un apartamento en Ciudad de Panamá?', answer: 'Desde $15,000 según tamaño y acabados. Definimos presupuesto cerrado antes de iniciar.' },
    { question: '¿Puedo vivir en el apartamento durante la obra?', answer: 'No es lo ideal por polvo/ruido. Si es parcial, planificamos por etapas para reducir molestias.' },
    { question: '¿Cuánto tarda una remodelación completa?', answer: 'Entre 8 y 12 semanas para 100 m² incluyendo diseño, permisos y ejecución.' },
    { question: '¿Ustedes gestionan los permisos?', answer: 'Sí. Tramitamos planos y permisos municipales completos.' },
    { question: '¿Puedo traer mis materiales/proveedores?', answer: 'Sí, aunque recomendamos nuestros aliados por control de calidad, tiempos y garantías.' },
  ],
  'remodelacion-casas': [
    { question: '¿Qué incluye una remodelación llave en mano?', answer: 'Diseño, planos, permisos, obra, acabados, mobiliario y entrega lista para habitar.' },
    { question: '¿Se puede por fases?', answer: 'Sí, por zonas (interiores, fachada, terraza) según presupuesto/prioridades.' },
    { question: '¿Cómo evitar sobrecostos?', answer: 'Presupuesto cerrado y contratos claros; cambios se aprueban por escrito.' },
    { question: '¿Mantener elementos originales?', answer: 'Analizamos qué conservar y qué modernizar para coherencia estética/funcional.' },
    { question: '¿Ofrecen garantía?', answer: 'Sí, garantía por defectos de obra y materiales con proveedores certificados.' },
  ],
  'remodelacion-oficinas': [
    { question: '¿Cómo reflejan la identidad de la empresa?', answer: 'Brief estratégico de cultura, marca y operación antes de diseñar.' },
    { question: '¿Tiempos típicos?', answer: '6–10 semanas según metraje y complejidad de interiorismo/mobiliario.' },
    { question: '¿Trabajan fuera de horario?', answer: 'Sí, nocturno o fines de semana para no interrumpir operación.' },
    { question: '¿Incluye cableado, iluminación y mobiliario?', answer: 'Sí: electricidad, data, A/A, iluminación, divisiones y mobiliario.' },
    { question: '¿Qué tipos de empresas atienden?', answer: 'Estudios legales, clínicas, agencias, despachos contables y oficinas en zonas centrales.' },
  ],
  'diseno-y-construccion': [
    { question: '¿Qué es llave en mano?', answer: 'Nos encargamos de todo: diseño, permisos, construcción y entrega final.' },
    { question: '¿Ventajas de diseño+construcción juntos?', answer: 'Menos errores, menos sobrecostos y coherencia total.' },
    { question: '¿Cómo controlan tiempos?', answer: 'Cronograma con hitos y reporte semanal (WhatsApp/correo con fotos).' },
    { question: '¿Hacen residencial y comercial?', answer: 'Ambos: viviendas, oficinas, locales y restaurantes.' },
    { question: '¿Supervisión y control de calidad?', answer: 'Sí, supervisión del arquitecto en etapas críticas y validación de materiales.' },
  ],
};

export interface BlogPostMeta {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly publishedAt: string;
  readonly readingTime: string;
  readonly heroImage: string;
  readonly heroAlt: string;
  readonly keywords: readonly string[];
  readonly sections: readonly {
    readonly heading: string;
    readonly paragraphs: readonly string[];
    readonly bullets?: readonly string[];
  }[];
}

export const blogPosts: readonly BlogPostMeta[] = [
  {
    slug: 'guia-remodelacion-panama',
    title: 'Guía completa para planificar una remodelación en Ciudad de Panamá',
    description:
      'Descubre pasos, permisos y presupuestos para una remodelación exitosa en Ciudad de Panamá con enfoque llave en mano.',
    publishedAt: '2024-07-01',
    readingTime: '8 minutos',
    heroImage: '/planos.jpg',
    heroAlt: 'Planos arquitectónicos sobre escritorio con muestras de materiales',
    keywords: ['arquitecto panamá', 'planos arquitectónicos panamá', 'remodelación llave en mano panamá'],
    sections: [
      {
        heading: 'Cuando buscar un arquitecto en Panamá',
        paragraphs: [
          'Si tu apartamento o casa ya no refleja tu estilo de vida, un arquitecto panamá especializado en remodelaciones te ayudará a replantear distribución, iluminación y acabados sin sorpresas. Iniciamos con un diagnóstico que evalúa estructura, normativa y factibilidad financiera.',
          'Involucrarte temprano garantiza que permisos, proveedores y cronograma estén alineados con tu ventana de ejecución. También nos permite proteger la inversión ante alzas de materiales o mano de obra.',
        ],
      },
      {
        heading: 'Documentos y permisos claves',
        paragraphs: [
          'Para remodelación de apartamentos panamá y casas requerimos planos aprobados, carta de responsabilidad profesional y, en PH, autorización de la administración. Gestionamos la documentación completa ante el Municipio de Panamá y el Colegio de Arquitectos.',
          'En caso de intervenciones estructurales, coordinamos con ingeniero idóneo y presentamos memorias descriptivas. Todo queda respaldado en expedientes digitales accesibles 24/7 para ti.',
        ],
        bullets: ['Planos as-built actualizados', 'Carta de responsabilidad profesional', 'Permisos municipales y de bomberos', 'Seguro de obra y riesgos laborales'],
      },
      {
        heading: 'Presupuesto y control financiero',
        paragraphs: [
          'Definimos un presupuesto llave en mano con precios cerrados. Cada rubro incluye alcance, marcas y garantías, además de contingencias para cambios solicitados. Compartimos dashboard con avances físicos vs financieros para transparencia total.',
          'Trabajamos con proveedores certificados para acabados importados, carpintería a medida y equipos especiales, logrando tiempos de entrega menores y control de calidad superior.',
        ],
      },
      {
        heading: 'Cronograma y logística',
        paragraphs: [
          'Segmentamos la obra por etapas: demolición, instalaciones, acabados, mobiliario y estilismo. Coordinamos ascensores, horarios de carga y protección de áreas comunes para minimizar molestias a vecinos.',
          'Compartimos reportes semanales vía WhatsApp y correo con fotografías, avances y próximos hitos. Así mantenemos la visión alineada aunque viajes o tengas agenda compleja.',
        ],
      },
      {
        heading: 'Entrega sin estrés',
        paragraphs: [
          'Finalizamos con limpieza profunda, control de calidad y manual de mantenimiento. Incluimos sesión de estilismo y capacitación sobre sistemas instalados para que disfrutes tu espacio desde el día uno.',
        ],
      },
    ],
  },
  {
    slug: 'checklist-remodelacion-apartamentos',
    title: 'Checklist para remodelar apartamentos en Panamá sin sorpresas',
    description:
      'Checklist descargable para propietarios de apartamentos en Ciudad de Panamá que quieren remodelar sin estrés y con presupuesto controlado.',
    publishedAt: '2024-06-15',
    readingTime: '6 minutos',
    heroImage: '/RENDER.png',
    heroAlt: 'Arquitecto revisando lista de tareas en apartamento remodelado',
    keywords: ['remodelación de apartamentos panamá', 'arquitecto remodelaciones panamá', 'reformas de apartamentos panamá'],
    sections: [
      {
        heading: 'Diagnóstico inicial',
        paragraphs: [
          'Revisamos estructura, normativas del PH y servicios existentes para detectar riesgos. La visita técnica permite priorizar partidas y dimensionar presupuesto realista.',
        ],
        bullets: ['Medir áreas críticas', 'Analizar manual del PH', 'Identificar puntos de agua y electricidad', 'Definir alcance por zonas'],
      },
      {
        heading: 'Diseño y moodboard',
        paragraphs: [
          'Creamos moodboards y renders que alinean expectativas estéticas con funcionalidad. Esto acelera aprobaciones familiares y reduce cambios sobre la marcha.',
        ],
      },
      {
        heading: 'Logística y permisos',
        paragraphs: [
          'Coordinamos reservas de ascensores, horarios de carga, protección de pasillos y comunicación con la administración. También gestionamos permisos municipales con cronograma definido.',
        ],
      },
      {
        heading: 'Ejecución eficiente',
        paragraphs: [
          'Organizamos cuadrillas especializadas por disciplina para minimizar tiempos muertos. Cada semana recibes avances, fotografías y próximos hitos, con opción de reuniones virtuales.',
        ],
      },
      {
        heading: 'Entrega y posventa',
        paragraphs: [
          'Incluye limpieza profunda, manual de garantías y acompañamiento durante los primeros 30 días para atender ajustes menores.',
        ],
      },
    ],
  },
  {
    slug: 'tendencias-oficinas-panama',
    title: 'Tendencias de oficinas en Panamá que potencian productividad',
    description:
      'Ideas y estrategias para remodelar oficinas en Panamá priorizando bienestar, marca y tecnología integrada.',
    publishedAt: '2024-05-28',
    readingTime: '7 minutos',
    heroImage: '/oficina1.jpg',
    heroAlt: 'Oficina contemporánea con estaciones de trabajo y vegetación interior',
    keywords: ['remodelación de oficinas panamá', 'arquitecto comercial panamá', 'diseño de espacios comerciales panamá'],
    sections: [
      {
        heading: 'Espacios híbridos y flexibles',
        paragraphs: [
          'Las empresas buscan oficinas que se transformen en cuestión de horas. Implementamos divisiones móviles, tecnología inalámbrica y mobiliario modular que permite múltiples configuraciones.',
        ],
      },
      {
        heading: 'Bienestar y biofilia',
        paragraphs: [
          'La biofilia sigue liderando: incorporamos vegetación natural, materiales nobles y control acústico. Esto reduce estrés y mejora concentración en jornadas largas.',
        ],
      },
      {
        heading: 'Tecnología invisible',
        paragraphs: [
          'Integrar cableado, iluminación inteligente y sensores de ocupación sin afectar estética es clave. Diseñamos bandejas ocultas, paneles acústicos y estaciones de carga integradas.',
        ],
      },
      {
        heading: 'Marca y hospitalidad',
        paragraphs: [
          'Cada espacio comunica cultura. Utilizamos materiales, iluminación y elementos gráficos que refuerzan propósito y experiencia del cliente.',
        ],
      },
    ],
  },
];
