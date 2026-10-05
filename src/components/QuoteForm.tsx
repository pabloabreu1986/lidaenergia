'use client';
// Formulario de presupuesto. DESACTIVADO por decisión del cliente (05/10/2026): no se usa en ninguna página.
// Para reactivarlo: ver README ("Formulario"). Campos e input portados de shadcn/ui (clase .input, ui.css).
// Contrato con server/enviar.php: nombre, telefono, municipio, tipo, mensaje, privacidad, origen, web (honeypot).
import { useEffect, useState, type FormEvent } from 'react';
import { SITE } from '@/data/site';

export default function QuoteForm({ id = 'presupuesto-form', origen = 'web' }: { id?: string; origen?: string }) {
  const [status, setStatus] = useState('');
  useEffect(() => {
    if (new URLSearchParams(location.search).has('error')) {
      setStatus('No hemos podido enviar tu solicitud. Revisa que el nombre, el teléfono y el municipio estén completos, o llámanos.');
    }
  }, []);

  // Sin endpoint configurado, el formulario abre WhatsApp con los datos.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (SITE.formEndpoint) return;
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const txt = `Hola, quiero un presupuesto.\nNombre: ${d.get('nombre')}\nTeléfono: ${d.get('telefono')}\nMunicipio: ${d.get('municipio')}\nTipo: ${d.get('tipo')}\n${d.get('mensaje') || ''}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(txt)}`, '_blank', 'noopener');
  };

  return (
    <form className="qf" id={id} method="post" action={SITE.formEndpoint || '#'} onSubmit={onSubmit}>
      <input type="hidden" name="origen" value={origen} />
      <div className="qf__hp" aria-hidden="true">
        <label>No rellenar <input type="text" name="web" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="qf__row">
        <label htmlFor={`${id}-nombre`}>Nombre</label>
        <input className="input" id={`${id}-nombre`} name="nombre" type="text" autoComplete="name" required />
      </div>
      <div className="qf__row">
        <label htmlFor={`${id}-tel`}>Teléfono</label>
        <input className="input" id={`${id}-tel`} name="telefono" type="tel" autoComplete="tel" inputMode="tel" required pattern="[0-9 +()\-]{9,}" />
      </div>
      <div className="qf__row">
        <label htmlFor={`${id}-muni`}>Municipio</label>
        <input className="input" id={`${id}-muni`} name="municipio" type="text" autoComplete="address-level2" placeholder="Ej.: Madrid, Alcobendas…" required />
      </div>
      <div className="qf__row">
        <label htmlFor={`${id}-tipo`}>¿Qué necesitas?</label>
        <select className="input" id={`${id}-tipo`} name="tipo">
          <option>Placas solares para vivienda</option>
          <option>Placas solares para comunidad de vecinos</option>
          <option>Placas solares para empresa o nave</option>
          <option>Cargador de coche eléctrico</option>
          <option>Mantenimiento o revisión</option>
        </select>
      </div>
      <div className="qf__row">
        <label htmlFor={`${id}-msg`}>Cuéntanos algo más <span>(opcional)</span></label>
        <textarea className="input" id={`${id}-msg`} name="mensaje" rows={3} />
      </div>
      <div className="qf__check">
        <input id={`${id}-priv`} name="privacidad" type="checkbox" required />
        <label htmlFor={`${id}-priv`}>Acepto que LIDA Energía use mis datos para contactarme sobre mi presupuesto. <a href="/privacidad/">Política de privacidad</a>.</label>
      </div>
      <button className="btn btn--default qf__send" type="submit">Pedir presupuesto</button>
      <p className="qf__note">Te llamamos en horario laboral. Sin compromiso.</p>
      <p className="qf__status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
