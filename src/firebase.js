// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMqOj063KETLeSaMMAhmkmEhceDNdcwuY",
  authDomain: "kyleclementeportfolio.firebaseapp.com",
  projectId: "kyleclementeportfolio",
  storageBucket: "kyleclementeportfolio.appspot.com",
  messagingSenderId: "930226094328",
  appId: "1:930226094328:web:8721785ea2d5d47ba27b0d",
  measurementId: "G-EL8NW7TJSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);