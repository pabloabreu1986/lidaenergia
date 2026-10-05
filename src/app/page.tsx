import Button from '@/components/ui/Button';
import SectionHeading from '@/components/SectionHeading';
import Reviews from '@/components/Reviews';
import FaqSection from '@/components/FaqSection';
import CtaBand from '@/components/CtaBand';
import Picture from '@/components/Picture';
import { Stars } from '@/components/Icon';
import { JsonLd, faqSchema, pageMetadata, type Faq } from '@/lib/seo';
import { SITE, telHref } from '@/data/site';

export const metadata = pageMetadata({
  title: 'Instalación de Placas Solares en Madrid | LIDA Energía',
  description: 'Instaladores de placas solares en Madrid con trato directo y sin comerciales. Baterías, cargadores y legalización. 5,0★ en Google. Llama al 641 49 55 13.',
  path: '/',
  ogImage: 'placas-tejado-teja',
});

const fases = [
  {
    n: '01',
    title: 'Estudiamos tu caso',
    steps: [
      ['Primera llamada', 'Nos cuentas qué quieres, dónde está la vivienda y cuánto pagas de luz. Te orientamos desde el primer momento.'],
      ['Visita técnica', 'Vemos el tejado, la orientación, las sombras y el cuadro eléctrico para que el presupuesto sea real.'],
    ],
  },
  {
    n: '02',
    title: 'Preparamos la instalación',
    steps: [
      ['Presupuesto cerrado', 'Cuántos paneles necesitas, si te conviene batería y qué ahorro puedes esperar.'],
      ['Permisos', 'Licencia o comunicación al ayuntamiento y documentación técnica: nos ocupamos nosotros.'],
    ],
  },
  {
    n: '03',
    title: 'Lo ponemos en marcha',
    steps: [
      ['Instalación', 'Paneles, inversor y, si los hay, batería y cargador, con todas las medidas de seguridad.'],
      ['Legalización', 'Registro de autoconsumo y compensación de excedentes para que empieces a ahorrar.'],
    ],
  },
];

const faqs: Faq[] = [
  {
    q: '¿Cuánto cuesta instalar placas solares en Madrid?',
    a: '<p>Depende sobre todo de tu consumo, del número de paneles, de si añades batería y del tipo de tejado. Por eso hacemos una visita antes de dar precio. Llámanos al <a href="tel:+34641495513" data-ubicacion="faq">641 49 55 13</a> y te damos una primera orientación por teléfono.</p>',
  },
  {
    q: '¿Hay ayudas o bonificaciones para poner placas solares en Madrid?',
    a: '<p>Sí. Muchos ayuntamientos de la Comunidad de Madrid bonifican el IBI y el ICIO a las viviendas que instalan autoconsumo; el porcentaje y los años cambian de un municipio a otro. También pueden aplicarse deducciones en el IRPF cuando están en vigor. Te decimos cuáles corresponden a tu caso y te ayudamos con los papeles.</p>',
  },
  {
    q: '¿Necesito batería?',
    a: '<p>No siempre. Si en casa consumís mucho por la tarde y por la noche, una batería suele compensar. Si el consumo es sobre todo de día, quizá no. Lo vemos con tus facturas antes de recomendarte nada.</p>',
  },
  {
    q: '¿Cuánto tarda todo el proceso?',
    a: '<p>El montaje en una vivienda suele hacerse en pocos días. Lo que más tiempo lleva son los permisos del ayuntamiento y la legalización, que dependen de cada administración. Te damos el calendario por escrito con el presupuesto.</p>',
  },
  {
    q: '¿Trabajáis fuera de Madrid capital?',
    a: '<p>Sí, trabajamos en Madrid y en la Comunidad de Madrid. Llámanos y te confirmamos si llegamos a tu municipio.</p>',
  },
];

const webSite = { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: `${SITE.url}/`, inLanguage: 'es-ES' };

export default function Home() {
  return (
    <>
      <JsonLd schema={[webSite, faqSchema(faqs)]} />
      <section className="hero" data-hero>
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1 className="display hero__h1"><span className="eyebrow">Instalación de placas solares en Madrid</span> <span className="hero__slogan">Tu tejado puede darte más.</span></h1>
            <p className="subtitle">Instalamos placas solares y baterías en tu casa o tu empresa. Hablas directamente con el equipo que estudia tu caso y realiza la instalación.</p>
            <div className="hero__actions">
              <Button href={telHref} size="lg" icon="phone" ubicacion="hero">Hablar de mi instalación</Button>
              <Button href="#presupuesto" size="lg" variant="link">Pedir presupuesto</Button>
            </div>
            <a className="hero__proof" href={SITE.googleMaps} rel="noopener" target="_blank">
              <Stars className="hero__stars" />
              <span><strong>{SITE.rating}</strong> en Google · {SITE.reviewCount} reseñas</span>
            </a>
          </div>
          <figure className="hero__media">
            <Picture name="placas-tejado-teja" preset="hero" alt="Placas solares instaladas por LIDA Energía sobre un tejado de teja, con la sierra al fondo" sizes="(min-width: 64rem) 40vw, 100vw" priority />
          </figure>
        </div>
      </section>

      <section className="section surface-white" id="soluciones" aria-labelledby="sol-h">
        <div className="wrap">
          <SectionHeading eyebrow="Soluciones" title="Placas solares para tu casa o tu empresa." description="Paneles, baterías y recarga del coche eléctrico, según lo que necesitas." id="sol-h" />
          <div className="sol">
            <a className="sol__main" href="/instalacion-placas-solares-madrid/">
              <Picture name="tejado-placas-vivienda" preset="card" alt="Paneles solares instalados en el tejado de una vivienda unifamiliar" sizes="(min-width: 64rem) 45vw, 100vw" />
              <div className="sol__body">
                <h3>Placas solares para tu casa</h3>
                <span className="sol__txt">Instalación de placas solares en Madrid para chalets, adosados y comunidades de vecinos, diseñada con tu consumo real.</span>
                <span className="sol__more">Ver instalación para viviendas</span>
              </div>
            </a>
            <a className="sol__second" href="/placas-solares-empresas/">
              <Picture name="placas-cubierta-nave" preset="card" alt="Placas solares en la cubierta metálica de una nave" sizes="(min-width: 64rem) 40vw, 100vw" />
              <div className="sol__body">
                <h3>Placas solares para empresas</h3>
                <span className="sol__txt">Naves, oficinas y comercios: consumen de día, cuando más producen las placas.</span>
                <span className="sol__more">Ver soluciones para empresas</span>
              </div>
            </a>
            <ul className="sol__minor">
              <li>
                <a href="/instalacion-placas-solares-madrid/#baterias">
                  <Picture name="inversores-baterias" preset="thumb" alt="Inversores y baterías solares en un cuarto técnico" sizes="7rem" />
                  <div><h3>Baterías solares</h3><span className="sol__txt">Guarda la energía del mediodía para la noche.</span></div>
                </a>
              </li>
              <li>
                <a href="/cargadores-coche-electrico/">
                  <Picture name="cargador-coche-garaje" preset="thumb" alt="Cargador de coche eléctrico en la pared de un garaje" sizes="7rem" />
                  <div><h3>Cargadores de coche eléctrico</h3><span className="sol__txt">Carga en casa, también con tus placas.</span></div>
                </a>
              </li>
            </ul>
          </div>
          <a className="sol__row" href="/mantenimiento-placas-solares/">
            <span><strong>¿Ya tienes placas?</strong> Mantenimiento y revisión de instalaciones solares, aunque no las hayamos montado nosotros.</span>
            <span className="sol__more">Ver mantenimiento</span>
          </a>
        </div>
      </section>

      <section className="section" id="proceso" aria-labelledby="proc-h">
        <div className="wrap">
          <SectionHeading eyebrow="De la primera llamada a la puesta en marcha" title="Así es la instalación de tus paneles solares." description="Sabes qué viene después: estudiamos tu caso, preparamos la instalación y nos ocupamos de los trámites." id="proc-h" />
          <ol className="fases">
            {fases.map((f) => (
              <li className="fase" key={f.n}>
                <span className="fase__n" aria-hidden="true">{f.n}</span>
                <h3>{f.title}</h3>
                <dl>
                  {f.steps.map(([t, d]) => (<div key={t}><dt>{t}</dt><dd>{d}</dd></div>))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section surface-white" aria-labelledby="trato-h">
        <div className="wrap trato">
          <figure className="trato__media">
            <Picture name="tecnico-tejado-seguridad" preset="content" alt="Técnico de LIDA Energía con arnés de seguridad trabajando en un tejado" sizes="(min-width: 64rem) 50vw, 100vw" />
          </figure>
          <div className="trato__text">
            <SectionHeading eyebrow="Trato directo" title="Habla con quien va a instalarlo." description="David y su equipo estudian tu consumo y tu tejado para proponerte una instalación a medida." id="trato-h" />
            <div className="trato__args">
              <div><h3>Sin intermediarios</h3><p>Sin comerciales que prometen y desaparecen: desde la primera llamada hablas con quien hace el trabajo.</p></div>
              <div><h3>Del permiso a la puesta en marcha</h3><p>Licencias, legalización, compensación de excedentes y ayudas: el papeleo es cosa nuestra.</p></div>
              <div><h3>Seguridad en cubierta</h3><p>Trabajamos en tejados con equipos de protección y protocolos de seguridad.</p></div>
            </div>
            <Button href="/sobre-nosotros/" variant="link">Conoce quiénes somos</Button>
          </div>
        </div>
      </section>

      <Reviews />

      <FaqSection items={faqs} id="faq-inicio" title="Preguntas sobre placas solares en Madrid." />

      <CtaBand ubicacion="cierre-portada" id="presupuesto" title="Pide presupuesto para tus paneles solares." />
    </>
  );
}
