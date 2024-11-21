import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://abdhublog-astro-838ff1.netlify.app/",
  integrations: [preact()]
});