# Adima Design — sitio web

Sitio estático (Astro) para **Adima Design**, empresa de diseño y construcción.

## Estado

Esqueleto funcional con contenido de demostración. Falta:

- Logo, paleta e imágenes reales (hoy hay placeholders CSS/SVG)
- Datos de contacto reales (email, teléfono, WhatsApp, dirección)
- Proyectos reales con fotos
- Backend del formulario (hoy solo muestra un mensaje demo)
- Dominio definitivo

Todo el contenido editable vive en [`src/config.ts`](src/config.ts).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Deploy

- **GitHub Pages**: push a `main` dispara `.github/workflows/deploy.yml`
  → https://juancito8812.github.io/adima-design/
  El workflow inyecta `BASE_PATH=/adima-design` porque es un repo de proyecto.
- **Dominio propio**: deja `base` en `/` en `astro.config.mjs` (o define `BASE_PATH`),
  apunta `SITE_URL` al dominio y despliega donde prefieras (Cloudflare Pages, etc.).
