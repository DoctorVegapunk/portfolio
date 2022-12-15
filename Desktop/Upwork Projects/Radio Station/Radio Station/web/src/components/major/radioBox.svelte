<script>
    const vinyl = '/vinyl.png'
    import './radioBox.css'
    
    let paused = true
    let muted = false
    let volume = 50
    $: volumeAudio =  volume / 100
    
    export let firstStation = {
        url:"",
        urlResolved:"",
        favicon:''
    };
    export let secondStation={
        name:"",
        country:"",
        favicon:""
    };
    export let next;
    export let prev;
    export let stationIndex;
    export let lastStationIndex;
    

</script>
<div>
    <audio bind:paused={paused} bind:volume={volumeAudio} bind:muted={muted} id={"audio" + stationIndex()}>
        <source src={firstStation.url} />
        <source src={firstStation.urlResolved} />
    </audio>
    <div class="w-fit p-14 mx-auto" class:playing={!paused} style="background-image: url({vinyl});background-size:cover;">
        <img alt="Radio Station Icon" class="rounded-full" src={firstStation.favicon} width="50" />
    </div>
    <div class="grid grid-cols-3 my-4">
        {#if stationIndex() === 0}
            <img alt="Back Button" class="mx-auto opacity-40" src="/back.png" width="25" />
        {:else}
            <img alt="Back Button" class="mx-auto cursor-pointer" src="/back.png" width="25" on:keydown={()=>{}} on:click={()=>{prev();paused=true}} />
        {/if}
        
        {#if paused}
            <img alt="Play Button" class="mx-auto cursor-pointer" src="/play.png" width="25" on:keydown={()=>{}} on:click={()=>{paused = false}} />
        {:else}
            <img alt="Play Button" class="mx-auto cursor-pointer" src="/pause.png" width="25" on:keydown={()=>{}} on:click={()=>{paused = true}} />
        {/if}

        {#if stationIndex() === lastStationIndex()}
            <img alt="Forward Button" class="mx-auto opacity-40" src="/next.png" width="25"/>
        {:else}
            <img alt="Forward Button" class="mx-auto cursor-pointer" src="/next.png" width="25" on:keydown={()=>{}} on:click={()=>{next();paused=true}} />
        {/if}
        
    </div>
    <div class="flex">
        <input id="default-range" bind:value={volume} type="range" class="h-2 w-11/12 my-auto mx-2  rounded-lg  cursor-pointer dark:bg-gray-700">
        <div>
            {#if muted}
                <img width="30" alt="Mute" src="/mute.png" on:click={()=>muted = false} on:keydown={()=>{}}/>
            {:else}
            <img width="30" alt="Volume" src="/volume.png" on:click={()=>muted = true} on:keydown={()=>{}}/>
            {/if}
        </div>
    </div>
    {#if secondStation !== undefined}
        {#if secondStation.name !== "" }
            <div class="mt-10">
                <p class="font-bold text-xl">Next Station</p>
                <div class="flex border border-gray-400 my-2 rounded-md">
                    <img alt="Radio Icon" src={secondStation.favicon} width="150" />
                    <div class="w-full my-auto">
                        <span>
                            <p class="text-xl font-bold">{secondStation.name}</p>
                            <p>{secondStation.country}</p>
                        </span>
                    </div>
                </div>
            </div>
            {:else}
            <p class="my-10 font-bold text-xl">This is the last station.</p>
        {/if}
    {/if}
    
</div>