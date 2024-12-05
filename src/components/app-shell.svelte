<script>
  let { children } = $props()
</script>

<header class="fixed left-0 top-0 h-16 w-full border-b border-gray-200">
  <a href="/birthday-letter"> 편지 </a>

  <a href="/invitation-card"> 초대장 </a>
</header>

<div class="mt-16 min-h-[calc(100vh-64px)]">
  {@render children()}
</div>
