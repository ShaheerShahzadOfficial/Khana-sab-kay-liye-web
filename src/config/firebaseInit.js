// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged   } from "firebase/auth";
import {getFirestore, doc, onSnapshot,collection, query, where} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIfY4Q9IZeanPKyY0V8FpJQE1tsh-nUpw",
  authDomain: "newprojectpractice.firebaseapp.com",
  projectId: "newprojectpractice",
  storageBucket: "newprojectpractice.appspot.com",
  messagingSenderId: "574441053330",
  appId: "1:574441053330:web:c4cecee72e79d18593da4b",
  measurementId: "G-PYH7BGXE8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth()
const db = getFirestore()


export {
auth,db,createUserWithEmailAndPassword,signInWithEmailAndPassword,
onAuthStateChanged,doc,onSnapshot,collection,query,where
}