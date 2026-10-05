import ServiceLayout from '@/components/ServiceLayout';
import Picture from '@/components/Picture';
import { pageMetadata, type Faq } from '@/lib/seo';
import { SITE, telHref } from '@/data/site';

export const metadata = pageMetadata({
  title: "Mantenimiento de Placas Solares en Madrid | LIDA Energía",
  description: "Revisión y mantenimiento de instalaciones de placas solares en Madrid, aunque no las hayamos montado nosotros. Inversores, conexiones, limpieza y averías.",
  path: '/mantenimiento-placas-solares/',
  ogImage: "tecnico-tejado-seguridad",
});

const faqs: Faq[] = [
  {
    q: '¿Cada cuánto hay que revisar una instalación de placas solares?',
    a: '<p>Recomendamos una revisión al año. Si notas que la producción baja de repente o el inversor muestra un error, conviene revisarla cuanto antes.</p>',
  },
  {
    q: '¿Revisáis instalaciones que no habéis montado vosotros?',
    a: '<p>Sí. Revisamos instalaciones aunque las haya montado otra empresa, por ejemplo si ya no te dan servicio o si la instalación no rinde como debería.</p>',
  },
  {
    q: '¿Hacéis también mantenimiento eléctrico general?',
    a: '<p>Sí: revisión de cuadros eléctricos, protecciones y adecuaciones a normativa en viviendas y empresas.</p>',
  },
];

const toc = [
  { href: '#revisamos', label: 'Qué revisamos' },
  { href: '#cuando', label: 'Cuándo llamarnos' },
];

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="Mantenimiento y averías · Madrid"
      h1="Mantenimiento y revisión de placas solares en Madrid"
      lead="Revisamos tu instalación fotovoltaica para que produzca lo que debe y sea segura, tanto si la montamos nosotros como si la hizo otra empresa."
      alt="Técnico con equipo de seguridad revisando una instalación en un tejado"
      slug="mantenimiento-placas-solares"
      crumb="Mantenimiento de placas solares"
      serviceName="Mantenimiento de instalaciones de placas solares"
      toc={toc}
      faqs={faqs}
      faqTitle="Preguntas sobre el mantenimiento de placas solares."
      ctaTitle="Cuéntanos qué le pasa a tu instalación."
      faqDescription="Frecuencia de revisión, instalaciones de otras empresas y mantenimiento eléctrico."
      origen="mantenimiento"
      image="tecnico-tejado-seguridad"
    >
      <h2 id="revisamos">Qué revisamos en tus placas solares</h2>
      <p className="lead-p">Una instalación mal hecha o sin mantenimiento produce menos energía, se avería antes y puede ser un riesgo.</p>
      <p>En la revisión comprobamos cada parte del sistema:</p>
      <ul>
        <li><strong>Paneles:</strong> suciedad, roturas, puntos calientes y orientación.</li>
        <li><strong>Estructura y anclajes:</strong> fijación al tejado y posibles filtraciones.</li>
        <li><strong>Cableado y conexiones:</strong> conectores sueltos, cables dañados o mal protegidos.</li>
        <li><strong>Inversor y batería:</strong> errores registrados, ventilación y actualizaciones.</li>
        <li><strong>Cuadro eléctrico y protecciones:</strong> que cumplan la normativa y funcionen.</li>
        <li><strong>Producción:</strong> comparamos lo que produce con lo que debería producir.</li>
      </ul>
      <figure className="wide">
        <Picture name="cuadro-electrico" preset="content" alt="Cuadro eléctrico con protecciones de una instalación fotovoltaica" sizes="(min-width: 64rem) 30rem, 100vw" className="img-tall" />
      </figure>

      <h2 id="cuando">Cuándo revisar tu instalación solar</h2>
      <ul>
        <li>Tu instalación produce menos que antes y no sabes por qué.</li>
        <li>El inversor muestra un error o se apaga.</li>
        <li>La empresa que te la instaló ya no responde.</li>
        <li>Quieres añadir una batería o más paneles.</li>
        <li>Hace más de un año que nadie la revisa.</li>
      </ul>
      <p>Llámanos al <a href={telHref} data-ubicacion="mantenimiento">{SITE.phoneDisplay}</a> y cuéntanos qué pasa. Si es posible, ten a mano una foto del inversor.</p>
    </ServiceLayout>
  );
}
