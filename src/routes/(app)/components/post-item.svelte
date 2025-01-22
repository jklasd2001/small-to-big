<script lang="ts">
  import type { Post } from '$lib/types'

  let { post }: { post: Post } = $props()
</script>

<a href="/posts/{post.slug}" class="">
  <div class="overflow-hidden">
    <img
      src="https://t3.ftcdn.net/jpg/05/17/82/24/360_F_517822417_cW17ljcETUNX8BylhlNesxWyhxHXO3Nc.jpg"
      alt="logo"
      class="h-full w-full overflow-clip rounded transition-all duration-300 hover:scale-110"
    />
  </div>

  <h3 class="mb-1 mt-2 text-xl font-bold">
    {post.title}
  </h3>

  <p class="text-sm text-gray-500">{post.description}</p>
</a>
