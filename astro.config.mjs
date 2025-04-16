// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),react()],

  devToolbar: {
    enabled: false
  },

  vite: {
    resolve: {
      alias: {
        '@styles': '/src/styles'  // Path alias yang benar
      }
    },
    envPrefix: 'MJ_'
  },
  adapter: vercel()
});