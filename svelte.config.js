import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import relativeImages from 'mdsvex-relative-images'
import { mdsvex } from 'mdsvex'
import { createHighlighter } from 'shiki'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx', '.md'],
      remarkPlugins: [relativeImages],
    }),
  ],
  extensions: ['.svelte', '.svx', '.md'],
  compilerOptions: {
    runes: true,
  },
  
}

export default config
