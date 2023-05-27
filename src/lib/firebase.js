// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVwOE-AXfpFei2wG1_MA7DyVzfWuCs7iY",
  authDomain: "sejochat.firebaseapp.com",
  projectId: "sejochat",
  storageBucket: "sejochat.appspot.com",
  messagingSenderId: "436702915563",
  appId: "1:436702915563:web:ab8a76e89ed57f2bd6c7ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
