// Cabecera editorial de páginas interiores: eyebrow, H1, subtítulo, máximo dos acciones y foto.
import Button from './ui/Button';
import Picture from './Picture';
import { SITE, telHref, waHref } from '@/data/site';

interface Props { eyebrow: string; title: string; lead: string; image: string; alt: string; ubicacion?: string }

export default function PageHero({ eyebrow, title, lead, image, alt, ubicacion = 'cabecera-pagina' }: Props) {
  return (
    <section className="ph">
      <div className="wrap ph__grid">
        <div className="ph__text">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="subtitle">{lead}</p>
          <div className="ph__btns">
            <Button href={telHref} icon="phone" ubicacion={ubicacion}>Llamar al {SITE.phoneDisplay}</Button>
            <Button href={waHref()} variant="outline" icon="whatsapp" ubicacion={ubicacion} external>WhatsApp</Button>
          </div>
          <p className="ph__proof"><a href={SITE.googleMaps} rel="noopener" target="_blank">{SITE.rating} ★ · {SITE.reviewCount} reseñas en Google</a></p>
        </div>
        <div className="ph__media">
          <Picture name={image} preset="pagehero" alt={alt} sizes="(min-width: 64rem) 42vw, 100vw" priority />
        </div>
      </div>
    </section>
  );
}
