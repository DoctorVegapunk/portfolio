<script>
    import Alert from '../../../../components/minor/alert.svelte';
	import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
	import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
	import Tiptap from '../../../../components/minor/Tiptap.svelte';
    export let data;
    
    let error = false
    
    const {categories} = data
    let title = "";
   
    
    let input;
    let image;
	let showImage = false;
    let category =null;
    let description
    function updateCategorySelect(e){
        if(e.target.selectedOptions[0].text === "No category"){
            category = null
        }
        else{
            category = e.target.selectedOptions[0].text
        }
    }

    function onChange() {
            const file = input.files[0];
            
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
    const addNews = () =>{
        description = document.getElementsByClassName("editor")[0].children[0].innerHTML
        
        if(title === null || title === undefined || title === "" || description === null || description === undefined || description === "" || category === null || category === undefined || category === ""){    
            error = true
        }
        else{
            error = false
            if(!showImage){
                addDoc(collection(getFirestore(),"News"),{
                    title,
                    description,
                    category
                }).then((docData)=>{
                    updateDoc(doc(getFirestore(),"News",docData.id),{
                        id:docData.id
                    })
                    .then(()=>{
                        alert("Successfully uploaded news post.")
                     location.reload()
                        
                    })
                })
                .catch(error=>console.log(error))

            }
            else{
                const imageRef = ref(getStorage(), "newsIcons/" + input.files[0].name);
                    uploadBytes(imageRef, input.files[0]).then((snapshot) => {
                        console.log('Uploaded a blob or file!');
                        getDownloadURL(imageRef).then(url=>{
                            addDoc(collection(getFirestore(),"News"),{
                                image:url,
                                title,
                                description,
                                category
                            }).then((docData)=>{
                                updateDoc(doc(getFirestore(),"News",docData.id),{
                                    id:docData.id
                                }).then(()=>{
                                    alert("Successfully uploaded news post.")
                                location.reload()
                                    
                                })
                            })
                        })  
                    })
                }
            }
        }
</script>


<main>
    
    <div class="w-5/6 mx-auto my-20">
        {#if showImage}
		    <img bind:this={image} src="" alt="Preview" width="250"/>
        {:else}
            <p class="my-10">No Image selected,the news post will not have an image.</p>
        {/if}
        <input	bind:this={input} on:change={onChange} type="file"/>
        <input placeholder="News Title" bind:value={title} class="w-full border border-gray-500 rounded-md py-3 px-2 my-4" />
        <Tiptap content="" />
        <div class="flex">
            <input placeholder="New News Category" bind:value={category}  class="w-1/2 border border-gray-500 rounded-md py-3 px-2 my-4 mr-3"/>
            <select class="form-select w-1/2 py-3 my-auto ml-3" aria-label="Default select example" style="height:fit-content" on:change={updateCategorySelect}>
                <option selected>No Category</option>
                {#each categories as category,i}
                    <option value={i+1}>{category}</option>
                {/each}
            </select>
        </div>
        {#if error}
            <Alert msg="Please fill out all the fields for the news post to be valid."/>
        {/if}
        <button class="btn !bg-slate-600 text-white mt-4 float-right border-0" on:click|preventDefault={addNews}>Create News Post</button>
       
    </div>
    
</main>