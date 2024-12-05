<script>
    import MobileShell from '../../components/mobile-shell.svelte';

    let {children} = $props();
</script>

<MobileShell>
    {@render children()}
</MobileShell>
