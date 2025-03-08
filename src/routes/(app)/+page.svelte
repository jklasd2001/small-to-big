<script lang="ts">
  import PostItem from './components/post-item.svelte'

  const { data } = $props()
</script>

<div class="mx-auto max-w-7xl px-4">
  <div class="grid grid-cols-4 gap-4 sm:grid-cols-3">
    {#each data.posts as post}
      <PostItem {post} />
    {/each}
  </div>
</div>
