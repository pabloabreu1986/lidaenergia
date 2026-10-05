// Datos de la empresa: una sola fuente para web, datos estructurados y pie.
// Deben coincidir EXACTAMENTE con la ficha de Google Business Profile.

export const SITE = {
  name: 'LIDA Energía',
  legalName: 'LIDA Energía S.L.',
  url: 'https://lidaenergia.com',
  phone: '+34641495513',
  phoneDisplay: '641 49 55 13',
  whatsapp: '34641495513',
  email: 'info@lidaenergia.com',
  founder: 'David Fernández',
  instagram: 'https://www.instagram.com/lidaenergia/',
  linkedinFounder: 'https://www.linkedin.com/in/david-fern%C3%A1ndez-trujillo/',
  // Ficha de Google (CID de Maps)
  googleMaps: 'https://maps.google.com/?cid=8358664034916688108',
  // Reseñas: actualizar a mano cuando cambien (comprobado el 05/10/2026)
  rating: '5,0',
  reviewCount: 54,
  // Horario: PENDIENTE de confirmar con el cliente la hora de apertura.
  hours: 'Lunes a viernes, hasta las 17:30',
  // PENDIENTE: confirmar con el cliente los municipios donde trabaja.
  areaServed: ['Madrid', 'Comunidad de Madrid'],
  // Formulario desactivado por decisión del cliente (05/10/2026). PHP guardado en server/enviar.php.
  formEndpoint: '',
} as const;

export const telHref = `tel:${SITE.phone}`;
export const waHref = (text = 'Hola, quiero un presupuesto de placas solares.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

// Reseñas reales publicadas en Google (texto literal, nombre abreviado).
export const REVIEWS = [
  {
    author: 'Miguel L.',
    text: 'Después de pasar por varias empresas, casi todas con trato con comerciales, un amigo me recomendó Lida. David me hizo una oferta personalizada a mis necesidades. Trato directo, claro y sin ningún misterio. Se encargó de todo. Precios muy buenos.',
  },
  {
    author: 'José Luis C.',
    text: 'David y su equipo, unos auténticos profesionales, dando ideas y soluciones para la instalación, que fue de placas solares y batería, y no pudo quedar mejor. 100 % recomendables.',
  },
  {
    author: 'Gabriela C.',
    text: 'Nos han instalado nuestras placas y no podríamos estar más satisfechos con el resultado. Han demostrado una gran profesionalidad durante todo el proceso.',
  },
];

export const SERVICES = [
  { href: '/instalacion-placas-solares-madrid/', label: 'Placas solares para tu casa', description: 'Viviendas, chalets y comunidades de vecinos.' },
  { href: '/instalacion-placas-solares-madrid/#baterias', label: 'Baterías solares', description: 'Guarda la energía del día para usarla por la noche.' },
  { href: '/placas-solares-empresas/', label: 'Placas solares para empresas', description: 'Naves, oficinas y comercios.' },
  { href: '/cargadores-coche-electrico/', label: 'Cargadores de coche eléctrico', description: 'En casa, en el garaje comunitario o en la empresa.' },
  { href: '/mantenimiento-placas-solares/', label: 'Mantenimiento', description: 'Revisión y averías, también de otras instaladoras.' },
];

export const NAV = [
  { href: '/#proceso', label: 'Cómo trabajamos' },
  { href: '/sobre-nosotros/', label: 'Quiénes somos' },
  { href: '/contacto/', label: 'Contacto' },
];

// Enlaces de pie de página (todas las páginas indexables)
export const FOOTER_LINKS = [
  { href: '/instalacion-placas-solares-madrid/', label: 'Placas solares en Madrid' },
  { href: '/placas-solares-empresas/', label: 'Placas solares para empresas' },
  { href: '/cargadores-coche-electrico/', label: 'Cargadores de coche eléctrico' },
  { href: '/mantenimiento-placas-solares/', label: 'Mantenimiento' },
  { href: '/presupuesto-placas-solares/', label: 'Presupuesto' },
  { href: '/sobre-nosotros/', label: 'Quiénes somos' },
  { href: '/contacto/', label: 'Contacto' },
];
