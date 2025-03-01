<script lang="ts">
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
</script>

<div class="fixed right-6 bottom-6 flex flex-col gap-3">
  <button class="btn btn-square" aria-label="Scroll to top" onclick={scrollTop}>
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
      class="lucide lucide-arrow-up"
      ><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg
    >
  </button>

  <button
    class="btn btn-square"
    aria-label="Scroll to bottom"
    onclick={scrollBottom}
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
      class="lucide lucide-arrow-down"
      ><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg
    >
  </button>
</div>
