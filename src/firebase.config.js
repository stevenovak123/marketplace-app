
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
	apiKey: 'AIzaSyBAiqGHFMq5DAoQmWyliHmYdX9VSbbDat4',
	authDomain: 'marketplace-app-ad8ed.firebaseapp.com',
	projectId: 'marketplace-app-ad8ed',
	storageBucket: 'marketplace-app-ad8ed.appspot.com',
	messagingSenderId: '712468084523',
	appId: '1:712468084523:web:25618b0049c96ea812376e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
