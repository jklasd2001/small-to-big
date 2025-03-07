import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import relativeImages from 'mdsvex-relative-images'
import { mdsvex } from 'mdsvex'
import { createHighlighter } from 'shiki'
// import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static'

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
  highlighter: createHighlighter({
    // theme: 'github-dark',
  }),
  extensions: ['.svelte', '.svx', '.md'],
  compilerOptions: {
    runes: true,
    // script_context_deprecated 경고 무시
    warningFilter: (warning) => {
      return warning.code !== "script_context_deprecated"
    }
  },
}

export default config
