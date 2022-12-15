

import getStations from '$lib/updateRadio';

import  initializeFirebase from '../../../../../lib/initFirebase'
initializeFirebase()

export async function load() {
    return {
        // stations:filteredStations.sort((a, b)=> a.votes - b.votes)
        stations:getStations().then(stations=>stations)
    }
};

