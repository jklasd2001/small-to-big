import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const file = await import(`../../../../posts/${params.slug}.md`)

    return {
      content: file.default,
      meta: file.metadata,
    }
  } catch {
    error(404, `Could not find ${params.slug}`)
  }
}
