import {getDocs, getFirestore,query,collection, doc} from 'firebase/firestore'
import {users} from '../store/users';
import {usersValue} from '../store/users'
import initFirebase from './initFirebase'
initFirebase()
let stations:any = usersValue


const getUsers=async()=>{
    if(!usersValue){
        stations = []
        const q =  query(collection(getFirestore() , "Users"));
        await getDocs(q).then((querySnapshot)=>querySnapshot.forEach(doc=> {stations.push(doc.data());} ))  
        
        await users.update((curentData:any)=>{
            return stations
        })
        
        return stations
        
    }

    await users.update((curentData:any)=>{
        return stations
    })
    
    return stations
}



     

export default getUsers