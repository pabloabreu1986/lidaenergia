// Cierre de contacto en superficie oscura. Los botones usan variantes válidas sobre oscuro (ui.css).
import Button from './ui/Button';
import { SITE, telHref, waHref } from '@/data/site';

interface Props { eyebrow?: string; title?: string; text?: string; ubicacion?: string; id?: string }

export default function CtaBand({
  eyebrow = 'Tu instalación empieza aquí',
  title = 'Cuéntanos qué tienes en mente.',
  text = 'Llámanos o escríbenos por WhatsApp y estudiamos tu caso. Si tienes a mano una factura de luz, mejor.',
  ubicacion = 'banda',
  id,
}: Props) {
  return (
    <section className="section surface-dark cta" data-cta-band id={id} aria-labelledby={`${ubicacion}-h`}>
      <div className="wrap cta__grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${ubicacion}-h`}>{title}</h2>
          <p className="subtitle">{text}</p>
        </div>
        <div className="cta__side">
          <div className="cta__btns">
            <Button href={telHref} size="lg" icon="phone" ubicacion={ubicacion}>Llamar ahora</Button>
            <Button href={waHref()} size="lg" variant="outline" icon="whatsapp" ubicacion={ubicacion} external>Escribir por WhatsApp</Button>
          </div>
          <dl className="cta__dl">
            <div><dt>Teléfono y WhatsApp</dt><dd><a href={telHref} data-ubicacion={ubicacion}>{SITE.phoneDisplay}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
            <div><dt>Horario</dt><dd>{SITE.hours}</dd></div>
            <div><dt>Zona</dt><dd>Madrid y Comunidad de Madrid</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
