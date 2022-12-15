import { writable,get } from 'svelte/store';

export const radios:any = writable(null);
export const radiosValue = get(radios)

export const radioGenres:any = writable(null) 
export const radioGenresValue:any = get(radioGenres)