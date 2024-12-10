<script>
  import AppShell from '../../components/app-shell/app-shell.svelte'

  let { children } = $props()
</script>

<AppShell>
  {@render children()}
</AppShell>
