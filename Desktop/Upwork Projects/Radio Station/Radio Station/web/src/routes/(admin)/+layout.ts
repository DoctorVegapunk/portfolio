import initializeFirebase from '$lib/initFirebase';
import { redirect } from '@sveltejs/kit';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

initializeFirebase()
