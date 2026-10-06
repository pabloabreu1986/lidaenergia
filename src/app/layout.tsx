import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import fs from 'node:fs';
import path from 'node:path';
import '@/styles/global.css';
import '@/styles/ui.css';
import '@/styles/components.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import Tracking from '@/components/Tracking';
import { SITE } from '@/data/site';
import { withBase } from '@/lib/base';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: [{ url: withBase('/favicon-32.png'), sizes: '32x32', type: 'image/png' }], apple: withBase('/apple-touch-icon.png') },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#17232e' };

function logoProps() {
  const m = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/img/manifest.json'), 'utf8'))['logo-lida:logo'];
  const v = m.variants as { w: number; src: string }[];
  return { src: withBase(v[v.length - 1].src), srcSet: v.map((x) => `${withBase(x.src)} ${x.w}w`).join(', '), width: m.width, height: m.height };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  ReactDOM.preload(withBase('/fonts/archivo.woff2'), { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  return (
    <html lang="es">
      <body>
        {/* Sin JavaScript, las respuestas del FAQ se muestran abiertas */}
        <noscript><style>{'.acc__panel[hidden]{display:block!important;content-visibility:visible!important}.acc__plus{display:none}'}</style></noscript>
        <a className="skip" href="#contenido">Saltar al contenido</a>
        <Header logo={logoProps()} />
        <main id="contenido">{children}</main>
        <Footer />
        <CallBar />
        <Tracking />
        {process.env.PREVIEW === '1' && <p className="preview-tag" role="note">Versión de prueba</p>}
      </body>
    </html>
  );
}
