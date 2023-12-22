import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tecnomarket-7a5ff.firebaseapp.com",
  projectId: "tecnomarket-7a5ff",
  storageBucket: "tecnomarket-7a5ff.appspot.com",
  messagingSenderId: "611540692834",
  appId: "1:611540692834:web:5f4377524a6df32cfe063b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);