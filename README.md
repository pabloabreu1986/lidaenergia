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

## CI/CD (GitHub Actions)

| Workflow | Cuándo se ejecuta | Qué hace |
|---|---|---|
| `CI` (`.github/workflows/ci.yml`) | En cada push y pull request | `npm ci`, `npm run build` y `node ci/check-site.mjs`: enlaces, imágenes, CSS, un H1 por página y sin formularios |
| `Versión de prueba (GitHub Pages)` (`preview.yml`) | En cada push a `main` | Compila con `BASE_PATH=/<repo>` y `PREVIEW=1` y publica en `https://<usuario>.github.io/<repo>/`. Todas las páginas son **noindex**, `robots.txt` bloquea la indexación y aparece una etiqueta "Versión de prueba" |
| `Publicar en producción (Hostinger)` (`deploy-hostinger.yml`) | **Solo manual** (Actions → Run workflow, escribiendo `PUBLICAR`) | Compila, comprueba y sube `dist/` por SSH/rsync a Hostinger; luego verifica la web publicada |

### Puesta en marcha (una sola vez)

1. **GitHub Pages:** Settings → Pages → *Build and deployment* → Source: **GitHub Actions**.
   - En repositorios **privados**, Pages necesita un plan de pago (GitHub Pro/Team). El sitio de prueba es público aunque el repositorio sea privado.
2. **Producción (cuando se publique la web):**
   - Activar el acceso SSH en hPanel (Avanzado → Acceso SSH) y añadir la clave pública de despliegue.
   - En Settings → Secrets and variables → Actions, crear `HOSTINGER_SSH_HOST`, `HOSTINGER_SSH_PORT` (normalmente 65002), `HOSTINGER_SSH_USER`, `HOSTINGER_SSH_KEY` (clave privada) y `HOSTINGER_PATH` (p. ej. `domains/lidaenergia.com/public_html`).
   - Recomendado: Settings → Environments → `production` con revisores obligatorios.
   - **Antes del primer despliegue:** copia de seguridad del WordPress desde hPanel. La opción "limpiar" del workflow borra en el servidor lo que no esté en la nueva web.
3. **Despliegue automático en producción** (después del lanzamiento): añadir `push: branches: [main]` en `on:` de `deploy-hostinger.yml`.

## Licencias de terceros

Algunos componentes son ports de código abierto. Sus licencias se incluyen en `docs/21st-sources/`:

- Navegación: Origin UI (MIT), en `src/components/Header.tsx`.
- Acordeón: Spectrum UI (Apache-2.0), en `src/components/ui/Accordion.tsx`.
- Button e Input: shadcn/ui (MIT), en `src/components/ui/Button.tsx` y `src/styles/ui.css`.

© LIDA Energía S.L. Todos los derechos reservados, salvo el código de terceros indicado arriba.
