<script>
	import { addDoc, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
    export let station
    export let index

    const deleteStation = (station) =>{
        deleteDoc(doc(getFirestore(),"Radios",station.id)).then(()=>{
            location.reload()
        })
    }

</script>
<div>
        <div class=" flex ">
            <span class="mx-auto my-10">
                {#if station.favicon === ""}
                <img width="150" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt={station.name}/>
                {:else}
                    <object alt="d" data={station.favicon} type="image/png" title="Default Image" width="150" class="image">
                        <img width="150" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt={station.name}/>
                    </object>
                {/if}
                
            </span>
        </div>
        <p class="text-md font-semibold text-center" >{station.name}</p>
        <span class="flex my-4">

            <button class="btn btn-danger btn-lg mx-auto" data-bs-toggle="modal" data-bs-target={"#"+"station"+index}>Remove Station</button>
  
  <!-- Modal -->
  <div class="modal fade" id={"station" + index} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Radio Station: {station.name}</h1>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            
            <span class="mx-auto my-10">
                {#if station.favicon === ""}
                <img width="150" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt={station.name}/>
                {:else}
                    <object alt="d" data={station.favicon} type="image/png" title="Default Image" width="150" class="image">
                        <img width="150" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt={station.name}/>
                    </object>
                {/if}
                <p>Are you sure you want to delete {station.name}</p>
               
            </span>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button class="btn btn-danger" on:click={()=>{deleteStation(station)}}>Confirm</button>
        </div>
      </div>
    </div>
  </div>
        </span>
       
</div>