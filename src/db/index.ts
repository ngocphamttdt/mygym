import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCzwnlQXTVY0ZdHMubk_J3mrstBRHPbZCs',
  authDomain: 'my-gym-ca7fb.firebaseapp.com',
  projectId: 'my-gym-ca7fb',
  storageBucket: 'my-gym-ca7fb.appspot.com',
  messagingSenderId: '1098666295459',
  appId: '1:1098666295459:web:46f3de802c3bd40e777f16',
  measurementId: 'G-YLHMH9PRWV'
}

// init app
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
