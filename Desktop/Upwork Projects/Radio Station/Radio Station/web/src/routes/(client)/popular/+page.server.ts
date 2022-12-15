import getStations from "$lib/updatePopularRadios";
export async function load(){
    return{
        stations: await getStations().then(stations=>stations)
    }
}