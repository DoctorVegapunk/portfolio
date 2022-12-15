import { writable,get } from 'svelte/store';

export const news:any = writable(null);
export const newsValue = get(news)

export const newsCategories:any = writable(null);
export const newsCategoriesValue = get(news)
