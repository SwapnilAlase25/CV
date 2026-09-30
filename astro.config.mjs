// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ─── Hosting ────────────────────────────────────────────────────────────────
// GitHub Pages project site:  https://swapnilalase25.github.io/CV/
//   site: 'https://swapnilalase25.github.io', base: '/CV'
// Custom domain (after buying it and adding public/CNAME):
//   site: 'https://swapnilalase.cv',          base: '/'
// ────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://swapnilalase.tech',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
