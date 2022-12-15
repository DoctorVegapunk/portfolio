import { getNews, getNewsCategories } from '$lib/updateNews';
import { newsValue } from '../../../../../store/news';

const editable:any = []
getNews().then((news)=>{
    news.forEach(()=>{
        editable.push(false)
    })
})

export function load(){
    return{
        news:getNews().then(news=>news),
        editable,
        categories:getNewsCategories().then(categories=>categories)
    }
}