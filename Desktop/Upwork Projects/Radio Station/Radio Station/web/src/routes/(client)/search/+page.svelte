<script>
    import SearchBox from "../../../components/major/searchBox.svelte";
    export let data;
    let search  = null
    const stations = data.stations
    let searchedStations = []
    const initiateSearch = (e) =>{
        
        if(e.key === "Enter" || e.type === "click"){
            console.log("runed");
            console.log(search);
            
            
            searchedStations = stations.filter((station)=>{console.log(station.name); return station.name.toLowerCase().includes(search.toLowerCase())})
        }
        
        
    }

    

</script>

<div>
    <div class="input-group mb-3">
        <input list="datalistOptions" bind:value={search} on:keydown={initiateSearch} type="text" class="form-control" placeholder="Search Radio Station" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary rounded" type="button" id="button-addon2" on:click={initiateSearch}>Search</button>
        <datalist id="datalistOptions">
            {#each stations as station}    
                <option value={station.name}>
            {/each}
        </datalist>
    </div>
    <div>
        {#if searchedStations[0] === undefined}
            <SearchBox {searchedStations} />
        {:else}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <SearchBox {searchedStations} />
            </div>
        {/if}
    </div>

</div>