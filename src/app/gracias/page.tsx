import Button from '@/components/ui/Button';
import { JsonLd, pageMetadata } from '@/lib/seo';
import { SITE, telHref } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Gracias | LIDA Energía',
  description: 'Gracias por contactar con LIDA Energía, instaladores de placas solares en Madrid.',
  path: '/gracias/',
  noindex: true,
});

export default function Page() {
  return (
    <>
      <JsonLd />
      <section className="section">
        <div className="wrap simple">
          <p className="eyebrow">Gracias</p>
          <h1>Gracias por contactar con nosotros.</h1>
          <p className="subtitle">Te respondemos en horario laboral. Si es urgente, llámanos ahora.</p>
          <div className="simple__btns">
            <Button href={telHref} icon="phone" ubicacion="gracias">Llamar al {SITE.phoneDisplay}</Button>
            <Button href="/" variant="link">Volver al inicio</Button>
          </div>
        </div>
      </section>
    </>
  );
}
