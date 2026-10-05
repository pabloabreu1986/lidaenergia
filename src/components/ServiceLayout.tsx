import type { ReactNode } from 'react';
import PageHero from './PageHero';
import FaqSection from './FaqSection';
import CtaBand from './CtaBand';
import Reviews from './Reviews';
import { JsonLd, faqSchema, type Faq } from '@/lib/seo';
import { SITE } from '@/data/site';

interface TocItem { href: string; label: string }
interface Props {
  eyebrow: string;
  h1: string;
  lead: string;
  image: string;
  alt: string;
  slug: string;
  crumb: string;
  serviceName: string;
  serviceType?: string;
  toc?: TocItem[];
  faqs?: Faq[];
  faqTitle?: string;
  faqDescription?: string;
  ctaTitle?: string;
  origen: string;
  children: ReactNode;
}

export default function ServiceLayout(p: Props) {
  const url = `${SITE.url}/${p.slug}/`;
  const schema: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#servicio`,
      name: p.serviceName,
      ...(p.serviceType ? { serviceType: p.serviceType } : {}),
      provider: { '@id': `${SITE.url}/#empresa` },
      areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
      url,
    },
  ];
  if (p.faqs?.length) schema.push(faqSchema(p.faqs));
  return (
    <>
      <JsonLd breadcrumbs={[{ name: p.crumb, href: `/${p.slug}/` }]} schema={schema} />
      <PageHero eyebrow={p.eyebrow} title={p.h1} lead={p.lead} image={p.image} alt={p.alt} />
      <div className="section surface-white svc">
        <div className={['wrap', 'svc__grid', p.toc?.length ? 'svc__grid--toc' : ''].filter(Boolean).join(' ')}>
          {p.toc?.length ? (
            <nav className="svc__toc" aria-label="En esta página">
              <p className="eyebrow">En esta página</p>
              <ol>{p.toc.map((t) => <li key={t.href}><a href={t.href}>{t.label}</a></li>)}</ol>
            </nav>
          ) : null}
          <article className="prose svc__body">{p.children}</article>
        </div>
      </div>
      {p.faqs?.length ? (
        <FaqSection items={p.faqs} id={`faq-${p.slug}`} title={p.faqTitle ?? 'Las dudas, claras.'} description={p.faqDescription ?? 'Lo que conviene saber antes de decidir.'} />
      ) : null}
      <Reviews />
      <CtaBand ubicacion={`cierre-${p.origen}`} id="presupuesto" title={p.ctaTitle} />
    </>
  );
}
