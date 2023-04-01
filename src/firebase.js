// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFdY2hVKAJl92NNyNqok-9moFn8kBKA4",
  authDomain: "pcweb6-ba9b9.firebaseapp.com",
  projectId: "pcweb6-ba9b9",
  storageBucket: "pcweb6-ba9b9.appspot.com",
  messagingSenderId: "609955815925",
  appId: "1:609955815925:web:235a118bb6a32b503ac0bc"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);