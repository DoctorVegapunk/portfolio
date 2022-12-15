<script>
	import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
    import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
  

    export let station;
    export let index;
   

    let input;
    let image;
	let showImage = false;
    function onChange() {
        
        const file = input.files[0];
        console.log(file);
		
        if (file) {
			showImage = true;

            const reader = new FileReader();
            reader.addEventListener("load", function () {
                image.setAttribute("src", reader.result);
            });
            reader.readAsDataURL(file);
			
			return;
        } 
    
		showImage = false; 
    }

    let name;
    const uploadFile = (station) =>{
        if(showImage){
           
                const storage = getStorage();
                const imageRef = ref(storage, "radioIcons/" + input.files[0].name);
                
                uploadBytes(imageRef, input.files[0]).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    getDownloadURL(imageRef).then(url=>{
                        addDoc(collection(getFirestore(),"Radios"),{
                            name:station.name,
                            favicon:url,
                            language:station.language,
                            country:station.country,
                            state:station.state,
                            tags:station.tags,
                            homepage:station.homepage,
                            url:station.url,
                            urlResolved:station.urlResolved,
                            countryCode:station.countryCode,
                            votes:station.votes,
                            genre:station.genre
                        }).then((docData)=>{
                            updateDoc(doc(getFirestore(),"Radios",docData.id),{
                                id:docData.id
                            }).then(()=>{
                                location.reload()
                            })
                        })
                    })
                })
                .catch(err=>console.log(err));
                
        }   
        else{
                addDoc(collection(getFirestore(),"Radios"),{
                    name:station.name,
                    favicon:station.favicon,
                    language:station.language,
                    country:station.country,
                    state:station.state,
                    tags:station.tags,
                    homepage:station.homepage,
                    url:station.url,
                    urlResolved:station.urlResolved,
                    countryCode:station.countryCode,
                    votes:station.votes,
                    genre:station.genre
                }).then((docData)=>{
                    updateDoc(doc(getFirestore(),"Radios",docData.id),{
                        id:docData.id
                    }).then(()=>{
                        location.reload()
                    })
                })
          
            
        }
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

            <button class="btn btn-success btn-lg mx-auto" data-bs-toggle="modal" data-bs-target={"#"+"station"+index}>Add Station</button>
  
  <!-- Modal -->
  <div class="modal fade" id={"station" + index} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Radio Station: {station.name}</h1>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            
            <span class="mx-auto my-10">
                {#if showImage}
                    <img bind:this={image} width="150" src="" alt="Preview" />
                {:else}
                    {#if station.favicon === ""}
                    <img width="150" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt={station.name}/>
                    {:else}
                        <object alt="d" data={station.favicon} type="image/png" title="Default Image" width="150" class="image">
                            <img width="150" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt={station.name}/>
                        </object>
                    {/if}
                {/if}
               
                <div class="mb-3">
                    <label for="formFile" class="form-label">Input custom Image to overwrite default image.</label>
                    <input class="form-control" type="file" id="formFile" bind:this={input} on:change={onChange} >
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Input custom Name to overwrite default name.</label>
                    <input class="form-control form-control-lg" type="text"  placeholder="Input a name to ovewrite default name" aria-label="Name Input" bind:value={station.name} on:change={()=>{console.log(station)}}>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Input custom country code to overwrite default country code.</label>
                    <input class="form-control form-control-lg" type="text"  placeholder="Input custom country code to overwrite default country code." aria-label="Name Input" bind:value={station.countryCode} on:change={()=>{console.log(station)}}>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Input custom country to overwrite default country.</label>
                    <input class="form-control form-control-lg" type="text"  placeholder="Input custom country to overwrite default country." aria-label="Name Input" bind:value={station.country} on:change={()=>{console.log(station)}}>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Input custom genre to overwrite default genre.</label>
                    <input class="form-control form-control-lg" type="text"  placeholder="Input custom genre to overwrite default genre." aria-label="Name Input" bind:value={station.genre} on:change={()=>{console.log(station)}}>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Input custom first url to overwrite default first url.</label>
                    <input class="form-control form-control-lg" type="text"  placeholder="IInput custom first url to overwrite default first url." aria-label="Name Input" bind:value={station.url} on:change={()=>{console.log(station)}}>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Input custom second url to overwrite default second url.</label>
                    <input class="form-control form-control-lg" type="text"  placeholder="Input custom second url to overwrite default second url." aria-label="Name Input" bind:value={station.urlResolved} on:change={()=>{console.log(station)}}>
                </div>


            </span>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button class="btn btn-success" on:click={()=>{uploadFile(station)}}>Confirm</button>
        </div>
      </div>
    </div>
  </div>
        </span>
       
</div>