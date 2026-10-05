// Una reseña destacada y dos de apoyo. Textos y autores literales de REVIEWS (site.ts).
import SectionHeading from './SectionHeading';
import { Stars } from './Icon';
import { REVIEWS, SITE } from '@/data/site';

export default function Reviews({ eyebrow = 'Clientes de LIDA', title = 'Así cuentan su experiencia.' }: { eyebrow?: string; title?: string }) {
  const [main, ...rest] = REVIEWS;
  return (
    <section className="section surface-white rv" aria-labelledby="resenas-h">
      <div className="wrap">
        <div className="rv__head">
          <SectionHeading eyebrow={eyebrow} title={title} id="resenas-h" />
          <a className="rv__score" href={SITE.googleMaps} rel="noopener" target="_blank">
            <span className="rv__num">{SITE.rating}</span>
            <span className="rv__meta">
              <Stars className="rv__stars" />
              <span>{SITE.reviewCount} reseñas en Google</span>
            </span>
          </a>
        </div>
        <figure className="rv__main">
          <blockquote><p>“{main.text}”</p></blockquote>
          <figcaption>{main.author}, reseña en Google</figcaption>
        </figure>
        <ul className="rv__list">
          {rest.map((r) => (
            <li key={r.author}>
              <figure>
                <blockquote><p>“{r.text}”</p></blockquote>
                <figcaption>{r.author}, reseña en Google</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="rv__more"><a href={SITE.googleMaps} rel="noopener" target="_blank">Leer las {SITE.reviewCount} reseñas en Google Maps</a></p>
      </div>
    </section>
  );
}
