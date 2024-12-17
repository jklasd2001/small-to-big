<script lang="ts">
  const { data } = $props()
</script>

<svelte:head>
  <title>{data.meta.title}</title>
</svelte:head>

<div class="prose mx-auto max-w-2xl">
  <data.content />
</div>
