import Button from '@/components/ui/Button';
import FaqSection from '@/components/FaqSection';
import Reviews from '@/components/Reviews';
import { JsonLd, faqSchema, pageMetadata, type Faq } from '@/lib/seo';
import { SITE, telHref, waHref } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Presupuesto de Placas y Paneles Solares en Madrid | LIDA',
  description: 'Pide presupuesto sin compromiso para instalar paneles solares en Madrid. Estudiamos tu consumo y tu tejado y te damos un precio cerrado. Llama al 641 49 55 13.',
  path: '/presupuesto-placas-solares/',
});

const faqs: Faq[] = [
  {
    q: '¿El presupuesto tiene algún compromiso?',
    a: '<p>No. Te damos el presupuesto y decides con calma. Si tienes otras ofertas, te ayudamos a compararlas.</p>',
  },
  {
    q: '¿Qué necesito para pedir presupuesto?',
    a: '<p>Una factura de luz reciente (mejor si es de invierno y de verano) y saber dónde quieres poner las placas. Con eso ya podemos darte una primera orientación.</p>',
  },
  {
    q: '¿Cómo os contacto si no puedo llamar ahora?',
    a: '<p>Escríbenos por WhatsApp al 641 49 55 13 o un email a info@lidaenergia.com con tu nombre, tu municipio y lo que necesitas, y te llamamos en horario laboral.</p>',
  },
];
const pasos = [
  ['Nos llamas o nos escribes', 'Con una factura de luz a mano te damos una orientación de potencia y precio.'],
  ['Visita técnica', 'Vemos el tejado, las sombras y el cuadro eléctrico.'],
  ['Presupuesto por escrito', 'Número de paneles, inversor, batería si compensa, trámites incluidos, plazos y ahorro estimado.'],
];

export default function Page() {
  return (
    <>
      <JsonLd breadcrumbs={[{ name: 'Presupuesto de placas solares', href: '/presupuesto-placas-solares/' }]} schema={[faqSchema(faqs)]} />
      <section className="pp" id="presupuesto">
        <div className="wrap pp__grid">
          <div>
            <p className="eyebrow">Presupuesto sin compromiso</p>
            <h1>Presupuesto de placas solares en Madrid</h1>
            <p className="subtitle">¿Quieres presupuesto para instalar paneles solares? Llámanos o escríbenos por WhatsApp. Hablas directamente con quien va a hacer la instalación.</p>
            <div className="pp__btns">
              <Button href={telHref} size="lg" icon="phone" ubicacion="presupuesto">Llamar al {SITE.phoneDisplay}</Button>
              <Button href={waHref()} size="lg" variant="outline" icon="whatsapp" ubicacion="presupuesto" external>Escribir por WhatsApp</Button>
            </div>
            <p className="pp__alt">También por email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
          <div className="pp__next">
            <h2>Cómo es el presupuesto de tus paneles solares</h2>
            <ol>
              {pasos.map(([t, d], i) => (
                <li key={t}><span className="pp__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div><h3>{t}</h3><p>{d}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} id="faq-presupuesto" surface="surface-white" title="Antes de pedir presupuesto." description="Compromiso, qué tener a mano y otras formas de contactar." />
      <Reviews />
    </>
  );
}
