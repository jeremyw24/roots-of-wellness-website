import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://rootsofwellness.com.au',
  // experimental: {
  //   viewTransitions: true
  // },
  integrations: [tailwind(), compress(), sitemap()]
});