// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDBZUOyE7oFjqgaVVSGA6bz7jCgEIEHCM4',
  authDomain: 'pantry-tracker-d7f0d.firebaseapp.com',
  projectId: 'pantry-tracker-d7f0d',
  storageBucket: 'pantry-tracker-d7f0d.appspot.com',
  messagingSenderId: '136066186181',
  appId: '1:136066186181:web:ead58f0d21be28853229ac',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
