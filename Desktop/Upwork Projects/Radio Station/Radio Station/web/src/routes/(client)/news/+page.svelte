<script>
    export let data;
    const news = data.news
    console.log(news);
</script>
<div>
    <p class="font-bold text-2xl">News</p>
    {#each news as singleNews}
        <div class="md:mx-3 bg-gray-100 border border-gray-300 shadow-md hover:shadow-xl p-4 my-4 rounded-md" id={singleNews.id}>
            {#if singleNews.image}
                <img alt="News Icon" src={singleNews.image} class="mx-auto" width="600" />
            {/if}
            <p class="mb-10 text-xl font-semibold mt-4">{singleNews.title}</p>
            <p class="mb-10">{@html singleNews.description}</p>
            {#if singleNews.category}
                <p class="text-right font-bold">{singleNews.category}</p>
            {/if}
        </div>
    {/each}
</div>