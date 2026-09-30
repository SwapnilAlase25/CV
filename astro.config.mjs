// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Hosted on GitHub Pages with the custom domain https://swapnilalase.tech
// (see public/CNAME). The site is served from the domain root, so no `base` is needed.
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
