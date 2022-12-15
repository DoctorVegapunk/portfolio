<script>
	import Alert from "../../../../../components/minor/alert.svelte";
import { addDoc, collection, getFirestore, updateDoc,doc } from "firebase/firestore";
	import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";


    let input;
    let image;
	let showImage = false;
    function onChange() {
        
        const file = input.files[0]
		
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
    let country;
    let countryCode;
    let genre;
    let streamURL;

    let alert = false

    const addRadioStation = () =>{
        if(name === null || name === undefined || name === "" || country === null || country === undefined || country === "" || countryCode === null || countryCode === undefined || countryCode === "" ||genre === null || genre === undefined || genre === "" ||streamURL === null || streamURL === undefined || streamURL === "" || !showImage){
            alert = true
        }
        else{
            alert = false
            const storage = getStorage();
            const imageRef = ref(storage, "radioIcons/" + input.files[0].name);

            uploadBytes(imageRef, input.files[0]).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(imageRef).then(url=>{
                    addDoc(collection(getFirestore(),"Radios"),{
                        favicon:url,
                        name,
                        country,
                        countryCode,
                        tags:[genre],
                        url:streamURL,


                    }).then(docData=>{
                        updateDoc(doc(getFirestore(),"Radios",docData.id),{
                            id:docData.id
                        }).then(()=>{
                            image = null                         
                            name = null;
                            country = null;
                            countryCode = null;
                            genre = null;
                            streamURL = null;
                        })
                    }) 
                })
            })
            
        }
    }

</script>

<div class="mx-10 border border-gray-500 p-10 rounded-lg shadow-lg mb-10">
    
    <p class="text-xl font-semibold">Radio Station Image</p>
    <img class="mx-auto my-6" bind:this={image} width="150" src="" alt="No Icon selected" />
    <input class="form-control my-20 mb-6" type="file" id="formFile" bind:this={input} on:change={onChange}> 
    <div class="my-5">
        <p class="text-xl font-semibold">Radio Station Name</p>
        <input class="form-control form-control-lg" type="text"  placeholder="Radio Station Image" aria-label="Name Input" bind:value={name}>
    </div>
    <div class="my-5">
        <p class="text-xl font-semibold">Radio Station Country</p>
        <input class="form-control form-control-lg" type="text"  placeholder="Radio Station Country" aria-label="Name Input" bind:value={country}>
    </div>
    <div class="my-5">
        <p class="text-xl font-semibold">Radio Station Country Code</p>
        <input class="form-control form-control-lg" type="text"  placeholder="Radio Station Country Code" aria-label="Name Input" bind:value={countryCode}>
    </div>
    <div class="my-5">
        <p class="text-xl font-semibold">Radio Station Genre</p>
        <input class="form-control form-control-lg" type="text"  placeholder="Radio Station Genre" aria-label="Name Input" bind:value={genre}>
    </div>
    <div class="my-5">
        <p class="text-xl font-semibold">Radio Station Stream URL</p>
        <input class="form-control form-control-lg" type="text"  placeholder="Radio Station Stream URL" aria-label="Name Input" bind:value={streamURL}>
    </div>
    <div class="flex">
        <button class="mx-auto btn btn-lg btn-success" on:click={addRadioStation}>Add Radio Station</button>
    </div>
    {#if alert}
        <Alert msg="Please fill out all the fields in order to publish the radio station." />
    {/if}
</div>