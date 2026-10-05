import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
  level?: 'h1' | 'h2';
  id?: string;
  size?: 'display' | 'default';
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, description, align = 'start', level = 'h2', id, size = 'default', className, children }: Props) {
  const Tag = level;
  return (
    <div className={['sh', `sh--${align}`, className].filter(Boolean).join(' ')}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id} className={size === 'display' ? 'display' : undefined}>{title}</Tag>
      {description && <p className="subtitle">{description}</p>}
      {children}
    </div>
  );
}
