// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtQPlkMztE_pOqou84GAjzmgedgGbdZ5A',
  authDomain: 'ibdb-6c905.firebaseapp.com',
  databaseURL:
    'https://ibdb-6c905-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ibdb-6c905',
  storageBucket: 'ibdb-6c905.appspot.com',
  messagingSenderId: '301932410966',
  appId: '1:301932410966:web:9ef0cd4684bb9ff58ba3f7',
  measurementId: 'G-45KDP4Q6FD',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const rtdb = getDatabase(app)
