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
  email: 'hello@adimadesign.com',
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
  { label: 'Work', href: '/#proyectos', hash: 'proyectos' },
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

/** Real project photography — curated from the client portfolio (Drive, 2026-10-20). */
export const portfolio = [
  { slug: 'univista-lobby', cat: 'commercial', title: 'UniVista Insurance — main hall', finish: 'Microcement & plaster walls', place: 'Doral, FL', w: 1600, h: 1200 },
  { slug: 'univista-reception', cat: 'commercial', title: 'Reception & brand wall', finish: 'Marble-effect plaster, wood slats', place: 'Doral, FL', w: 1200, h: 1600 },
  { slug: 'univista-team', cat: 'commercial', title: 'Open office & marble accent wall', finish: 'Marble-effect plaster, wood slats', place: 'Doral, FL', w: 1200, h: 1600 },
  { slug: 'univista-application', cat: 'commercial', title: 'Wall application on site', finish: 'Venetian plaster, layer by layer', place: 'Doral, FL', w: 1200, h: 1600 },
  { slug: 'univista-double-height', cat: 'commercial', title: 'Double-height wall in progress', finish: 'Textured microcement', place: 'Doral, FL', w: 900, h: 1600 },
  { slug: 'marble-bathroom', cat: 'residential', title: 'Marble bathroom', finish: 'Book-matched marble, dark wood ceiling', place: 'Miami, FL', w: 1200, h: 1600 },
  { slug: 'plaster-doors', cat: 'residential', title: 'Entry wardrobe doors', finish: 'Venetian plaster on doors', place: 'Miami, FL', w: 1200, h: 1600 },
  { slug: 'epoxy-living-room', cat: 'residential', title: 'Blue metallic accent wall', finish: 'Metallic epoxy resin', place: 'Miami, FL', w: 1198, h: 1600 },
  { slug: 'panel-wall', cat: 'residential', title: 'Panel wall & stone slab', finish: 'Plaster panels, marble slab', place: 'Miami, FL', w: 1600, h: 1200 },
  { slug: 'pool-fire-feature', cat: 'exterior', title: 'Waterfront fire feature', finish: 'Microcement basin, glass wind guard', place: 'Fort Lauderdale, FL', w: 1200, h: 1600 },
  { slug: 'pool-fire-feature-2', cat: 'exterior', title: 'Spa basin & deck', finish: 'Microcement, travertine deck', place: 'Fort Lauderdale, FL', w: 1200, h: 1600 },
  { slug: 'pool-fire-feature-process', cat: 'exterior', title: 'Fire feature during finishing', finish: 'Microcement, masking & sealing', place: 'Fort Lauderdale, FL', w: 1200, h: 1600 },
  { slug: 'marble-hallway', cat: 'renovation', title: 'Marble-effect hallway', finish: 'Hand-painted marble finish', place: 'Hialeah, FL', w: 1200, h: 1600 },
  { slug: 'marble-hallway-detail', cat: 'renovation', title: 'Veining detail', finish: 'Hand-painted marble finish', place: 'Hialeah, FL', w: 1200, h: 1600 },
  { slug: 'trailer-after', cat: 'renovation', title: 'Trailer floor coating', finish: 'Full-flake epoxy coating', place: 'Miami, FL', w: 1200, h: 1600 },
  { slug: 'garage-flake-floor', cat: 'renovation', title: 'Garage floor coating', finish: 'Full-flake epoxy', place: 'Miami, FL', w: 1200, h: 1600 },
  { slug: 'texture-microcement', cat: 'surfaces', title: 'Microcement — trowel texture', finish: 'Microcement', place: 'Miami, FL', w: 1200, h: 1600 },
  { slug: 'texture-limewash', cat: 'surfaces', title: 'Limewash — brushed finish', finish: 'Limewash', place: 'Miami, FL', w: 1200, h: 1600 },
  { slug: 'brand-cube', cat: 'surfaces', title: 'Sample finish on a cube', finish: 'Venetian plaster sample', place: 'Miami, FL', w: 1600, h: 1087 },
];

export const portfolioCategories = [
  {
    id: 'commercial',
    label: 'Commercial',
    title: 'Commercial · Doral, FL',
    text: 'Our commercial projects focus on enhancing brand identity through innovative designs. We craft spaces that inspire productivity while ensuring durability and style, tailored to your business needs.',
  },
  {
    id: 'residential',
    label: 'Residential',
    title: 'Residential · Fort Lauderdale, FL',
    text: 'We specialize in residential designs that reflect personal style and comfort. Our approach integrates aesthetically pleasing elements with practical functionality to create vibrant living environments.',
  },
  {
    id: 'exterior',
    label: 'Outdoor',
    title: 'Outdoor & waterfront',
    text: 'Microcement and plaster also live outside: pool decks, fire features and spa basins finished seam-free, sealed for the Florida weather and detailed around glass and stone.',
  },
  {
    id: 'renovation',
    label: 'Renovation',
    title: 'Renovations · Hialeah, FL',
    text: 'Our renovation services breathe new life into existing spaces. Using Venetian plaster, microcement and epoxy we turn outdated areas into modern showcases — with a before and after you can actually see.',
  },
  {
    id: 'surfaces',
    label: 'Finishes',
    title: 'Finishes & samples',
    text: 'Every project starts on a sample board: trowel texture, sheen and colour tested on the real surface before we commit to the whole wall.',
  },
];
