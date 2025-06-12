import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import sitemap from "@astrojs/sitemap";

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://rootsofwellness.com.au',
  integrations: [tailwind(), compress(), sitemap(), partytown()]
});