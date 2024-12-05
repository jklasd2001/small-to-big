<script>
    let {children} = $props()
</script>

<div class="contents">
    <div class="container mx-auto px-4 border-l border-r border-gray-200 min-h-screen w-[720px]">
        {@render children()}
    </div>

    <button class="fixed top-6 left-6 bg-blue-500">아아아</button>
</div>
