import {getNews} from '$lib/updateNews'
export async function load(){
    return{
        
        news: await getNews().then(news => news )
    
    }
}