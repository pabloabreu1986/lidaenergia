import { JsonLd, pageMetadata } from '@/lib/seo';
import { SITE } from '@/data/site';

export const metadata = pageMetadata({ title: 'Aviso legal | LIDA Energía', description: 'Aviso legal del sitio web de LIDA Energía S.L.', path: '/aviso-legal/', noindex: true });

// PENDIENTE: completar con los datos reales del cliente antes de publicar.
const CIF = '[CIF PENDIENTE]';
const DOMICILIO = '[DOMICILIO SOCIAL PENDIENTE]';
const REGISTRO = '[DATOS DEL REGISTRO MERCANTIL PENDIENTES]';

export default function Page() {
  return (
    <>
      <JsonLd />
      <section className="section surface-white">
        <div className="wrap prose legal">
          <h1>Aviso legal</h1>
          <h2>Titular del sitio web</h2>
          <p>En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de que este sitio web pertenece a:</p>
          <ul>
            <li>Razón social: {SITE.legalName}</li>
            <li>CIF: {CIF}</li>
            <li>Domicilio social: {DOMICILIO}</li>
            <li>Inscripción: {REGISTRO}</li>
            <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>Teléfono: {SITE.phoneDisplay}</li>
          </ul>
          <h2>Uso del sitio</h2>
          <p>El acceso a este sitio web es gratuito y atribuye la condición de usuario, que se compromete a hacer un uso adecuado de los contenidos conforme a la ley.</p>
          <h2>Propiedad intelectual</h2>
          <p>Los textos, fotografías y logotipos de este sitio web son propiedad de {SITE.legalName} o se usan con autorización. No se permite su reproducción sin consentimiento previo.</p>
          <h2>Responsabilidad</h2>
          <p>La información de esta web sobre ayudas, bonificaciones y precios es orientativa. Las condiciones definitivas se indican en cada presupuesto.</p>
          <h2>Ley aplicable</h2>
          <p>Este aviso legal se rige por la legislación española.</p>
        </div>
      </section>
    </>
  );
}
