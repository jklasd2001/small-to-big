<script lang="ts">
  let { children } = $props()
</script>

<div class="container mx-auto min-h-screen w-[720px] border-l border-r px-4">
  {@render children()}
</div>

<a href="/" aria-label="뒤로가기">
  <button
    class="btn btn-square fixed left-6 top-6"
    aria-label="뒤로가기"
    aria-labelledby="뒤로가기"
  >
    <!-- <HomeIcon /> -->
  </button>
</a>
