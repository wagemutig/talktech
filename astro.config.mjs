// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Netlify serves the site at the domain root; GitHub Pages serves it under /talktech
  site: process.env.NETLIFY ? process.env.URL : 'https://wagemutig.github.io',
  base: process.env.NETLIFY ? '/' : '/talktech',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      ELEVENLABS_AGENT_ID: {
        type: 'string',
        context: 'client',
        access: 'public',
        optional: true,
      },
    },
  },
});