/**
 * Site content — single source of truth.
 * Everything marked PLACEHOLDER must be replaced when the client confirms the data.
 *
 * Real data recovered from the client's Instagram profile (@adima.design, 2026-10-17):
 * name "Adima Design LLC", bio "Interior Design, Venetian Plaster, Microcement and Epoxy",
 * phone (786) 727-7419 (Miami-Dade area code), 50 published posts, bilingual account.
 * Still unconfirmed: email, exact address, business hours, project photos and metrics.
 */

export const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Builds an internal path respecting `base` (GitHub Pages / custom domain). */
export const url = (path = '/') => `${BASE}${path.replace(/^\//, '')}`;

export const site = {
  name: 'Adima Design LLC',
  tagline: 'Decorative interior finishes',
  description:
    'Adima Design LLC — Miami-based studio specialized in venetian plaster, microcement, limewash and epoxy finishes for residential and commercial interiors.',
  // PLACEHOLDER: no email published yet
  email: 'contacto@adimadesign.com',
  phone: '+1 (786) 727-7419',
  whatsapp: '17867277419',
  // PLACEHOLDER: area code 786 is Miami-Dade, FL — confirm the exact address
  address: 'Miami, FL',
  // PLACEHOLDER
  hours: 'Mon to Fri, 8:00 am – 5:00 pm',
  social: {
    instagram: 'https://www.instagram.com/adima.design',
    whatsapp: 'https://wa.me/17867277419',
  },
};

/** Vertical rail navigation. */
export const nav = [
  { label: 'Home', href: '/', hash: 'inicio' },
  { label: 'Services', href: '/#servicios', hash: 'servicios' },
  { label: 'Projects', href: '/#proyectos', hash: 'proyectos' },
  { label: 'Studio', href: '/#estudio', hash: 'estudio' },
  { label: 'Contact', href: '/#contacto', hash: 'contacto' },
];

export const stats = [
  { value: '100%', label: 'Hand-applied finishes' },
  { value: 'Natural', label: 'Lime & mineral products' },
  { value: 'Custom', label: 'Sample board per job' },
  { value: 'Miami', label: 'Serving South Florida' },
];

export const services = [
  {
    title: 'Venetian plaster',
    icon: 'wall',
    items: ['Polished and matte finishes', 'Marble-effect walls', 'Accent walls and columns'],
  },
  {
    title: 'Microcement',
    icon: 'layers',
    items: ['Floors, walls and ceilings', 'Seamless wet areas', 'Layer-by-layer application'],
  },
  {
    title: 'Limewash & mineral finishes',
    icon: 'roller',
    items: ['Cloud-effect walls', 'Breathable, 100% natural', 'Custom colour matching'],
  },
  {
    title: 'Epoxy & wood panels',
    icon: 'plan',
    items: ['Wood-and-epoxy panels', 'Applied to any surface', 'Custom patterns'],
  },
  {
    title: 'Bathrooms & wet areas',
    icon: 'drop',
    items: ['Walk-in showers', 'Niches and benches', 'Waterproofing and sealing'],
  },
  {
    title: 'Interior design & colour',
    icon: 'lamp',
    items: ['Material and colour boards', 'Space and light planning', 'Project coordination'],
  },
];

/** Paragraphs of the "Studio" block (editorial tone). */
export const about = [
  'Adima Design is a Miami studio specialized in decorative interior finishes: venetian plaster, microcement, limewash and epoxy. We do not just cover walls — we build surfaces layer by layer until they look and feel the way you imagined them.',
  'Every project starts with a conversation and a sample board: we test the finish, the colour and the sheen on your actual surface before committing to the whole space. No guesswork about the final result.',
  'We work with mineral, lime-based and natural products, applied by hand by the same crew that quotes the job. That is why our finishes hold up in wet areas and high-traffic spaces.',
];

export const process = [
  { step: '01', title: 'Consultation', text: 'We visit the space, talk through the look you want and prepare a personalized sample board.' },
  { step: '02', title: 'Surface prep', text: 'Repairs, sanding and priming so the finish bonds evenly and lasts.' },
  { step: '03', title: 'Application', text: 'Base coats, colour and sealing applied by hand, layer by layer, with dust protection on site.' },
  { step: '04', title: 'Detailing', text: 'Edges, niches and final sheen check; the site is cleaned and care instructions are handed over.' },
];

// PLACEHOLDER: project titles describe the real work types published on Instagram;
// photos still pending (the client has not sent the originals).
export const projects = [
  { title: 'Cloud-effect accent wall', type: 'Limewash', meta: 'Nursery', ratio: 'ratio-45' },
  { title: 'Continuous microcement bathroom', type: 'Microcement', meta: 'Wet area', ratio: 'ratio-45' },
  { title: 'Wood & epoxy feature panel', type: 'Epoxy', meta: 'Interior wall', ratio: 'ratio-45' },
  { title: 'Marble-effect venetian plaster', type: 'Venetian plaster', meta: 'Master bath', ratio: 'ratio-45' },
  { title: 'Microcement commercial floor', type: 'Microcement', meta: 'Retail space', ratio: 'ratio-45' },
  { title: 'Walk-in shower', type: 'Microcement', meta: 'Bathroom', ratio: 'ratio-45' },
];
