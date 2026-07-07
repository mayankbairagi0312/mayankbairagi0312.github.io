import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mayankbairagi0312.github.io', // change to your actual GitHub username
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});