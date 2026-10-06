// Comprobación del build estático para CI (Node puro, sin navegador).
// Verifica en dist/ que todo enlace interno, imagen, srcset, CSS, JS y preload apunta a un archivo
// existente (teniendo en cuenta BASE_PATH), que hay un <h1> por página y, con PREVIEW=1, que todo es noindex.
// Uso: node ci/check-site.mjs   (variables: BASE_PATH, PREVIEW)
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'dist');
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const PREVIEW = process.env.PREVIEW === '1';
const errors = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
}

function resolve(url, from) {
  const clean = url.split('#')[0].split('?')[0];
  if (!clean || /^(https?:|mailto:|tel:|data:|\/\/)/.test(clean)) return null; // externo o ancla
  let p;
  if (clean.startsWith('/')) {
    if (BASE && !clean.startsWith(`${BASE}/`) && clean !== BASE) return { error: `ruta sin basePath ${BASE}` };
    p = path.join(DIST, decodeURIComponent(BASE ? clean.slice(BASE.length) : clean));
  } else {
    p = path.join(path.dirname(from), decodeURIComponent(clean));
  }
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  return { file: p };
}

const files = walk(DIST);
const pages = files.filter((f) => f.endsWith('.html'));
for (const f of pages) {
  const rel = path.relative(DIST, f);
  const html = fs.readFileSync(f, 'utf8');
  const urls = [
    ...[...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/\b(?:srcSet|srcset|imageSrcSet|imagesrcset)="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0])),
  ];
  for (const u of new Set(urls)) {
    const r = resolve(u.replace(/&amp;/g, '&'), f);
    if (!r) continue;
    if (r.error) errors.push(`${rel}: ${u} → ${r.error}`);
    else if (!fs.existsSync(r.file)) errors.push(`${rel}: enlace roto ${u}`);
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${rel}: ${h1} <h1>`);
  if (/<form[\s>]/.test(html)) errors.push(`${rel}: contiene <form> (formulario desactivado)`);
  if (PREVIEW && !/<meta name="robots" content="noindex/.test(html)) errors.push(`${rel}: falta noindex en la versión de prueba`);
}
for (const f of files.filter((x) => x.endsWith('.css'))) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/url\((['"]?)([^)'"]+)\1\)/g)) {
    const r = resolve(m[2], f);
    if (r?.error) errors.push(`${path.relative(DIST, f)}: ${m[2]} → ${r.error}`);
    else if (r && !fs.existsSync(r.file)) errors.push(`${path.relative(DIST, f)}: recurso roto ${m[2]}`);
  }
}
if (PREVIEW) {
  const robots = fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
  if (!/Disallow: \/\s*$/m.test(robots)) errors.push('robots.txt de la versión de prueba no bloquea la indexación');
}
if (!fs.existsSync(path.join(DIST, '404.html'))) errors.push('falta 404.html');

console.log(`check-site: ${pages.length} páginas revisadas${BASE ? ` (basePath ${BASE})` : ''}${PREVIEW ? ' [preview]' : ''}`);
if (errors.length) {
  console.error(errors.map((e) => `  ✖ ${e}`).join('\n'));
  process.exit(1);
}
console.log('check-site: OK');
