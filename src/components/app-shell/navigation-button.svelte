<script lang="ts">
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
</script>

<div class="fixed bottom-6 right-6">
  <button class="btn btn-square" onclick={scrollTop}>Up</button>
  <button class="btn btn-square" onclick={scrollBottom}>Down</button>
</div>
