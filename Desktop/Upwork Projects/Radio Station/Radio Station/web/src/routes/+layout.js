export const prerender = true
export const trailingSlash = 'always'

import { initializeApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAJMNMJ5whQO482l2m18VVRS4N-j0B7kiY",
  authDomain: "test-8e0d3.firebaseapp.com",
  projectId: "test-8e0d3",
  storageBucket: "test-8e0d3.appspot.com",
  messagingSenderId: "685819987713",
  appId: "1:685819987713:web:2aad8cdf9f951bd8993d00",
  measurementId: "G-XZC8FX0DVS"
};
if(!getApps().length){
    initializeApp(firebaseConfig)
}