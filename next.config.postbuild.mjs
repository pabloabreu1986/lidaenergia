// Tras `next build` (output: 'export'): mueve out/ → dist/ (carpeta que se sube a Hostinger)
// y elimina artefactos del export que no son páginas públicas.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'out');
const DIST = path.join(ROOT, 'dist');

fs.rmSync(DIST, { recursive: true, force: true });
fs.renameSync(OUT, DIST);

// Página interna de Next para not-found: la 404 pública es /404.html
for (const p of ['_not-found', '404']) fs.rmSync(path.join(DIST, p), { recursive: true, force: true });
fs.rmSync(path.join(DIST, '_not-found.html'), { force: true });

// El manifiesto de imágenes solo se usa al compilar
fs.rmSync(path.join(DIST, 'img/manifest.json'), { force: true });

console.log('postbuild: dist/ listo');
