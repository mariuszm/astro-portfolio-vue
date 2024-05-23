import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    script: {
      defineModel: true,
      propsDestructure: true,
    },
    devtools: true,
  })]
});
