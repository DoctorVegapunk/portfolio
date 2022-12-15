
import { getNews } from '$lib/updateNews';
import getStations from '$lib/updateRadio';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export async function load(){
    return{
        stations:getStations().then(stations=>stations),
        news:getNews().then(news=>news)
    }
}