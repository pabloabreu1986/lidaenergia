import Icon from './Icon';
import { telHref, waHref } from '@/data/site';

export default function CallBar() {
  return (
    <div className="callbar" role="region" aria-label="Contacto rápido">
      <a className="callbar__btn callbar__btn--tel" href={telHref} data-ubicacion="barra-movil">
        <Icon name="phone" /> Llamar ahora
      </a>
      <a className="callbar__btn callbar__btn--wa" href={waHref()} data-ubicacion="barra-movil" rel="noopener" target="_blank">
        <Icon name="whatsapp" /> WhatsApp
      </a>
    </div>
  );
}
