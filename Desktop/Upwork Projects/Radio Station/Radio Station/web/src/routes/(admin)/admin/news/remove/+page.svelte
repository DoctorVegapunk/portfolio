<script>
	import { deleteDoc, doc, getFirestore } from "firebase/firestore";


    export let data;
    let news = data.news

    const deleteNews = (id,title) =>{
        
        
        deleteDoc(doc(getFirestore(),"News",id)).then(()=>{
            alert("Deleted News post " + title)
            news = news.filter((singleNews)=>singleNews.id !== id)
        })
    }
</script>
<main>
    {#each news as singleNews}
        <div class="bg-gray-100 p-4 my-2 roundedlg border border-gray-200">
            {#if singleNews.image}
                <img src={singleNews.image} alt="News" width="250" />
            {/if}
            <p class="font-bold text-xl">{singleNews.title}</p>
            <p>{@html singleNews.description}</p>
            <img src="/icons/delete.png" alt="Delete Icon" width="30" class="ml-auto" style="cursor:pointer;" on:keydown={()=>{}} on:click={()=>{deleteNews(singleNews.id,singleNews.title)}} />
            {#if singleNews.category}
                <div>
                    <p class="text-xl font-semibold">Category</p>
                    <p class="my-2">{singleNews.category}</p>
                </div>
            {/if}
        </div>
    {:else}
        <p>No News Posted.</p>
    {/each}
</main>