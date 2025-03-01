<script>
  import NavigationButton from './components/navigation-button.svelte'

  let { children } = $props()
</script>

<header class="border-b-base-300 fixed top-0 left-0 h-16 w-screen border-b">
  <div
    class="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4"
  >
    <a role="button" href="/" class="text-2xl font-bold">jklasd2001</a>

    <div class="flex items-center gap-4">
      <a role="button" href="/invitation-card" class="btn">초대장</a>

      <a
        aria-label="Github"
        class="btn btn-square"
        href="https://github.com/jklasd2001"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          /><path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </a>

      <a
        aria-label="Email"
        class="btn btn-square"
        href="mailto:jklasd2001@gmail.com"
        rel="noopener noreferrer"
        role="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>
    </div>
  </div>
</header>

<div class="mt-16 min-h-[calc(100vh-64px)] p-4">
  {@render children()}
</div>

<NavigationButton />
