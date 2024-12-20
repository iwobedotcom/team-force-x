// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://team-force.netlify.app/',
  integrations: [
    tailwind(),
    react(),
    robotsTxt(),
    sitemap(),
    partytown({ config: { forward: ['dataLayer.push'] } })
  ]
});
