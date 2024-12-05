<script>
    let {children} = $props();
</script>

<div class="contents">
    <header class="fixed h-12 top-0 left-0 w-full bg-blue-500 border-b border-gray-200">
        <a href="/birthday-letter">
            편지
        </a>

        <a href="/invitation-card">
            초대장
        </a>
    </header>

    <div class="mt-12 min-h-[calc(100vh-48px)] bg-red-200">
        {@render children()}
    </div>
</div>
