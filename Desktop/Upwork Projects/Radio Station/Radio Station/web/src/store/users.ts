import { writable,get } from 'svelte/store';

export const users:any = writable(null);
export const usersValue = get(users)
