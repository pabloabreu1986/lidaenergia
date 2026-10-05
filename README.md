# lidaenergia.com

Web de **LIDA Energía**, instaladores de placas solares en Madrid. Sitio estático hecho con [Next.js](https://nextjs.org) (App Router, exportación estática).

## Requisitos

Node 22 o superior.

## Comandos

```bash
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # genera la web final en dist/ (imágenes + next build + export)
npm run start     # sirve dist/ en local
```

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Teléfono, email, horario, reseñas, servicios, menú | `src/data/site.ts` |
| Colores, tipografía y botones | `src/styles/global.css`, `src/styles/ui.css` |
| Páginas | `src/app/**/page.tsx` (layout común en `src/app/layout.tsx`) |
| Datos estructurados (JSON-LD) y metadatos | `src/lib/seo.tsx` |
| Imágenes responsive | `images.config.mjs` (genera `public/img/` al compilar) + `src/components/Picture.tsx` |
| Fotos de obras | `src/assets/obras/` (se optimizan al compilar) |
| Redirecciones, caché y cabeceras (Hostinger) | `public/.htaccess` |
| Formulario (desactivado) | `src/components/QuoteForm.tsx` + `server/enviar.php` |

## Publicación (Hostinger)

1. `npm run build`
2. Subir el contenido de `dist/` (incluido `.htaccess`) a `public_html/`.

## Licencias de terceros

Algunos componentes son ports de código abierto. Sus licencias se incluyen en `docs/21st-sources/`:

- Navegación: Origin UI (MIT), en `src/components/Header.tsx`.
- Acordeón: Spectrum UI (Apache-2.0), en `src/components/ui/Accordion.tsx`.
- Button e Input: shadcn/ui (MIT), en `src/components/ui/Button.tsx` y `src/styles/ui.css`.

© LIDA Energía S.L. Todos los derechos reservados, salvo el código de terceros indicado arriba.
