'use client';
/*
 * Port a React/Next de "Navigation Bar" de Origin UI (comp-578), listado en 21st.dev como navigation-menu-4.
 * Fuente: https://github.com/cosscom/coss/blob/main/apps/origin/registry/default/components/comp-578.tsx
 * Copyright (c) 2025 coss.com · Originally Copyright (c) 2025 Origin UI — MIT License
 * (texto completo en docs/21st-sources/LICENSE-originui-MIT.md).
 * Se conserva: lista de navegación con un submenú de tipo "description" (etiqueta + descripción),
 * enlaces simples, menú móvil en panel desplegable con títulos de grupo y separadores, y el icono
 * hamburguesa de tres trazos que rota a "X" con aria-expanded.
 * Modificaciones: sin Radix (estado con useState), contenidos de LIDA, se quitan Sign In / Get Started
 * y se sustituyen por un único CTA de llamada; el botón móvil va a la derecha; Escape, clic fuera y
 * devolución del foco implementados a mano.
 */
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { NAV, SERVICES, SITE, telHref } from '@/data/site';
import { withBase } from '@/lib/base';

interface Props { logo: { src: string; srcSet: string; width: number; height: number } }

export default function Header({ logo }: Props) {
  // usePathname no incluye el basePath, igual que las rutas de NAV/SERVICES
  const path = usePathname() || '/';
  const inSolutions = SERVICES.some((s) => s.href.split('#')[0] === path);
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLButtonElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (menu) { setMenu(false); toggleRef.current?.focus(); }
      if (sub) {
        const inside = itemRef.current?.contains(document.activeElement);
        setSub(false);
        if (inside) subRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (menu && !panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) setMenu(false);
      if (sub && !itemRef.current?.contains(t)) setSub(false);
    };
    const mq = matchMedia('(min-width: 64rem)');
    const onMq = (m: MediaQueryListEvent) => { if (m.matches) setMenu(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      mq.removeEventListener('change', onMq);
    };
  }, [menu, sub]);

  return (
    <header className="nav" data-nav>
      <div className="wrap nav__in">
        <a href={withBase('/')} className="nav__logo" aria-label="LIDA Energía, ir al inicio">
          <img src={logo.src} srcSet={logo.srcSet} sizes="150px" width={logo.width} height={logo.height} alt="LIDA Energía" loading="eager" decoding="async" />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="btn btn--ghost btn--icon nav__toggle"
          aria-expanded={menu}
          aria-controls="menu-movil"
          aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
          data-nav-toggle
          onClick={() => setMenu((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path className="nav__bar nav__bar--1" d="M4 12L20 12" />
            <path className="nav__bar nav__bar--2" d="M4 12H20" />
            <path className="nav__bar nav__bar--3" d="M4 12H20" />
          </svg>
        </button>

        <nav className="nav__desk" aria-label="Principal">
          <ul className="nav__list">
            <li
              ref={itemRef}
              className="nav__item nav__item--sub"
              onPointerEnter={(e) => { if (e.pointerType === 'mouse') { clearTimeout(timer.current); setSub(true); } }}
              onPointerLeave={(e) => { if (e.pointerType === 'mouse') timer.current = window.setTimeout(() => setSub(false), 150); }}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setSub(false); }}
            >
              <button
                ref={subRef}
                type="button"
                className="nav__trigger"
                aria-expanded={sub}
                aria-controls="sub-soluciones"
                data-nav-sub
                aria-current={inSolutions ? 'true' : undefined}
                onClick={() => setSub((v) => !v)}
              >
                Soluciones
                <svg viewBox="0 0 16 16" aria-hidden="true" className="nav__chev"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <div className="nav__dropdown" id="sub-soluciones" hidden={!sub}>
                <ul>
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <a href={withBase(s.href)} className="nav__dlink">
                        <span className="nav__dlabel">{s.label}</span>
                        <span className="nav__ddesc">{s.description}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {NAV.map((n) => (
              <li key={n.href} className="nav__item">
                <a className="nav__link" href={withBase(n.href)} aria-current={path === n.href ? 'page' : undefined}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--default btn--sm nav__cta" href={telHref} data-ubicacion="cabecera">
          <Icon name="phone" /><span>Llamar <span className="nav__num">{SITE.phoneDisplay}</span></span>
        </a>
      </div>

      <div className="nav__panel" id="menu-movil" ref={panelRef} hidden={!menu} onClick={(e) => { if ((e.target as Element).closest('a')) setMenu(false); }}>
        <div className="wrap">
          <p className="nav__group">Soluciones</p>
          <ul className="nav__plist">
            {SERVICES.map((s) => <li key={s.href}><a href={withBase(s.href)}>{s.label}</a></li>)}
          </ul>
          <div className="nav__sep" role="separator" aria-orientation="horizontal" />
          <ul className="nav__plist">
            {NAV.map((n) => <li key={n.href}><a href={withBase(n.href)} aria-current={path === n.href ? 'page' : undefined}>{n.label}</a></li>)}
            <li><a href={withBase('/presupuesto-placas-solares/')}>Pedir presupuesto</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
