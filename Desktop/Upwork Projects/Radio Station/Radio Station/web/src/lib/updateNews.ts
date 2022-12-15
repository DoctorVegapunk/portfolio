import {getDocs, getFirestore,query,collection, doc} from 'firebase/firestore'

import {news} from '../store/news';
import {newsValue} from '../store/news'

import { newsCategories } from '../store/news';
import { newsCategoriesValue } from '../store/news';

import initFirebase from './initFirebase'
initFirebase()

let localNews:any = newsValue
let localNewsCategories:any = newsCategoriesValue

export const getNews=async()=>{
    if(!newsValue){
        localNews = []
        const q =  query(collection(getFirestore() , "News"));
        await getDocs(q).then((querySnapshot)=>querySnapshot.forEach(doc=> {localNews.push(doc.data())} ))  
        
        await news.update((curentData:any)=>{
            return localNews
        }) 
        
        return localNews
        
    }

    await news.update((curentData:any)=>{
        return localNews
    })
    
    return localNews
}
export const getNewsCategories = async() =>{
    if(!newsCategoriesValue){
        localNewsCategories = []
        const q =  query(collection(getFirestore() , "News"));
        await getDocs(q).then((querySnapshot)=>querySnapshot.forEach(doc=> {
            if(!localNewsCategories.includes(doc.data().category) && doc.data().category !== null){
                localNewsCategories.push(doc.data().category);
            }
        }))  
        
        await newsCategories.update((curentData:any)=>{
            return localNewsCategories
        }) 
        
        return localNewsCategories
        
    }

    await newsCategories.update((curentData:any)=>{
        return localNewsCategories
    })
    
    return localNewsCategories
}



     
