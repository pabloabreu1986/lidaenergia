// Genera las variantes WebP/JPG de las fotos (equivalente a astro:assets) en public/img/
// y un manifiesto que lee el componente <Picture>. Se ejecuta antes de `next dev` y `next build`.
// Uso: node images.config.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'public/img');

export const IMAGES = {
  'placas-tejado-teja': 'src/assets/obras/placas-tejado-teja.jpg',
  'tejado-placas-vivienda': 'src/assets/obras/tejado-placas-vivienda.jpg',
  'placas-cubierta-nave': 'src/assets/obras/placas-cubierta-nave.jpg',
  'inversores-baterias': 'src/assets/obras/inversores-baterias.jpg',
  'cargador-coche-garaje': 'src/assets/obras/cargador-coche-garaje.jpg',
  'tecnico-tejado-seguridad': 'src/assets/obras/tecnico-tejado-seguridad.jpg',
  'marquesina-solar': 'src/assets/obras/marquesina-solar.jpg',
  'cuadro-electrico': 'src/assets/obras/cuadro-electrico.jpg',
  'azotea-placas-atardecer': 'src/assets/obras/azotea-placas-atardecer.jpg',
  'logo-lida': 'src/assets/logo-lida.jpg',
};

// aspect = ancho/alto del recorte (cover, centrado). Sin aspect se respeta la proporción original.
export const PRESETS = {
  hero: { widths: [400, 640, 800, 1100], quality: 58 },
  pagehero: { widths: [400, 640, 800, 1100], quality: 58, aspect: 4 / 3 },
  content: { widths: [480, 720, 960, 1200], quality: 64 },
  card: { widths: [480, 640, 800, 1000], quality: 62, aspect: 4 / 3 },
  thumb: { widths: [200, 400], quality: 70, aspect: 1 },
  logo: { widths: [150, 300], quality: 80 },
  og: { widths: [1200], quality: 80, aspect: 1200 / 630, format: 'jpeg' },
};

export const USES = [
  ['placas-tejado-teja', 'hero'],
  ['tejado-placas-vivienda', 'card'],
  ['placas-cubierta-nave', 'card'],
  ['logo-lida', 'logo'],
  ['inversores-baterias', 'thumb'],
  ['cargador-coche-garaje', 'thumb'],
  ...['tejado-placas-vivienda', 'placas-cubierta-nave', 'cargador-coche-garaje', 'tecnico-tejado-seguridad'].map((n) => [n, 'pagehero']),
  ...Object.keys(IMAGES).filter((n) => n !== 'logo-lida').flatMap((n) => [[n, 'content'], [n, 'og']]),
];

async function build() {
  fs.mkdirSync(OUT, { recursive: true });
  const manifest = {};
  for (const [name, preset] of USES) {
    const src = path.join(ROOT, IMAGES[name]);
    const p = PRESETS[preset];
    const meta = await sharp(src).metadata();
    const ext = p.format === 'jpeg' ? 'jpg' : 'webp';
    const widths = [...new Set(p.widths.map((w) => Math.min(w, meta.width)))];
    const variants = [];
    for (const w of widths) {
      const h = p.aspect ? Math.round(w / p.aspect) : Math.round((meta.height * w) / meta.width);
      const file = `${name}-${preset}-${w}.${ext}`;
      const dest = path.join(OUT, file);
      if (!fs.existsSync(dest) || fs.statSync(dest).mtimeMs < fs.statSync(src).mtimeMs) {
        let img = sharp(src).rotate().resize(w, h, { fit: 'cover', position: 'centre' });
        img = ext === 'jpg' ? img.jpeg({ quality: p.quality, mozjpeg: true }) : img.webp({ quality: p.quality });
        await img.toFile(dest);
      }
      variants.push({ w, h, src: `/img/${file}` });
    }
    const largest = variants[variants.length - 1];
    manifest[`${name}:${preset}`] = { width: largest.w, height: largest.h, variants };
  }
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`images: ${Object.keys(manifest).length} usos, ${Object.values(manifest).reduce((a, m) => a + m.variants.length, 0)} archivos en public/img`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  await build();
}
