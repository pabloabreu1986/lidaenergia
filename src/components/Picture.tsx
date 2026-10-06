import fs from 'node:fs';
import path from 'node:path';
import ReactDOM from 'react-dom';
import { SITE } from '@/data/site';
import { withBase } from '@/lib/base';

// Variantes generadas por images.config.mjs (se lee al compilar; el export es estático).
type Variant = { w: number; h: number; src: string };
type Entry = { width: number; height: number; variants: Variant[] };
let cache: Record<string, Entry> | null = null;
function manifest(): Record<string, Entry> {
  if (!cache) cache = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/img/manifest.json'), 'utf8'));
  return cache!;
}
function entry(name: string, preset: string): Entry {
  const e = manifest()[`${name}:${preset}`];
  if (!e) throw new Error(`Imagen sin generar: ${name}:${preset} (añádela a USES en images.config.mjs)`);
  return e;
}

export function ogImageUrl(name: string): string {
  return new URL(entry(name, 'og').variants[0].src, SITE.url).href;
}

interface Props {
  name: string;
  preset: 'hero' | 'pagehero' | 'content' | 'card' | 'thumb' | 'logo';
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Imagen responsive (srcset WebP + dimensiones reservadas), equivalente a <Image> de astro:assets. */
export default function Picture({ name, preset, alt, sizes, priority = false, className }: Props) {
  const e = entry(name, preset);
  const largest = e.variants[e.variants.length - 1];
  const srcSet = e.variants.map((v) => `${withBase(v.src)} ${v.w}w`).join(', ');
  // Imagen LCP: precarga en <head> para que se descubra antes que el JS del framework.
  if (priority) ReactDOM.preload(withBase(largest.src), { as: 'image', imageSrcSet: srcSet, imageSizes: sizes, fetchPriority: 'high' });
  return (
    <img
      src={withBase(largest.src)}
      srcSet={srcSet}
      sizes={sizes}
      width={e.width}
      height={e.height}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
    />
  );
}
