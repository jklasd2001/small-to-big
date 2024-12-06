import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const paths = import.meta.glob('/src/posts/*.md', { eager: true })

  const posts: Post[] = []

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md', '')

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>
      const post = { ...metadata, slug } satisfies Post

      if (post.published) {
        posts.push(post)
      }
    }
  }

  return json(
    posts.sort(
      (first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime(),
    ),
  )
}
