<script lang="ts">
  import '../app.css'

  const { children } = $props()
</script>

<svelte:head>
  <title>에라 모르겠다</title>
</svelte:head>

{@render children()}
