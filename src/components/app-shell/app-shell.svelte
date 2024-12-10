<script>
  import NavigationButton from './navigation-button.svelte'

  let { children } = $props()
</script>

<header class="fixed left-0 top-0 h-16 w-screen border-b border-b-base-300">
  <div
    class="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4"
  >
    <a href="/">
      <img src="/logo.png" alt="logo" class="h-8 rounded-full" />
    </a>

    <div class="flex gap-4">
      <a href="/birthday-letter">편지</a>

      <a href="/invitation-card">초대장</a>
    </div>
  </div>
</header>

<div class="mt-16 min-h-[calc(100vh-64px)]">
  {@render children()}
</div>

<NavigationButton />
