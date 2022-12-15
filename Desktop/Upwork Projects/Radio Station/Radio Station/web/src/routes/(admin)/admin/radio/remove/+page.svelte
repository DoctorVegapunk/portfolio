<script>
	import Stationbox from "../../../../../components/major/stationboxremove.svelte";

    export let data;
    const stations = data.stations;
</script>
<main>
    <div class="grid grid-cols-3 mt-20">
        {#each stations as station,i}
            <Stationbox station={station} index={i}/>
        {/each}
    </div>
</main>