// Tras `next build` (output: 'export'): mueve out/ → dist/ (carpeta que se sube a Hostinger)
// y elimina artefactos del export que no son páginas públicas.
// Con BASE_PATH (versión de prueba en GitHub Pages) reescribe las rutas absolutas internas y,
// con PREVIEW=1, bloquea la indexación (robots.txt) para no competir con la web real.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'out');
const DIST = path.join(ROOT, 'dist');
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const PREVIEW = process.env.PREVIEW === '1';

fs.rmSync(DIST, { recursive: true, force: true });
fs.renameSync(OUT, DIST);

// Página interna de Next para not-found: la 404 pública es /404.html
for (const p of ['_not-found', '404']) fs.rmSync(path.join(DIST, p), { recursive: true, force: true });
fs.rmSync(path.join(DIST, '_not-found.html'), { force: true });

// El manifiesto de imágenes solo se usa al compilar
fs.rmSync(path.join(DIST, 'img/manifest.json'), { force: true });

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

if (BASE) {
  // Next ya prefija /_next con basePath; aquí se prefijan los enlaces <a href="/…">, imágenes,
  // srcset, preloads y url() del CSS, que en el código son rutas absolutas del dominio.
  const name = BASE.slice(1);
  const isInternal = (u) => u.startsWith('/') && !u.startsWith('//') && !u.startsWith(`/${name}/`);
  const prefix = (u) => (isInternal(u) ? BASE + u : u);
  const fixSrcset = (v) => v.split(',').map((item) => item.trim().replace(/^\S+/, prefix)).join(', ');
  for (const f of walk(DIST)) {
    if (f.endsWith('.html')) {
      let s = fs.readFileSync(f, 'utf8');
      s = s.replace(/\b(href|src)="([^"]*)"/g, (m, a, v) => `${a}="${prefix(v)}"`);
      s = s.replace(/\b(srcSet|srcset|imageSrcSet|imagesrcset)="([^"]*)"/g, (m, a, v) => `${a}="${fixSrcset(v)}"`);
      fs.writeFileSync(f, s);
    } else if (f.endsWith('.css')) {
      const css = fs.readFileSync(f, 'utf8').replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (m, q, u) => `url(${q}${prefix(u)}${q})`);
      fs.writeFileSync(f, css);
    }
  }
  fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
  fs.rmSync(path.join(DIST, '.htaccess'), { force: true }); // solo aplica en Hostinger
}

if (PREVIEW) {
  fs.writeFileSync(path.join(DIST, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
}

console.log(`postbuild: dist/ listo${BASE ? ` (basePath ${BASE})` : ''}${PREVIEW ? ' [PREVIEW: noindex]' : ''}`);
