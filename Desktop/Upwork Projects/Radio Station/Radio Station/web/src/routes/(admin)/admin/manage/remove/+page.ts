import {getDocs, getFirestore,query,collection, doc} from 'firebase/firestore'
   
import getUsers from '$lib/updateUsers'
export async function load() {
    return {
        users:getUsers().then(users=>users)
    }
};