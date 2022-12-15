<script>
	import { getAuth } from "firebase/auth";
	import { collection, deleteDoc, doc, getDocs, getFirestore, query } from "firebase/firestore";
 
    const firestore = getFirestore()
    export const ssr = false;
 

    export let data;
    const users = data.users

    
    const deleteUser = (uid) =>{
     deleteDoc(doc(firestore,"Users",uid)).then(()=>{
        location.reload()
     })
    }

</script>
<main class="ml-10">
    <p>Here is a list of users available.</p>
    <div class="my-10 mx-10">
        {#each users as user,i}
            <div class="flex bg-gray-200 p-4 rounded-md border-2 border-gray-300 my-10">
                <img src="/icons/admin.png" alt="Admin Icon" width="40"/>
                <p class="my-auto ml-4">{user.email}</p>
                <span class="ml-auto my-auto">
                    <img src="/icons/delete.png" width="30" alt="Delete Icon" style="cursor:pointer" on:keydown={()=>{deleteUser(user.uid)}} on:click={()=>{deleteUser(user.uid)}}/>
                </span>
            </div>
        {:else}
            <div>
                <p>No other admins created.</p>
                <a href="/admin/manage">Create admin account.</a>
            </div>
        {/each}
    </div>

</main>