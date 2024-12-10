<script lang="ts">
  const { data } = $props()

  console.log(data)
</script>

<div class="prose mx-auto max-w-2xl">
  <data.content />
</div>
