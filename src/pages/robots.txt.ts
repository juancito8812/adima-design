import type { APIRoute } from 'astro';
import { url } from '../config';

export const GET: APIRoute = ({ site }) => {
  const base = new URL(url('/'), site ?? undefined).toString().replace(/\/$/, '');
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
