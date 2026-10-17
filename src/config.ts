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
    whatsapp: 'https://wa.me/580000000000',
  },
};

/** Menú vertical del riel izquierdo. */
export const nav = [
  { label: 'Inicio', href: '/', hash: 'inicio' },
  { label: 'Servicios', href: '/#servicios', hash: 'servicios' },
  { label: 'Proyectos', href: '/#proyectos', hash: 'proyectos' },
  { label: 'Estudio', href: '/#estudio', hash: 'estudio' },
  { label: 'Contacto', href: '/#contacto', hash: 'contacto' },
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
    icon: 'plan',
    items: ['Anteproyecto y planos', 'Visualización 3D', 'Memoria descriptiva'],
  },
  {
    title: 'Construcción de obra',
    icon: 'crane',
    items: ['Fundaciones y estructura', 'Albañilería y acabados', 'Instalaciones'],
  },
  {
    title: 'Remodelaciones',
    icon: 'roller',
    items: ['Cocinas y baños', 'Fachadas', 'Ampliaciones'],
  },
  {
    title: 'Diseño de interiores',
    icon: 'lamp',
    items: ['Mobiliario a medida', 'Iluminación', 'Selección de acabados'],
  },
  {
    title: 'Supervisión de obra',
    icon: 'check',
    items: ['Cómputos y presupuesto', 'Control de avance', 'Informes de obra'],
  },
  {
    title: 'Consultoría y permisos',
    icon: 'doc',
    items: ['Viabilidad', 'Gestión de permisos', 'Avalúos'],
  },
];

/** Párrafos del bloque "Estudio" (texto justificado, estilo editorial). */
export const about = [
  'En Adima Design desarrollamos ideas, ejecutamos proyectos y construimos obras: buscamos espacios eficientes, duraderos y bien resueltos, entendiendo cada encargo como una oportunidad de diseño integral.',
  'Trabajamos a distintas escalas —mobiliario, interiores y arquitectura— y en todas el detalle es esencial: conocer e involucrar al cliente y al equipo en el proceso, con presupuesto y cronograma claros desde el primer día.',
  'Valoramos lo hecho en casa. Trabajamos con equipo propio y proveedores locales para reducir costos, controlar la calidad y darle a cada proyecto un valor agregado real.',
];

export const process = [
  { step: '01', title: 'Levantamiento', text: 'Visitamos el espacio, medimos y escuchamos lo que necesitas.' },
  { step: '02', title: 'Propuesta', text: 'Diseño, opciones de acabados y presupuesto detallado.' },
  { step: '03', title: 'Ejecución', text: 'Obra con cronograma, personal propio y control de calidad.' },
  { step: '04', title: 'Entrega', text: 'Entrega con garantía y acompañamiento posterior.' },
];

// PLACEHOLDER: reemplazar por proyectos reales con fotos.
export const projects = [
  { title: 'Residencia privada', type: 'Diseño + construcción', meta: '280 m²', ratio: 'ratio-45' },
  { title: 'Apartamento', type: 'Remodelación integral', meta: '110 m²', ratio: 'ratio-45' },
  { title: 'Local comercial', type: 'Obra gris y acabados', meta: '90 m²', ratio: 'ratio-45' },
  { title: 'Casa de campo', type: 'Diseño arquitectónico', meta: '340 m²', ratio: 'ratio-45' },
  { title: 'Oficinas', type: 'Interiores y mobiliario', meta: '180 m²', ratio: 'ratio-45' },
  { title: 'Ampliación', type: 'Construcción', meta: '75 m²', ratio: 'ratio-45' },
];
