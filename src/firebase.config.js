
import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA1ENO2TsY6HS8n1nrJ2JEkagwumsVzdz0",
  authDomain: "maltimart-c6a4a.firebaseapp.com",
  projectId: "maltimart-c6a4a",
  storageBucket: "maltimart-c6a4a.appspot.com",
  messagingSenderId: "875227673140",
  appId: "1:875227673140:web:1b46acba91e43386755061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app