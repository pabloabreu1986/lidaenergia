/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: la web se sube como HTML a Hostinger (sin servidor Node).
  output: 'export',
  distDir: '.next',
  trailingSlash: true,
  images: { unoptimized: true }, // las variantes WebP las genera images.config.mjs al compilar
  reactStrictMode: true,
  poweredByHeader: false,
};
export default nextConfig;
