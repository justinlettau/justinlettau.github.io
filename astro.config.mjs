import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://justinlettau.github.io',
  integrations: [tailwind(), partytown()],
});
