import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: 'index.html'
    }),
    paths: {
      base: './',
    },
    alias: {
      $lib: "./src/lib"
    }
  },

  preprocess: [vitePreprocess({})],
};

export default config;
