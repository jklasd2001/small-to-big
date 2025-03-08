<script lang="ts">
  interface FavoriteCardProps {
    title: string
    description: string
    tag: string[]
    link: string
  }

  let { title, description, tag, link }: FavoriteCardProps = $props()
</script>

<div class="card card-compact bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions">
      <a href={link} class="link" target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  </div>
</div>
