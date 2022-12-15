
import { getNews } from '$lib/updateNews';

export function load(){
    return{
        news:getNews().then(news=>news)
    }
}