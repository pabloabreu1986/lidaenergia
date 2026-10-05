/*
 * Port a React/Next del Button de shadcn/ui (registry new-york-v4).
 * Fuente: https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/button.tsx
 * Copyright (c) 2023 shadcn — MIT License (texto completo en docs/21st-sources/LICENSE-shadcn-MIT.md).
 * Estilos en src/styles/ui.css (variantes y tamaños portados de class-variance-authority a CSS).
 * Renderiza <a> si recibe href (equivalente a asChild con un enlace) o <button> en otro caso.
 */
import type { ReactNode } from 'react';
import Icon from '../Icon';

type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
type Size = 'sm' | 'default' | 'lg' | 'icon';

interface Props {
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: 'phone' | 'whatsapp';
  ubicacion?: string;
  external?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  children: ReactNode;
}

export function buttonClass(variant: Variant = 'default', size: Size = 'default', extra?: string) {
  return ['btn', `btn--${variant}`, size !== 'default' && `btn--${size}`, extra].filter(Boolean).join(' ');
}

export default function Button({ href, variant = 'default', size = 'default', icon, ubicacion, external, className, type = 'button', children }: Props) {
  const cls = buttonClass(variant, size, className);
  const inner = <>{icon && <Icon name={icon} />}{children}</>;
  if (href) {
    return (
      <a className={cls} href={href} data-slot="button" data-ubicacion={ubicacion} rel={external ? 'noopener' : undefined} target={external ? '_blank' : undefined}>
        {inner}
      </a>
    );
  }
  return <button className={cls} type={type} data-slot="button">{inner}</button>;
}
