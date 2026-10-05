import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { JsonLd } from '@/lib/seo';
import { FOOTER_LINKS, SITE, telHref } from '@/data/site';

export const metadata: Metadata = {
  title: 'Página no encontrada | LIDA Energía',
  description: 'La página que buscas no existe.',
};

export default function NotFound() {
  return (
    <>
      <JsonLd />
      <section className="section">
        <div className="wrap simple">
          <p className="eyebrow">Error 404</p>
          <h1>No encontramos esta página.</h1>
          <p className="subtitle">Puede que la dirección haya cambiado. Estas son las secciones de la web:</p>
          <ul className="simple__list">
            <li><a href="/">Inicio</a></li>
            {FOOTER_LINKS.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
          </ul>
          <Button href={telHref} icon="phone" ubicacion="404">Llamar al {SITE.phoneDisplay}</Button>
        </div>
      </section>
    </>
  );
}
