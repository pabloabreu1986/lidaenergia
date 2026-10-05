import { SITE } from '@/data/site';

export const dynamic = 'force-static';

// Páginas indexables (las noindex no van al sitemap). Mismo formato que @astrojs/sitemap.
const INDEXABLE = [
  '/',
  '/cargadores-coche-electrico/',
  '/contacto/',
  '/instalacion-placas-solares-madrid/',
  '/mantenimiento-placas-solares/',
  '/placas-solares-empresas/',
  '/presupuesto-placas-solares/',
  '/sobre-nosotros/',
];

export function GET() {
  const urls = INDEXABLE.map((p) => `<url><loc>${SITE.url}${p}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
