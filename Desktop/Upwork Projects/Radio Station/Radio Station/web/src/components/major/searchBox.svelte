<script>
    export let searchedStations;
    import RadioBox from "./radioBox.svelte";
   
</script>
{#each searchedStations as station,i}
                    
<div class="text-center border border-gray-500 py-2 px-2 rounded shadow-md shadow-slate-200">
    <img alt="Radio Icon" class="mx-auto" src={station.favicon} width="150" />
    <p class="font-semibold">{station.name}</p>
    <button  class="my-2 flex font-bold text-white bg-pink-800 round rounded py-1 w-full mx-auto text-lg shadow-slate-400 shadow-md">
        <span class="flex my-auto mx-auto px-2">
            <span class="flex mx-1 text-xl">Play</span>
            <img width="30" alt="Play Icon" src="/icons/play.png" />
        </span>
    </button>
  
</div>
{:else}
    <p class="text-center font-semibold my-48">No station has been searched.</p>
{/each}