/** @type {import('next').NextConfig} */
// BASE_PATH: solo para la versión de prueba en GitHub Pages (https://<usuario>.github.io/<repo>/).
// En producción (Hostinger, dominio propio) va vacío.
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  // Exportación estática: la web se sube como HTML a Hostinger (sin servidor Node).
  output: 'export',
  distDir: '.next',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true }, // las variantes WebP las genera images.config.mjs al compilar
  reactStrictMode: true,
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
