import { RadioBrowserApi, StationSearchType } from 'radio-browser-api'
import {getDocs, getFirestore,query,collection, doc} from 'firebase/firestore'
   
import  initializeFirebase from '../../../../../lib/initFirebase'
initializeFirebase()

// const api = new RadioBrowserApi('My Radio App')

// const q =  query(collection(getFirestore() , "Radios"));
// const urls:Array<Object> = []
// await getDocs(q).then((querySnapshot)=>querySnapshot.forEach(doc=> urls.push(doc.data().url) ))

// const stations = await api.searchStations({
//     removeDuplicates:true,
    
// })
// const stationCodes:any = []
// await stations.forEach(station=>{
//     if(!stationCodes.includes(station.countryCode)){
//         stationCodes.push(station.countryCode)
//     }
// })


// export async function load() {
//     return {
//         stationCodes
        
//     }
// };
