// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wagemutig.github.io',
  base: '/techtalk',
  vite: {
    plugins: [tailwindcss()]
  }
});