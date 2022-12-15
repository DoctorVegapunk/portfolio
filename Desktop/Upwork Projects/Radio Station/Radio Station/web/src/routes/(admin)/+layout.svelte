
<script>
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import { onMount } from "svelte";
    let loaded = false
    onMount(()=>{
        onAuthStateChanged(getAuth(),user=>{
            if(!user){
                location.replace("/login")
            }
            else{
                
                loaded = true
            }
        })
    })
</script>
<main>
    
    {#if loaded} 
    <div class="row " style="width:100vw;height:100vh" >
        
        <div class="col-4 sidePanel h-full">
            <p class="subtitle mt-3 ml-5" style="color:white;">Admin Panel</p>
            <div class="adminLink" style="display: block;">
                <a href="/admin/news">News</a>
                <a href="/admin/radio/add">Radio Stations</a>
                <a href="/admin/manage"> Admin Management</a>
            </div>
        </div>
        <div class="col-8" style="width:75vw;height:100vh;overflow:auto">
                <slot></slot>
        </div>
    </div>
    
    {/if}
</main>