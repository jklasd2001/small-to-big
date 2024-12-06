<script lang="ts">
  const { data } = $props()
</script>

<svelte:head>
  <title>asd</title>
</svelte:head>

<div class="h-[500px] bg-red-500">
  {#each data.posts as post}
    <div>
      <a href="/posts/{post.slug}">{post.title}</a>
    </div>
  {/each}
</div>
