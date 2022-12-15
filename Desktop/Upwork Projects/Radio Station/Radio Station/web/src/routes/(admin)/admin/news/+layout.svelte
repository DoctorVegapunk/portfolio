<script>
    import '../../../../app.scss'
</script>
<main>
    <div class="grid grid-cols-3 text-center my-10 adminNav underline micro-title">
        <a href="/admin/news">Add News</a>
        <a href="/admin/news/remove">Remove News</a>
        <a href="/admin/news/edit">Edit News</a>
    </div>
    <div >
        <slot></slot>
    </div>
</main>