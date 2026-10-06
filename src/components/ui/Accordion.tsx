'use client';
/*
 * Port a React/Next de "Accordion Ghost" de Spectrum UI (Arihant Jain).
 * Fuente: https://ui.spectrumhq.in/r/accordion-ghost.json (uso) y
 *         https://ui.spectrumhq.in/r/accordion-dependencies.json (app/registry/spectrumui/accordion.tsx)
 * Licencia: Apache License 2.0 — https://github.com/arihantcodes/spectrum-ui
 *           (texto completo en docs/21st-sources/LICENSE-spectrumui-Apache-2.0.txt).
 * Modificaciones (Apache-2.0 §4b): reescrito sin Radix. Se conserva el patrón ghost: numeración
 * 01/02/…, indicador "plus" que rota y pierde el trazo vertical al abrir, type="single" collapsible,
 * botón dentro de encabezado, región con aria-labelledby. El contenido está en el HTML
 * (hidden="until-found") para que sea indexable y encontrable con la búsqueda del navegador.
 */
import { useEffect, useRef, useState } from 'react';
import { htmlWithBase } from '@/lib/base';

interface Item { q: string; a: string }
interface Props { items: Item[]; id: string; headingLevel?: 'h3' | 'h4' }

export default function Accordion({ items, id, headingLevel = 'h3' }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const H = headingLevel;

  // Si la búsqueda del navegador revela un panel (hidden="until-found"), sincronizar el estado.
  useEffect(() => {
    const offs = panels.current.map((el, i) => {
      if (!el) return () => {};
      const on = () => setOpen(i);
      el.addEventListener('beforematch', on);
      return () => el.removeEventListener('beforematch', on);
    });
    return () => offs.forEach((off) => off());
  }, []);

  return (
    <div className="acc" data-accordion data-type="single" id={id}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className="acc__item" data-state={isOpen ? 'open' : 'closed'} key={i}>
            <H className="acc__h">
              <button
                type="button"
                className="acc__trigger"
                id={`${id}-t${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                data-accordion-trigger=""
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="acc__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="acc__q">{it.q}</span>
                <span className="acc__plus" aria-hidden="true"><span /><span /></span>
              </button>
            </H>
            <div
              className="acc__panel"
              id={`${id}-p${i}`}
              role="region"
              aria-labelledby={`${id}-t${i}`}
              ref={(el) => { panels.current[i] = el; }}
              // React 19 admite hidden="until-found"; el contenido sigue en el HTML.
              hidden={isOpen ? undefined : ('until-found' as unknown as boolean)}
            >
              <div className="acc__body" dangerouslySetInnerHTML={{ __html: htmlWithBase(it.a) }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
