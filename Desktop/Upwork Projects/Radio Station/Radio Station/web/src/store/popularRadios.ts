import { writable,get } from 'svelte/store';

export const radios:any = writable(null);
export const radiosValue = get(radios)
