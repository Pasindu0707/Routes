import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig={
    apiKey: "AIzaSyAKiymE1MLhd3vjLmTop4_cmGb1pDWHA6o",
  authDomain: "example-6c617.firebaseapp.com",
  projectId: "example-6c617",
  storageBucket: "example-6c617.appspot.com",
  messagingSenderId: "39338600366",
  appId: "1:39338600366:web:ab097d0b0dd77256e9ca3f",
  measurementId: "G-75YBV8813B"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}