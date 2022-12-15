<script>
	import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
	import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
	import Tiptap from "../../../../../components/minor/Tiptap.svelte";

    
    export let data;
    const news = data.news
    let editableNews = data.news
    let editable = data.editable
    const {categories} = data
    console.log(data);
    console.log(editable);
    
    
    let input;
    let image;
	let showImage = false;
    let category = null;

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
        console.log(showImage);
        
    }
    const changeNews = (id,image,title) =>{
        console.log(category);
        
        const description = document.getElementById(id)?.children[1].children[0].innerHTML?.toString()
        console.log(description);
        console.log(image);
        
        if(showImage){
            console.log("dfdf");
            
            const imageRef = ref(getStorage(), "newsIcons/" + input.files[0].name);
            uploadBytes(imageRef, input.files[0]).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(imageRef).then(url=>{
                    updateDoc(doc(getFirestore(),"News",id),{
                        image:url,
                        title,
                        description, 
                        category
                    }).then(()=>{
                        alert("Document Updated")
                        location.reload()
                    })
                })
            })
            
        }
        else{
            updateDoc(doc(getFirestore(),"News",id),{
                title,
                description, 
                category
            }).then(()=>{
                alert("Document Updated")
                location.reload()
            })
        }
    }
</script>

<main>
    {#each news as singleNews,i}
        <div class="bg-gray-100 px-4 py-24 my-2 roundedlg border border-gray-200">
            
            {#if editable[i]}
               
                {#if showImage}
                    
                    <img bind:this={image} src="" alt="Preview" width="250" />
                {:else}
                    {#if singleNews.image}
                        <img src={editableNews[i].image} alt="News" width="250" />
                        {:else}
                        <p>No image to show.</p>

                    {/if}
                {/if}
                
                <input	bind:this={input} on:change={onChange} type="file"/>
                <input placeholder="Edit Title" bind:value={editableNews[i].title} class="w-full border border-gray-500 rounded-md py-3 px-2 my-4" />
                <div id={editableNews[i].id}>
                    <Tiptap content={editableNews[i].description}/>
                </div>
                <div class="flex">
                    <input placeholder="New News Category" bind:value={category}  class="w-1/2 border border-gray-500 rounded-md py-3 px-2 my-4 mr-3"/>
                    <select class="form-select w-1/2 py-3 my-auto ml-3" aria-label="Default select example" style="height:fit-content" on:change={updateCategorySelect}>
                        <option selected>No Category</option>
                        {#each categories as category}
                            <option value={i+1}>{category}</option>
                        {/each}
                    </select>
                </div>
                <button class="btn !bg-green-600 text-white mt-4 mx-2 float-right border-0" on:click|preventDefault={()=>{changeNews(editableNews[i].id,editableNews[i].image,editableNews[i].title)}}>Publish Edited News Post</button>
                <button class="btn !bg-red-600 text-white mt-4 mx-2 float-right border-0"  on:click={()=>{editable[i]=false}}>Close Edit</button>
            {:else}     
                {#if singleNews.image}
                    <img src={editableNews[i].image} alt="News" width="250" />
                {/if}
                <p class="font-bold text-xl">{singleNews.title}</p>
                <p>{@html singleNews.description}</p>
                {#if singleNews.category}
                    <div class="mt-10">
                        <p class="text-xl font-semibold">Category</p>
                        <p class="my-2">{singleNews.category}</p>
                    </div>
                {/if}
                <button class="btn !bg-slate-600 text-white mt-4 float-right border-0" on:click={()=>{editable[i]=true}}>Edit</button>

            {/if}

            

        </div>
    {:else}
        <p>No news to edit.</p>
    {/each}
</main>