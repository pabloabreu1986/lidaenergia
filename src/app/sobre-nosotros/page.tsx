import Reviews from '@/components/Reviews';
import CtaBand from '@/components/CtaBand';
import Picture from '@/components/Picture';
import { JsonLd, pageMetadata } from '@/lib/seo';
import { SITE } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Quiénes Somos: Instaladores Solares en Madrid | LIDA Energía',
  description: 'LIDA Energía es una empresa de instalaciones solares de Madrid dirigida por David Fernández. Trato directo, sin comerciales y con 5,0★ en Google.',
  path: '/sobre-nosotros/',
  ogImage: 'tecnico-tejado-seguridad',
});

export default function Page() {
  return (
    <>
      <JsonLd
        breadcrumbs={[{ name: 'Quiénes somos', href: '/sobre-nosotros/' }]}
        schema={[{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'Quiénes somos | LIDA Energía', about: { '@id': `${SITE.url}/#empresa` } }]}
      />
      <section className="ab">
        <div className="wrap ab__grid">
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h1>Instaladores solares en Madrid, con trato directo.</h1>
            <p className="subtitle">LIDA Energía es una empresa de Madrid dedicada a las instalaciones de energía solar, los cargadores de coche eléctrico y el mantenimiento eléctrico.</p>
          </div>
          <figure className="ab__media">
            <Picture name="tecnico-tejado-seguridad" preset="content" alt="Técnico de LIDA Energía con arnés trabajando en un tejado" sizes="(min-width: 64rem) 42vw, 100vw" priority />
          </figure>
        </div>
      </section>

      <section className="section surface-white">
        <div className="wrap ab__story">
          <div className="prose">
            <h2>De la primera llamada a la puesta en marcha</h2>
            <p>Detrás de LIDA está <strong>{SITE.founder}</strong> y su equipo. Desde el principio nos propusimos trabajar de otra manera: sin comerciales que prometen y desaparecen, con presupuestos claros y hablando siempre con quien va a hacer la instalación. Es lo que más repiten nuestros clientes en sus reseñas.</p>
            <p>Trabajamos en Madrid y en la Comunidad de Madrid, para particulares, comunidades de vecinos y empresas.</p>
            <p><a href={SITE.linkedinFounder} rel="noopener" target="_blank">{SITE.founder} en LinkedIn</a></p>
          </div>
          <dl className="ab__vals">
            <div><dt>Calidad</dt><dd>Planificamos cada instalación con cuidado y usamos equipos de primeras marcas para que funcione bien durante años.</dd></div>
            <div><dt>Seriedad</dt><dd>Cumplimos los plazos que acordamos y te explicamos cada paso, desde la primera consulta hasta la puesta en marcha.</dd></div>
            <div><dt>Seguridad</dt><dd>Trabajamos en tejados con equipos de protección y protocolos estrictos, para proteger a nuestro equipo, a tu familia y tu vivienda.</dd></div>
          </dl>
        </div>
        <div className="wrap">
          <figure className="ab__wide">
            <Picture name="placas-tejado-teja" preset="content" alt="Placas solares instaladas por LIDA Energía en un tejado de teja" sizes="(min-width: 80rem) 76rem, 100vw" />
          </figure>
        </div>
      </section>
      <Reviews />
      <CtaBand ubicacion="cierre-nosotros" id="presupuesto" />
    </>
  );
}
