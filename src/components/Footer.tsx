import { FOOTER_LINKS, SITE, telHref, waHref } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap ftr__grid">
        <div className="ftr__brand">
          <p className="ftr__name">{SITE.name}</p>
          <p>Instalación de placas solares, baterías y cargadores de coche eléctrico en Madrid.</p>
        </div>
        <nav aria-label="Pie de página">
          <p className="ftr__h">Web</p>
          <ul>{FOOTER_LINKS.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <p className="ftr__h">Contacto</p>
          <ul>
            <li><a href={telHref} data-ubicacion="pie">{SITE.phoneDisplay}</a></li>
            <li><a href={waHref()} rel="noopener" target="_blank" data-ubicacion="pie">WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="ftr__txt">{SITE.hours}</li>
          </ul>
        </div>
        <div>
          <p className="ftr__h">Síguenos</p>
          <ul>
            <li><a href={SITE.googleMaps} rel="noopener" target="_blank">Reseñas en Google</a></li>
            <li><a href={SITE.instagram} rel="noopener" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap ftr__legal">
        <p>© {year} {SITE.legalName}</p>
        <p className="ftr__links"><a href="/aviso-legal/">Aviso legal</a><a href="/privacidad/">Privacidad</a></p>
      </div>
    </footer>
  );
}
