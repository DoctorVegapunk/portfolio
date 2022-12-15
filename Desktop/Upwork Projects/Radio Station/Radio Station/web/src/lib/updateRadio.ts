import {getDocs, getFirestore,query,collection, doc} from 'firebase/firestore'
import {radios} from '../store/radios';
import {radiosValue} from '../store/radios'
import initFirebase from './initFirebase'
initFirebase()
let stations:any = radiosValue


const getStations=async()=>{
    if(!radiosValue){
        stations = []
        const q =  query(collection(getFirestore() , "Radios"));
        await getDocs(q).then((querySnapshot)=>querySnapshot.forEach(doc=> {stations.push(doc.data());} ))  
        
        await radios.update((curentData:any)=>{
            return stations
        })
        
        return stations
        
    }

    await radios.update((curentData:any)=>{
        return stations
    })
    
    return stations
}



     

export default getStations