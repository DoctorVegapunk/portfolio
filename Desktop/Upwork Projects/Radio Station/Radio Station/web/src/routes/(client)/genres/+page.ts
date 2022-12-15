
import stations from '../../../lib/updateRadio'
import getStations from '../../../lib/updateRadio'

const getGenres = async() =>{
    
    const genres:any = []
    
    await stations().then(stations=>{
        stations.forEach((station:any)=>{
            if(!genres.includes(station.genre) && station.genre!== null && station.genre !==  undefined){
                genres.push(station.genre)
            }
        })
    })
    return genres
}


export function load(){
    return{
        genres:getGenres().then(genres=>genres),
    }
}

