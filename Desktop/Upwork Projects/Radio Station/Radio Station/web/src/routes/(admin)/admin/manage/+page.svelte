<script>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import {getFirestore,getDoc, doc, setDoc, addDoc, collection, updateDoc} from 'firebase/firestore'

    // admin.auth().deleteUser("CbD80gHHK4NK4w02dx2Jg7biOxi2")z
    const auth = getAuth()
    const firestore = getFirestore()
    export let email;
    export let password; 
    import Alert from "../../../../components/minor/alert.svelte";
    import Success from "../../../../components/minor/success.svelte";
    
    getAuth()
    let success = false;
    let error = false;

    const createUser = () =>{
        createUserWithEmailAndPassword(auth,email,password).then(userRef=>{
            setDoc(doc(firestore,"Users",userRef.user.uid),{
                uid:userRef.user.uid,
                email,
                password
            })
            .then(()=>{success=true; error=false})
            .catch(()=>{
            success=false;
            error = true;
            })
        })
        .catch(()=>{
            success=false;
            error = true;
        })
    }

</script>

<main class="w-5/6 mx-auto mt-16">
    <p class="mb-5">You can add users by making a new email and password for them.</p>
    <form>
        <input bind:value={email} placeholder="Email" class="w-full border border-gray-500 rounded-md py-3 px-2 my-4" />
        <input bind:value={password} placeholder="Password" class="w-full border border-gray-500 rounded-md py-3 px-2 my-4" />
        <button on:click|preventDefault={createUser} class="btn !bg-slate-600 text-white mt-4 float-right border-0">Create Account</button>
    </form>
    
    <br style="clear:both" />
    {#if error}
    <div class="block mt-16">
        <Alert msg="Failed to create user, password must be at least 8 characters long and the email has to be a new email(not used with another admin account)."/>
    </div>
    {/if}
    {#if success}
        <div class="block mt-16">
            <Success msg={"Successfully created user with Email: " + email + " and Password: " + password + "." }/>
        </div>
    {/if}

</main>