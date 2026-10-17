/**
 * Datos del sitio — TODO lo marcado PLACEHOLDER hay que reemplazarlo
 * cuando el cliente entregue información real.
 */

export const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Construye una ruta interna respetando el `base` (GitHub Pages / dominio propio). */
export const url = (path = '/') => `${BASE}${path.replace(/^\//, '')}`;

export const site = {
  name: 'Adima Design',
  tagline: 'Diseño y construcción',
  description:
    'Adima Design: empresa de diseño y construcción. Proyectos residenciales y comerciales, remodelaciones, diseño de interiores y supervisión de obra.',
  // PLACEHOLDER
  email: 'contacto@adimadesign.com',
  phone: '+58 000 000 0000',
  whatsapp: '580000000000',
  // PLACEHOLDER
  address: 'Caracas, Venezuela',
  hours: 'Lun a Vie, 8:00 am – 5:00 pm',
  // PLACEHOLDER
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    linkedin: '',
  },
};

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export const stats = [
  { value: '+120', label: 'Proyectos entregados' }, // PLACEHOLDER
  { value: '+15', label: 'Años de experiencia' }, // PLACEHOLDER
  { value: '100%', label: 'Obras con garantía' },
  { value: '24h', label: 'Respuesta a cotizaciones' },
];

export const services = [
  {
    title: 'Diseño arquitectónico',
    text: 'Concepto, planos y visualización 3D. Proyectos a medida para vivienda, oficina y local comercial.',
    icon: 'plan',
    items: ['Anteproyecto y planos', 'Render 3D', 'Memoria descriptiva'],
  },
  {
    title: 'Construcción y obra gris',
    text: 'Ejecución de obra con cronograma, control de calidad y presupuesto cerrado.',
    icon: 'crane',
    items: ['Fundaciones y estructura', 'Albañilería', 'Instalaciones'],
  },
  {
    title: 'Remodelaciones',
    text: 'Transformamos espacios existentes con intervenciones limpias, rápidas y planificadas.',
    icon: 'roller',
    items: ['Cocinas y baños', 'Fachadas', 'Ampliaciones'],
  },
  {
    title: 'Diseño de interiores',
    text: 'Mobiliario, iluminación y acabados pensados para la forma real de vivir el espacio.',
    icon: 'lamp',
    items: ['Mobiliario a medida', 'Iluminación', 'Selección de acabados'],
  },
  {
    title: 'Supervisión de obra',
    text: 'Acompañamiento técnico: control de avance, materiales y cumplimiento del presupuesto.',
    icon: 'check',
    items: ['Cómputos y presupuesto', 'Control de avance', 'Informes de obra'],
  },
  {
    title: 'Consultoría y permisos',
    text: 'Asesoría técnica y gestión documental para que el proyecto avance sin sorpresas.',
    icon: 'doc',
    items: ['Viabilidad', 'Gestión de permisos', 'Avalúos'],
  },
];

export const process = [
  { step: '01', title: 'Levantamiento', text: 'Visitamos el espacio, medimos y escuchamos lo que necesitas.' },
  { step: '02', title: 'Propuesta', text: 'Diseño, opciones de acabados y presupuesto detallado.' },
  { step: '03', title: 'Ejecución', text: 'Obra con cronograma, personal propio y control de calidad.' },
  { step: '04', title: 'Entrega', text: 'Entrega con garantía y acompañamiento posterior.' },
];

// PLACEHOLDER: reemplazar por proyectos reales con fotos.
export const projects = [
  { title: 'Residencia privada', type: 'Diseño + construcción', meta: '280 m² · Zona Este', tone: 'a' },
  { title: 'Remodelación de apartamento', type: 'Interiores', meta: '110 m² · Caracas', tone: 'b' },
  { title: 'Local comercial', type: 'Obra gris + acabados', meta: '90 m² · Zona Centro', tone: 'c' },
];
