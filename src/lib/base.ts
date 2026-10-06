// Prefijo de ruta para la versión de prueba en GitHub Pages (vacío en producción).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Prefija rutas internas absolutas ("/contacto/") con el basePath. Deja intactas URLs externas, tel:, mailto:, #anclas. */
export function withBase(href: string): string {
  return BASE_PATH && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(`${BASE_PATH}/`) ? BASE_PATH + href : href;
}

/** Igual que withBase, para fragmentos HTML (respuestas del FAQ). */
export function htmlWithBase(html: string): string {
  return BASE_PATH ? html.replace(/href="(\/[^"]*)"/g, (_m, h: string) => `href="${withBase(h)}"`) : html;
}
