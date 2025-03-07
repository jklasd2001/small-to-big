import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const paths = import.meta.glob('/src/posts/**/*.md', { eager: true })

  const posts: Post[] = []

  for (const path in paths) {
    const file = paths[path]
    const pathParts = path.split('/')
    // 폴더명을 slug로 대체
    const slug = pathParts
      .slice(pathParts.length - 2, pathParts.length - 1)
      .join('')

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
