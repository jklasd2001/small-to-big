<script>
  import MobileShell from '../../components/mobile-shell/mobile-shell.svelte'

  let { children } = $props()
</script>

<MobileShell>
  {@render children()}
</MobileShell>
