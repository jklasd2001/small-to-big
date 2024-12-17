<script lang="ts">
  import AppShell from '../../components/app-shell/index.svelte'

  let { children } = $props()
</script>

<AppShell>
  {@render children()}
</AppShell>
