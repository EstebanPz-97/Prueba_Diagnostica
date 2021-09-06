import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = initializeApp ({
  apiKey: "AIzaSyCJRemvFN4z6SvNzD3DgMyu4S7y4QjsPGo",
  authDomain: "preguntas-alteru.firebaseapp.com",
  projectId: "preguntas-alteru",
  storageBucket: "preguntas-alteru.appspot.com",
  messagingSenderId: "1024288455936",
  appId: "1:1024288455936:web:02793932d3982acb9e87e5",
  measurementId: "G-QPF9WRDMFD"
});

export const db = getFirestore();
