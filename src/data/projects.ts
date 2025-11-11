export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  cover: string;
  category: 'Residencial' | 'Corporativo';
  gallery?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'apartamento-costa-del-este',
    title: 'Apartamento Costa del Este',
    location: 'Costa del Este, Ciudad de Panamá',
    year: '2024',
    cover: '/carrusel/carrusel2.jpg',
    category: 'Residencial',
    gallery: ['/carrusel/carrusel2.jpg', '/CASAIV.jpg', '/recamara.jpg'],
  },
  {
    slug: 'oficinas-centro-financiero',
    title: 'Oficinas Centro Financiero',
    location: 'Obarrio, Ciudad de Panamá',
    year: '2023',
    cover: '/oficina.jpg',
    category: 'Corporativo',
    gallery: ['/oficina.jpg', '/oficina1.jpg', '/oficina2.jpg'],
  },
  {
    slug: 'casa-altos-del-chase',
    title: 'Casa Altos del Chase',
    location: 'San Francisco, Ciudad de Panamá',
    year: '2023',
    cover: '/CASAIV.jpg',
    category: 'Residencial',
    gallery: ['/CASAIV.jpg', '/CASA.jpg', '/CHASETERRAZA.jpg'],
  },
  {
    slug: 'consultorio-town-center',
    title: 'Consultorio Town Center',
    location: 'Costa del Este, Ciudad de Panamá',
    year: '2022',
    cover: '/antesconsultorio.png',
    category: 'Corporativo',
    gallery: ['/antesconsultorio.png', '/Render1.png', '/RENDER.png'],
  },
  {
    slug: 'ph-vitri-remodelacion',
    title: 'Remodelación PH Vitri',
    location: 'Costa del Este, Ciudad de Panamá',
    year: '2022',
    cover: '/AntyDespcases/phvitri.jpg',
    category: 'Residencial',
    gallery: ['/AntyDespcases/phvitri.jpg', '/AntyDespcases/sushiexpress.jpg'],
  },
];
