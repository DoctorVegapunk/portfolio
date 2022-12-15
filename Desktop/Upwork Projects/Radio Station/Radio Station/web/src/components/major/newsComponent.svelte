<script>
    export let news;
    console.log(news);
    
</script>
<div class="noScroll rounded bg-white mx-2 px-4 pb-10 overflow-y-scroll" style="height:88vh; -ms-overflow-style: none;scrollbar-width: none;">
    <p class=" pt-4 text-xl font-bold py-2">News</p>
    

    {#each news as singleNews}
        {#if singleNews.description.length > 10}
            <div class="mt-4">
                {#if singleNews.image}
                    <img alt="News Icon" src={singleNews.image} width="250" class="mx-auto my-2">
                {/if}
                <p class="font-semibold text-lg">{singleNews.title}</p>  
                <p class="flex">{@html singleNews.description.substring(0,320) + "..."}</p>
                <a class="float-right mr-4 font-bold cursor-pointer hover:text-black" href={'news#' + singleNews.id}>Read More</a>
                <br>
                <br>
                    <hr>
            </div>
        {/if}
    {:else}
        <p>No news Available</p>
    {/each}
</div>