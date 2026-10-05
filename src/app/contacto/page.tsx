import Button from '@/components/ui/Button';
import { JsonLd, pageMetadata } from '@/lib/seo';
import { SITE, telHref, waHref } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Contacto: Teléfono y WhatsApp | LIDA Energía Madrid',
  description: 'Contacta con LIDA Energía, instaladores de placas solares en Madrid. Teléfono y WhatsApp 641 49 55 13, email info@lidaenergia.com.',
  path: '/contacto/',
});

export default function Page() {
  return (
    <>
      <JsonLd
        breadcrumbs={[{ name: 'Contacto', href: '/contacto/' }]}
        schema={[{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contacto | LIDA Energía', about: { '@id': `${SITE.url}/#empresa` } }]}
      />
      <section className="ct" id="presupuesto">
        <div className="wrap ct__grid">
          <div>
            <p className="eyebrow">Contacto</p>
            <h1>Hablemos de tu instalación.</h1>
            <p className="subtitle">La forma más rápida es por teléfono o WhatsApp. Te atiende el equipo que estudia tu caso.</p>
            <a className="ct__tel" href={telHref} data-ubicacion="contacto">{SITE.phoneDisplay}</a>
            <div className="ct__btns">
              <Button href={telHref} size="lg" icon="phone" ubicacion="contacto">Llamar ahora</Button>
              <Button href={waHref()} size="lg" variant="outline" icon="whatsapp" ubicacion="contacto" external>WhatsApp</Button>
            </div>
          </div>
          <dl className="ct__dl">
            <div><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
            <div><dt>Horario</dt><dd>{SITE.hours}</dd></div>
            <div><dt>Zona de trabajo</dt><dd>Madrid y Comunidad de Madrid</dd></div>
            <div><dt>Reseñas</dt><dd><a href={SITE.googleMaps} rel="noopener" target="_blank">{SITE.rating} ★ en Google ({SITE.reviewCount} reseñas)</a></dd></div>
            <div><dt>Instagram</dt><dd><a href={SITE.instagram} rel="noopener" target="_blank">@lidaenergia</a></dd></div>
            <div><dt>Presupuesto</dt><dd><a href="/presupuesto-placas-solares/">Cómo pedir presupuesto</a></dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
