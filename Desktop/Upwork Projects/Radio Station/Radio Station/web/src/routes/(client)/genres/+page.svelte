<script>
    import getStations from "$lib/updateRadio";
	import RadioBox from '../../../components/major/radioBox.svelte';
    export let data;
    const genres = data.genres
    let stations = [];
    let genredStations = []
    let selectedGenre;
    
    const changeGenre = (e) =>{
        const genre = e.target.selectedOptions[0].innerHTML
        
        getStations().then((stationsData)=>{
            const stationsFiltered = stationsData.filter((station)=>station.genre === genre)
            stations = stationsFiltered
            console.log("Gone");
            
               
        })
    }
   
</script>

<div>
    <p class="text-2xl font-bold">Genres</p>
    <div class="my-10">
        <select class="form-select" aria-label="Default select example" bind:value={selectedGenre} style="width:fit-content" on:change={changeGenre}>
            <option selected>No Genre</option>
            {#each genres as genre,i}
                <option value={i}>{genre}</option>
            {/each}
        </select>
        {#if stations[0]}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
                {#each stations as station,i}
                            
                    <div class="text-center border border-gray-500 py-2 px-2 rounded shadow-md shadow-slate-200">
                        <img alt="Radio Icon" class="mx-auto" src={station.favicon} width="150" />
                        <p class="font-semibold">{station.name}</p>
                        <button class="my-2 flex font-bold text-white bg-pink-800 round rounded py-1 w-full mx-auto text-lg shadow-slate-400 shadow-md">
                            <span class="flex my-auto mx-auto px-2">
                                <span class="flex mx-1 text-xl">Play</span>
                                <img width="30" alt="Play Icon" src="/icons/play.png" />
                            </span>
                        </button>
                       
                    </div>
                {/each}
            </div>
        {:else}
        
            <p class="text-center text-black my-10 font-bold">No radio stations to display, please select a genre.</p>
        {/if}
        

    </div>
</div>