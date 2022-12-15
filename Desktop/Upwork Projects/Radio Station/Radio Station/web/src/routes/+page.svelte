<script>
	import RadioBox from '../components/major/radioBox.svelte';

    import NewsComponent from '../components/major/newsComponent.svelte';
   
    export let data;
    const stations = data.stations 
    const news = data.news
    let selectedRadio = stations[0];
    let radioHidden = true
    // const test = () =>{
    //     navigator.geolocation.getCurrentPosition((result)=>{console.log(result)
    //         const latitiude= result.coords.latitude
    //         const longitude = result.coords.longitude
    //         const apiURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitiude}&longitude=${longitude}&localityLanguage=en`
    //         fetch(apiURL)
    //         .then(res => res.json())
    //         .then(data=>{
    //             console.log(data.countryCode);
    //         })
    //     },
    //     ()=>console.log("Error"))
        
    // }
    // const nextModal = (i:any) =>{
    //     const modal = document.getElementById("station" + i)
    //     const nextModal = document.getElementById("station" + (i+1))

    //     console.log(modal?.classList);
    //     modal?.style.display = "none"
    //     modal?.removeAttribute("role")
    //     modal?.removeAttribute("aria-modal")
    //     modal?.classList.remove("show")

    //     nextModal?.style.display = "block"
    //     nextModal?.setAttribute("role","modal")
    //     nextModal?.setAttribute("aria-hidden","true")
    //     nextModal?.classList.add("show")

        

    // }
    // const prevModal = (i:any) =>{
    //     const modal = document.getElementById("station" + i)
    //     const nextModal = document.getElementById("station" + (i-1))

    //     console.log(modal?.classList);
    //     modal?.style.display = "none"
    //     modal?.removeAttribute("role")
    //     modal?.removeAttribute("aria-modal")
    //     modal?.classList.remove("show")

    //     nextModal?.style.display = "block"
    //     nextModal?.setAttribute("role","modal")
    //     nextModal?.classList.add("show")

        

    // }
    // const closeModal = (i) =>{
    //     const audio = <HTMLVideoElement> document.getElementById("audio" + i)
    //     console.log(audio.pause())
    //     const body = document.body
    //     // body.style.overflow = ""
    //     // body.style.paddingRight= "0"
    //     body.setAttribute("style","")
    //     body.classList.remove("modal-open")
    //     document.getElementsByClassName("modal-backdrop")[0].remove()

        
    //     const modal = document.getElementById("station" + i)
    //     modal?.style.display = "none"
    //     modal?.setAttribute("aria-hidden","true")
    //     modal?.removeAttribute("role")
    //     modal?.removeAttribute("aria-modal")
    //     modal?.classList.remove("show")

    // }
    // const openModal = (i) =>{
    //     const body = document.body
    //     body.style.overflow = "hidden"
    //     body.style.paddingRight= "0px"
    //     body.classList.add("modal-open")
    //     const backDrop = document.body.appendChild(document.createElement("div"))
    //     backDrop.classList.add("modal-backdrop")
    //     backDrop.classList.add("fade")
    //     backDrop.classList.add("show")
        
    //     const modal = document.getElementById("station" + i)
    //     modal?.style.display = "block"
    //     modal?.setAttribute("role","dialog")
    //     modal?.classList.add("show")
    // }

</script>
<div class="row py-3 bg-gray-100 md:hidden" style="overflow: hidden;" >
    <div class="col-6">
        <p class="ml-3 my-auto text-sm">Croatia Radio Station</p>
    </div>
    <div class="col-4">

    </div>
    <div class="col-2">
        <img alt="Menu Icon" src="/menu.png" width="20" class="float-right my-auto" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" />
    </div>      
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <p class="text-lg">Croatia Radio Station</p>
        </div>
        <div class="offcanvas-body">
            <div class="side-list text-xl">
                <p data-bs-dismiss="offcanvas" aria-label="Close"><a  href="/">Home</a></p>
                <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/genres">Genres</a></p>
                <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/search">Search</a></p>
                <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/news">News</a></p>
                <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/popular">Popular Radio Stations</a></p>
                <p class="float-right text-black text-md" data-bs-dismiss="offcanvas" aria-label="Close">Close Menu</p>
            </div>
        </div>
    </div>
</div>

<div class="w-full md:p-10 md:pr-4 bg-gray-100 h-full">
   
	<div class="row h-full">
		<div class="col-3 hidden md:block">
            <div class="h-full rounded-lg bg-white" style="height:88vh">
                <p class="font-semibold pl-4 py-3 text-4xl">Croatia Radi</p>
                <div class="pl-8 side-list text-xl">
                    <p><a href="/">Home</a></p>
                    <p><a href="/genres">Genres</a></p>
                    <p><a href="/search">Search</a></p>
                    <p><a href="/news">News</a></p>
                    <p><a href="/popular">Popular Radio Stations</a></p>
                </div>
            </div>
        </div>
		<div class="col-12 col-md-6">
            
            <div class="noScroll bg-white p-4 rounded-lg overflow-y-scroll" class:hidden={radioHidden}  style="height:88vh;" >
                <p class="text-2xl font-bold">Radio Stations</p>
                <!-- <RadioBox/> -->
                <div class="grid md:grid-cols-3 grid-cols-2 my-4 md:my-10 mx-1 md:mx-4 gap-2 md:gap-8"  >
                    {#each stations as station,i}
                    
                        <div class="text-center border border-gray-500 py-2 px-2 rounded shadow-md shadow-slate-200" >
                            <img alt="Radio Icon" class="mx-auto" src={station.favicon} width="150" />
                            <p class="font-semibold">{station.name}</p>
                            <button class="my-2 flex font-bold text-white bg-pink-800 round rounded py-1 w-full mx-auto text-lg shadow-slate-400 shadow-md">
                                <span class="flex my-auto mx-auto px-2">
                                    <span class="flex mx-1 text-xl">Play</span>
                                    <img width="30" alt="Play Icon" src="/icons/play.png" on:keydown={()=>{}} on:click={()=>{radioHidden = false;selectedRadio = station}} />
                                </span>
                            </button>
                            <!-- Modal -->
                            <!-- <div class="modal fade" id={"station"+i} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content shadow-xl !shadow-amber-200 !bg-amber-100">
                                    <div class="modal-header border-0">
                                        <h1 class="modal-title fs-5 font-bold" id="exampleModalLabel">{station.name}</h1>
                                        <button class="btn-close" on:click={()=>{closeModal(i)}} aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                   
                                        <RadioBox firstStation={station} secondStation={stations[i+1]} stationIndex={()=>{return i}} lastStationIndex={()=>(stations.length - 1)} next={()=>{nextModal(i)}} prev={()=>{prevModal(i)}}/>
                                    </div>
                                    <div class="modal-footer border-0">
                                    <button class="btn !bg-amber-200 hover:!bg-amber-300" on:click={()=>{closeModal(i)}}>Close</button>
                                    </div>
                                </div>
                                </div>
                            </div>  -->
                        </div>
                    {:else}
                        <p>No radio stations to display.</p>
                    {/each}
                    
                </div>

            </div>
            <div class:hidden={!radioHidden} class="bg-white h-full p-4 rounded-lg">
                {#if selectedRadio}
                    <p class="text-xl font-bold">{selectedRadio.name}</p>
                    <div class="flex my-10">
                        <img src={selectedRadio.favicon} width="100" alt="test"  />
                    </div>
                {/if}
            </div>
		</div>
		<div class="col-3 hidden md:block"> 
			<NewsComponent news={news}/> 
		</div> 
	</div>

        
</div>