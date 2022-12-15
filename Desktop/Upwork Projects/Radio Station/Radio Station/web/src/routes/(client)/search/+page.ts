import getStations from "$lib/updateRadio";

export async function load(){
    return{
    stations: await getStations().then(data=>data)
    }
}