import { JsonLd, pageMetadata } from '@/lib/seo';
import { SITE } from '@/data/site';

export const metadata = pageMetadata({ title: 'Política de privacidad | LIDA Energía', description: 'Cómo trata LIDA Energía los datos personales que recibe a través de su web.', path: '/privacidad/', noindex: true });

// PENDIENTE: completar con los datos reales del cliente antes de publicar.
const CIF = '[CIF PENDIENTE]';
const DOMICILIO = '[DOMICILIO SOCIAL PENDIENTE]';

export default function Page() {
  return (
    <>
      <JsonLd />
      <section className="section surface-white">
        <div className="wrap prose legal">
          <h1>Política de privacidad</h1>
          <h2>Responsable del tratamiento</h2>
          <p>{SITE.legalName}, CIF {CIF}, con domicilio en {DOMICILIO}. Email de contacto: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          <h2>Qué datos recogemos y para qué</h2>
          <p>Cuando nos llamas, nos escribes por WhatsApp o nos envías un email, tratamos los datos que nos facilitas (nombre, teléfono, email, municipio y la información que quieras contarnos). Los usamos únicamente para atenderte y preparar tu presupuesto.</p>
          <h2>Base legal</h2>
          <p>La aplicación de medidas precontractuales a petición tuya y tu consentimiento al contactarnos.</p>
          <h2>Cuánto tiempo los guardamos</h2>
          <p>Mientras dure la relación comercial o hasta que nos pidas que los borremos. Si te haces cliente, los conservaremos durante los plazos que exige la ley.</p>
          <h2>Con quién los compartimos</h2>
          <p>No cedemos tus datos a terceros salvo obligación legal. El proveedor de alojamiento web y de correo electrónico trata los datos por cuenta nuestra.</p>
          <h2>Tus derechos</h2>
          <p>Puedes acceder, rectificar o suprimir tus datos, oponerte a su tratamiento, limitarlo o pedir su portabilidad escribiendo a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Si no estás conforme con nuestra respuesta, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>
          <h2>Cookies</h2>
          <p>Esta web no usa cookies de seguimiento ni de publicidad. Si en el futuro se instalan herramientas de analítica que las usen, se pedirá tu consentimiento previamente.</p>
        </div>
      </section>
    </>
  );
}
