import ServiceLayout from '@/components/ServiceLayout';
import { pageMetadata, type Faq } from '@/lib/seo';
import { SITE, telHref } from '@/data/site';

export const metadata = pageMetadata({
  title: "Cargadores de Coche Eléctrico en Madrid | LIDA Energía",
  description: "Instalamos cargadores de coche eléctrico en garajes de viviendas, comunidades y empresas de Madrid, también conectados a placas solares. Llama al 641 49 55 13.",
  path: '/cargadores-coche-electrico/',
  ogImage: "cargador-coche-garaje",
});

const faqs: Faq[] = [
  {
    q: '¿Puedo instalar un cargador en el garaje de mi comunidad?',
    a: '<p>Sí. La ley permite instalar un punto de recarga en tu plaza de garaje comunitario: solo hay que comunicarlo previamente a la comunidad, no necesitas su aprobación. Nosotros nos encargamos de la parte técnica y te orientamos con la comunicación.</p>',
  },
  {
    q: '¿Puedo cargar el coche con mis placas solares?',
    a: '<p>Sí. Con un cargador compatible, el coche puede cargarse con la energía que producen tus placas durante el día, y solo tirar de la red cuando no hay sol.</p>',
  },
  {
    q: '¿Hace falta aumentar la potencia contratada?',
    a: '<p>No siempre. Muchos cargadores regulan la potencia automáticamente según lo que se está consumiendo en casa. Lo revisamos en la visita.</p>',
  },
];

const toc = [
  { href: '#donde', label: 'Dónde instalamos' },
  { href: '#con-placas', label: 'Cargador y placas' },
  { href: '#incluye', label: 'Qué incluye' },
];

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="Recarga de vehículo eléctrico · Madrid"
      h1="Instalación de cargadores de coche eléctrico en Madrid"
      lead="En casa, en el garaje de tu comunidad o en tu empresa. Y si tienes placas solares, cargas el coche con tu propia energía."
      alt="Cargador de coche eléctrico instalado en la pared de un garaje"
      slug="cargadores-coche-electrico"
      crumb="Cargadores de coche eléctrico"
      serviceName="Instalación de cargadores de coche eléctrico"
      toc={toc}
      faqs={faqs}
      faqTitle="Preguntas sobre cargadores de coche eléctrico."
      ctaTitle="Pide presupuesto para tu cargador."
      faqDescription="Garajes comunitarios, potencia contratada y carga con placas."
      origen="cargadores"
      image="cargador-coche-garaje"
    >
      <h2 id="donde">Dónde instalamos cargadores de coche eléctrico</h2>
      <h3>En tu vivienda</h3>
      <p>En el garaje o en la entrada del chalet. Es la forma más cómoda y barata de cargar: el coche se carga por la noche o mientras producen tus placas.</p>
      <h3>En el garaje de tu comunidad</h3>
      <p>Llevamos la línea desde tu contador hasta tu plaza o instalamos una solución de recarga para varios vecinos.</p>
      <h3>En tu empresa</h3>
      <p>Puntos de recarga para la flota, para empleados o para clientes. Combinados con <a href="/placas-solares-empresas/">placas solares para empresas</a>, reducen el coste de cada kilómetro.</p>

      <h2 id="con-placas">Cargador y placas solares: la mejor combinación</h2>
      <p>Un coche eléctrico es uno de los mayores consumos de una casa. Si lo cargas con la energía que producen tus placas, ese consumo te sale mucho más barato que cargarlo con la luz de la red. Diseñamos la instalación de autoconsumo teniendo en cuenta el coche para que la potencia sea la adecuada. Más información sobre la <a href="/instalacion-placas-solares-madrid/">instalación de placas solares en Madrid</a>.</p>

      <h2 id="incluye">Qué incluye la instalación</h2>
      <ul>
        <li>Visita para revisar el cuadro eléctrico, la potencia contratada y el recorrido del cable.</li>
        <li>Asesoramiento para elegir el cargador según tu coche y tu uso.</li>
        <li>Línea eléctrica con sus protecciones, conforme a la normativa de baja tensión.</li>
        <li>Montaje, configuración y prueba de carga.</li>
        <li>Certificado de la instalación.</li>
      </ul>
      <p>Llámanos al <a href={telHref} data-ubicacion="cargadores">{SITE.phoneDisplay}</a> y te decimos qué necesitas.</p>
    </ServiceLayout>
  );
}
