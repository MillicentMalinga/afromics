// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
process.env.NODE_ENV_FIREBASE_API_KEY = process.env.NODE_ENV_FIREBASE_API_KEY || process.env.REACT_APP_FIREBASE_API_KEY;


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "afromics-60408.firebaseapp.com",
  projectId: "afromics-60408",
  storageBucket: "afromics-60408.appspot.com",
  messagingSenderId: "1028215184317",
  appId: "1:1028215184317:web:24bcc4619819bfd4fa10d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
