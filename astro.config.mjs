import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mayankbairagi0312.github.io', 
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});