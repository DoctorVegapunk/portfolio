<script>
    import '../../../../app.scss'
</script>
<main>
    <div class="grid grid-cols-3 text-center my-10 adminNav underline micro-title">
        <a href="/admin/radio/add">Add Radio Stations</a>
        <a href="/admin/radio/custom">Add Custom Radio Station</a>
        <a href="/admin/radio/remove">Remove Radio Stations</a>
    </div>
    <div >
        <slot></slot>
    </div>
</main>