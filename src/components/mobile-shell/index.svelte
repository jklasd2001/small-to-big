<script lang="ts">
  let { children } = $props()
</script>

<div class="container mx-auto min-h-screen w-[720px] border-r border-l px-4">
  {@render children()}
</div>

<a href="/" aria-label="뒤로가기">
  <button
    class="btn btn-square fixed top-6 left-6"
    aria-label="뒤로가기"
    aria-labelledby="뒤로가기"
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
      class="lucide lucide-house"
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />

      <path
        d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      />
    </svg>
  </button>
</a>
