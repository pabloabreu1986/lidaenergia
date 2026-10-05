// Bloque de FAQ independiente: encabezado + acordeón (port Spectrum UI). Dos columnas en escritorio.
import SectionHeading from './SectionHeading';
import Accordion from './ui/Accordion';
import type { Faq } from '@/lib/seo';

interface Props { items: Faq[]; id: string; eyebrow?: string; title?: string; description?: string; surface?: string }

export default function FaqSection({
  items, id,
  eyebrow = 'Antes de decidir',
  title = 'Las dudas, claras.',
  description = 'Coste, baterías, trámites y plazos: lo que conviene saber antes de instalar.',
  surface = '',
}: Props) {
  return (
    <section className={['section', surface].filter(Boolean).join(' ')} aria-labelledby={`${id}-h`}>
      <div className="wrap faq">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} id={`${id}-h`} className="faq__head" />
        <Accordion items={items} id={id} />
      </div>
    </section>
  );
}
