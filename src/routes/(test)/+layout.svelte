<script>
  import MobileShell from '../../components/mobile-shell/index.svelte'

  let { children } = $props()
</script>

<MobileShell>
  {@render children()}
</MobileShell>
