# Adima Design — sitio web

Sitio estático en **Astro 5** para **Adima Design LLC**, firma de acabados decorativos de interiores en Miami / South Florida.

## Estado actual

- Rama de trabajo activa: `fix/logo-real-oficial`.
- El logo AMA/cubo real está integrado en el rail, el favicon y los iconos de la aplicación.
- El sitio tiene páginas de inicio, proyectos, testimonios, journal, privacidad y legal.
- El contenido todavía contiene campos `PLACEHOLDER` que deben sustituirse por datos confirmados del cliente antes de una entrega comercial.
- La dirección visual aprobada para continuar es **American luxury remodeling / design-build**: fotografía editorial de interiores, materiales cálidos, portafolio como prueba principal y CTA visible.
- La documentación de esa dirección está en [`docs/american-web-style-research.md`](docs/american-web-style-research.md).
- No hacer merge a `main` sin preview pública y aprobación explícita.

## Fuente de contenido

Todo el contenido editable vive en [`src/config.ts`](src/config.ts). No inventar teléfonos, correos, direcciones, proyectos, reseñas, certificaciones ni datos de licencia.

Antes de publicar contenido real:

1. Sustituir los `PLACEHOLDER` con información entregada o aprobada por el cliente.
2. Asociar cada proyecto con imágenes reales verificadas.
3. Usar únicamente testimonios autorizados y comprobables.
4. Confirmar datos de contacto, área de servicio, licencia, seguro y garantía.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # validación Astro/TypeScript
npm run build    # genera dist/
npm run preview  # sirve dist/
```

Para comprobar la versión de GitHub Pages localmente:

```bash
BASE_PATH=/adima-design SITE_URL=https://juancito8812.github.io npm run build
```

## Deploy

- **GitHub Pages:** un push a `main` dispara `.github/workflows/deploy.yml` → https://juancito8812.github.io/adima-design/
- El workflow inyecta `BASE_PATH=/adima-design` porque es un repositorio de proyecto.
- **Dominio propio:** usar `BASE_PATH=/` y definir `SITE_URL` con el dominio final.
- `.github/workflows/ci.yml` valida ramas y pull requests; `.github/workflows/deploy.yml` publica únicamente `main`.

## Flujo de trabajo

1. Trabajar en una rama secundaria.
2. Ejecutar `npm run check` y `npm run build`.
3. Crear una preview pública de la rama.
4. Revisar escritorio y móvil.
5. Hacer commit y push.
6. Compartir la preview por Telegram.
7. Esperar el OK explícito antes de mergear a `main`.

Comandos para retomar desde Telegram:

```bash
git switch fix/logo-real-oficial
git pull --ff-only origin fix/logo-real-oficial
npm run check
npm run build
git status --short
```

Los commits del proyecto deben usar la identidad `juancito8812`:

```bash
git -c user.name=juancito8812 -c user.email=juancito8812@users.noreply.github.com commit
```
