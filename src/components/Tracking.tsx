'use client';
// Medición de clics en llamar / WhatsApp (se envía a GA4 si se instala gtag o GTM).
import { useEffect } from 'react';

export default function Tracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const type = href.startsWith('tel:') ? 'click_llamar' : href.includes('wa.me/') ? 'click_whatsapp' : '';
      if (!type) return;
      const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
      const ubicacion = a.dataset.ubicacion || 'otro';
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: type, ubicacion });
      if (typeof w.gtag === 'function') w.gtag('event', type, { ubicacion });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
