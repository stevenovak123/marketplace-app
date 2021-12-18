// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAVzeq8oOyaSaVP0OTWNXFu08yxzjCacLI',
	authDomain: 'marketplace-4d535.firebaseapp.com',
	projectId: 'marketplace-4d535',
	storageBucket: 'marketplace-4d535.appspot.com',
	messagingSenderId: '704021514999',
	appId: '1:704021514999:web:784d51f6d54cca4804e1f2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
