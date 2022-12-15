<script>
	import { redirect } from "@sveltejs/kit";
    import { getAuth,signInWithEmailAndPassword, signOut } from "firebase/auth";
	import { doc, getDoc, getFirestore } from "firebase/firestore";
	import Alert from "../../components/minor/alert.svelte";
    const auth = getAuth()
    console.log(auth.currentUser);
    
    let email;
    let password;
    let error = false;
    const login = () =>{
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
            
            getDoc(doc(getFirestore(),"Users",user.user.uid)).then((docData)=>{
                if(docData.exists()){
                    location.replace("/admin")
                }
                else{
                    signOut(getAuth())
                    error = true
                }
            })
        })
        .catch(()=>{
            error = true
        })
    }
</script>
<main>
    <p class="title text-center my-10 underline">Admin Login</p>
    <div class="shadow-xl py-20 px-40 mx-20 mb-16" style="border:0.2px solid rgba(0,0,0,0.1) !important">
        <form >
            <div class="my-4">
                <p class="text-xl font-semibold">Email</p>
                <input bind:value={email} type="email" placeholder="Email" class="py-4 text-lg border border-gray-200 w-full pl-3 my-2" />
            </div>

            <div class="my-4">
                <p class="text-xl font-semibold">Password</p>
                <input bind:value={password} type="password" placeholder="Password" class="py-4 text-lg border border-gray-200 w-full pl-3 my-2" />
            </div>     
            <button on:click|preventDefault={login} class="flex btn btn-lg btn-success mx-auto mt-12">LOGIN</button>  
            {#if error}
            <div class="mt-10">
                <Alert msg="Invalid Details please check the details entered for typos." />
            </div>
        {/if}
        </form>
    </div>
</main>