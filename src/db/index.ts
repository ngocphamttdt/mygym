// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config = {
  apiKey: 'AIzaSyCzwnlQXTVY0ZdHMubk_J3mrstBRHPbZCs',
  authDomain: 'my-gym-ca7fb.firebaseapp.com',
  projectId: 'my-gym-ca7fb',
  storageBucket: 'my-gym-ca7fb.appspot.com',
  messagingSenderId: '1098666295459',
  appId: '1:1098666295459:web:46f3de802c3bd40e777f16',
  measurementId: 'G-YLHMH9PRWV'
}

// init app
firebase.initializeApp(config)

// export default firestore
export const db = (firebase as any).firestore()
