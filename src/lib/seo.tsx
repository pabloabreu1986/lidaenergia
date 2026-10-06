import type { Metadata } from 'next';
import { SITE } from '@/data/site';
import { ogImageUrl } from '@/components/Picture';

export interface Crumb { name: string; href: string }
export interface Faq { q: string; a: string }
type Json = Record<string, unknown>;

/** Metadata de página: title, description, canonical, robots y Open Graph (equivalente al <head> de Base.astro). */
const PREVIEW = process.env.PREVIEW === '1';

export function pageMetadata(opts: { title: string; description: string; path: string; ogImage?: string; noindex?: boolean }): Metadata {
  const noindex = opts.noindex || PREVIEW; // la versión de prueba nunca se indexa
  const url = new URL(opts.path, SITE.url).href;
  const image = ogImageUrl(opts.ogImage ?? 'azotea-placas-atardecer');
  return {
    title: opts.title,
    description: opts.description,
    alternates: opts.noindex ? undefined : { canonical: url },
    robots: noindex ? { index: false, follow: !PREVIEW } : undefined,
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: SITE.name,
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export function businessSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE.url}/#empresa`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    telephone: SITE.phone,
    email: SITE.email,
    logo: `${SITE.url}/icono-512.png`,
    image: ogImageUrl('azotea-placas-atardecer'),
    address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressRegion: 'Comunidad de Madrid', addressCountry: 'ES' },
    description: 'Instalación de placas solares, baterías, cargadores de coche eléctrico y mantenimiento de instalaciones fotovoltaicas en Madrid.',
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    hasMap: SITE.googleMaps,
    sameAs: [SITE.instagram, SITE.googleMaps],
    founder: { '@type': 'Person', name: SITE.founder, sameAs: SITE.linkedinFounder },
    knowsAbout: ['Autoconsumo fotovoltaico', 'Placas solares', 'Baterías solares', 'Cargadores de vehículo eléctrico'],
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Inicio', href: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c.name, item: new URL(c.href, SITE.url).href,
    })),
  };
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
  };
}

/** Datos estructurados de la página: empresa + migas + los específicos que se pasen. */
export function JsonLd({ breadcrumbs = [], schema = [] }: { breadcrumbs?: Crumb[]; schema?: Json[] }) {
  const items = [businessSchema(), ...(breadcrumbs.length ? [breadcrumbSchema(breadcrumbs)] : []), ...schema];
  return (
    <>
      {items.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j).replace(/</g, '\\u003c') }} />
      ))}
    </>
  );
}
