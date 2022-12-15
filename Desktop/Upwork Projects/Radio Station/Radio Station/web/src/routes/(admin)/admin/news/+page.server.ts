import {getNewsCategories} from '$lib/updateNews';

export function load(){
    return{
        categories:getNewsCategories().then(categories =>categories)
    }
}