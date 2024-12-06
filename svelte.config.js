import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],
  extensions: ['.svelte', '.svx', '.md'],
  compilerOptions: {
    runes: true,
  },
}

export default config
