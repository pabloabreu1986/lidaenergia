import ServiceLayout from '@/components/ServiceLayout';
import Picture from '@/components/Picture';
import { pageMetadata, type Faq } from '@/lib/seo';
import { SITE, telHref } from '@/data/site';

export const metadata = pageMetadata({
  title: "Instalación de Placas Solares en Madrid: Precio y Ayudas | LIDA",
  description: "Instalamos placas solares en viviendas y comunidades de Madrid: estudio, permisos, montaje, baterías y legalización. Te explicamos precio, ayudas y ahorro.",
  path: '/instalacion-placas-solares-madrid/',
  ogImage: "tejado-placas-vivienda",
});

const faqs: Faq[] = [
  {
    q: '¿Cuántas placas solares necesito para mi casa?',
    a: '<p>Depende de lo que consumes al año y de cuándo lo consumes. Una vivienda unifamiliar media suele necesitar entre 6 y 12 paneles, pero lo calculamos con tus facturas reales para no quedarnos cortos ni pasarnos.</p>',
  },
  {
    q: '¿Mi tejado sirve para poner placas?',
    a: '<p>Casi todos los tejados sirven: de teja, de chapa o azoteas planas. Lo que más influye es la orientación y las sombras. En la visita técnica lo comprobamos y, si no compensa, te lo decimos.</p>',
  },
  {
    q: '¿Puedo poner placas solares en una comunidad de vecinos?',
    a: '<p>Sí. Se puede hacer una instalación para las zonas comunes o un autoconsumo compartido entre varios vecinos. Necesita acuerdo de la comunidad; te preparamos la información para presentarla en la junta.</p>',
  },
  {
    q: '¿Qué pasa con la energía que no consumo?',
    a: '<p>Con la compensación simplificada de excedentes, la energía que sobra se vierte a la red y tu comercializadora te la descuenta en la factura. Si prefieres aprovecharla tú, la opción es una batería.</p>',
  },
  {
    q: '¿Qué mantenimiento necesitan las placas?',
    a: '<p>Muy poco: una revisión periódica del inversor y las conexiones, y limpiar los paneles si se acumula suciedad. También ofrecemos <a href="/mantenimiento-placas-solares/">mantenimiento de instalaciones solares</a>.</p>',
  },
];

const toc = [
  { href: '#incluye', label: 'Qué incluye' },
  { href: '#paneles', label: 'Placas o paneles solares' },
  { href: '#viviendas', label: 'Para qué viviendas' },
  { href: '#baterias', label: 'Baterías solares' },
  { href: '#precio', label: 'Cuánto cuesta' },
  { href: '#ayudas', label: 'Ayudas en Madrid' },
  { href: '#tramites', label: 'Permisos y legalización' },
  { href: '#plazos', label: 'Plazos' },
];

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="Placas solares para viviendas · Madrid"
      h1="Instalación de placas solares en Madrid"
      lead="Para tu casa, chalet o comunidad de vecinos. Nos ocupamos de todo el papeleo y hablas siempre con el mismo equipo, de la primera llamada a la legalización."
      alt="Paneles solares instalados en el tejado de una vivienda unifamiliar en Madrid"
      slug="instalacion-placas-solares-madrid"
      crumb="Instalación de placas solares en Madrid"
      serviceName="Instalación de placas solares en Madrid"
      serviceType="Instalación de placas solares fotovoltaicas para autoconsumo"
      toc={toc}
      faqs={faqs}
      faqTitle="Preguntas sobre la instalación de placas solares."
      ctaTitle="Pide presupuesto para tus placas solares."
      faqDescription="Tejado, número de paneles, comunidades y excedentes: lo que más nos preguntan."
      origen="instalacion"
      image="tejado-placas-vivienda"
    >
      <h2 id="incluye">Qué incluye nuestra instalación de placas solares</h2>
      <p className="lead-p">Cuando nos encargas una instalación de autoconsumo en Madrid no compras solo paneles: te entregamos la instalación funcionando y legalizada.</p>
      <ul>
        <li><strong>Estudio de consumo.</strong> Revisamos tus facturas para saber cuánta energía usas y en qué horas.</li>
        <li><strong>Visita técnica.</strong> Comprobamos el tejado, la orientación, las sombras, la estructura y el cuadro eléctrico.</li>
        <li><strong>Diseño a medida.</strong> Elegimos el número de paneles, el inversor y, si te conviene, la batería.</li>
        <li><strong>Permisos municipales.</strong> Preparamos y presentamos la licencia o la comunicación previa en tu ayuntamiento.</li>
        <li><strong>Montaje.</strong> Estructura, paneles, inversor, protecciones eléctricas y cableado, con medidas de seguridad en cubierta.</li>
        <li><strong>Legalización.</strong> Certificado de la instalación, registro de autoconsumo y alta de la compensación de excedentes con tu comercializadora.</li>
        <li><strong>Seguimiento.</strong> Te enseñamos a ver la producción desde el móvil y seguimos disponibles si algo falla.</li>
      </ul>

      <h2 id="paneles">Placas solares o paneles solares: qué instalamos</h2>
      <p>Placas solares y paneles solares son lo mismo: módulos fotovoltaicos que convierten la luz del sol en electricidad. En una instalación de autoconsumo en Madrid los paneles van conectados a un <strong>inversor</strong>, que transforma esa energía en la corriente que usan tus enchufes, y opcionalmente a una <strong>batería</strong>. Trabajamos con paneles monocristalinos de alto rendimiento, que aprovechan bien los tejados pequeños y las horas de sol de Madrid.</p>

      <h2 id="viviendas">Placas solares para cada tipo de vivienda</h2>
      <h3>Chalets, adosados y viviendas unifamiliares</h3>
      <p>Es el caso más habitual. Con tejado propio, la instalación es sencilla y el ahorro se nota desde el primer mes. Trabajamos sobre teja, chapa, azoteas planas y también sobre <strong>marquesinas solares</strong> para el jardín o el aparcamiento cuando el tejado no tiene buena orientación.</p>
      <figure className="wide">
        <Picture name="marquesina-solar" preset="content" alt="Marquesina solar con paneles fotovoltaicos sobre una zona de aparcamiento" sizes="(min-width: 64rem) 52rem, 100vw" />
        <figcaption>Marquesina solar instalada por LIDA Energía: aparcamiento a la sombra y producción de energía.</figcaption>
      </figure>
      <h3>Comunidades de vecinos</h3>
      <p>Una instalación en la cubierta del edificio puede abastecer las zonas comunes (ascensor, iluminación, garaje) o repartirse entre varios vecinos con autoconsumo compartido. Te ayudamos a preparar la propuesta para la junta de la comunidad.</p>
      <h3>Empresas y naves</h3>
      <p>Si lo que buscas es reducir la factura de un negocio, mira nuestra página de <a href="/placas-solares-empresas/">placas solares para empresas</a>.</p>

      <h2 id="baterias">Baterías solares: cuándo compensan</h2>
      <p>Las placas producen de día. Si en tu casa se consume mucho por la tarde y por la noche, una batería guarda lo que sobra a mediodía para usarlo después. Así compras menos energía a la red.</p>
      <figure className="wide">
        <Picture name="inversores-baterias" preset="content" alt="Dos inversores y baterías solares instalados en un cuarto técnico de una vivienda" sizes="(min-width: 64rem) 32rem, 100vw" className="img-sq" />
      </figure>
      <p>No siempre compensa. Si alguien está en casa durante el día, o si tu consumo es bajo, la compensación de excedentes puede ser suficiente. Lo calculamos con tus facturas y te damos los números con y sin batería para que decidas tú. Si ya tienes placas, también podemos añadir una batería a tu instalación actual.</p>

      <h2 id="precio">¿Cuánto cuesta instalar placas solares en Madrid?</h2>
      <p>No damos un precio cerrado sin ver la vivienda, porque cambia mucho de un caso a otro. Estos son los factores que más influyen:</p>
      <table>
        <thead><tr><th>Factor</th><th>Por qué cambia el precio</th></tr></thead>
        <tbody>
          <tr><td>Potencia (número de paneles)</td><td>Se calcula según tu consumo anual. A más paneles, más coste total, pero menor coste por kWh producido.</td></tr>
          <tr><td>Batería</td><td>Es la parte que más encarece la instalación. Por eso solo la recomendamos cuando compensa.</td></tr>
          <tr><td>Tipo de cubierta</td><td>Teja, chapa, azotea plana o marquesina necesitan estructuras distintas.</td></tr>
          <tr><td>Estado del cuadro eléctrico</td><td>A veces hay que adaptarlo para cumplir la normativa.</td></tr>
          <tr><td>Extras</td><td>Cargador de coche eléctrico, monitorización avanzada, gestión de excedentes.</td></tr>
        </tbody>
      </table>
      <p>Llámanos al <a href={telHref} data-ubicacion="precio">{SITE.phoneDisplay}</a> con una factura de luz a mano y te damos una primera orientación de precio en la misma llamada. Después, la visita técnica sirve para cerrar el presupuesto.</p>

      <h2 id="ayudas">Ayudas y bonificaciones para placas solares en Madrid</h2>
      <p>Además del ahorro en la factura, en la Comunidad de Madrid hay varias formas de recuperar parte de la inversión:</p>
      <ul>
        <li><strong>Bonificación del IBI.</strong> Muchos ayuntamientos rebajan el IBI durante varios años a las viviendas con autoconsumo. El porcentaje y la duración dependen de cada municipio.</li>
        <li><strong>Bonificación del ICIO.</strong> Algunos municipios reducen el impuesto de construcciones que se paga al pedir el permiso de obra.</li>
        <li><strong>Deducciones en el IRPF.</strong> Cuando están en vigor, permiten deducir parte de la inversión en obras de mejora de eficiencia energética.</li>
        <li><strong>Compensación de excedentes.</strong> La energía que no usas se descuenta de tu factura cada mes.</li>
      </ul>
      <p>Las ayudas cambian con frecuencia. Antes de firmar te decimos cuáles se aplican en tu municipio y en tu caso, y te ayudamos con la documentación.</p>

      <h2 id="tramites">Permisos y legalización de tu instalación solar</h2>
      <p>Una instalación de placas solares en Madrid necesita varios trámites. Los gestionamos todos:</p>
      <ol>
        <li>Licencia de obra o declaración responsable ante el ayuntamiento, según el municipio.</li>
        <li>Certificado de instalación eléctrica firmado por instalador autorizado.</li>
        <li>Inscripción en el registro de autoconsumo de la Comunidad de Madrid.</li>
        <li>Alta de la compensación de excedentes con tu distribuidora y tu comercializadora.</li>
      </ol>

      <h2 id="plazos">¿Cuánto se tarda en instalar placas solares?</h2>
      <p>El montaje en una vivienda suele llevar entre uno y tres días. Lo que más tarda son los permisos del ayuntamiento y la activación de la compensación, que dependen de cada administración y de la distribuidora. Con el presupuesto te damos un calendario realista.</p>
    </ServiceLayout>
  );
}
