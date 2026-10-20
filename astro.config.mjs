// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH lo inyecta el workflow de GitHub Pages (repo de proyecto -> /adima-design).
// En local o en un dominio propio queda en '/'.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://juancito8812.github.io',
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
