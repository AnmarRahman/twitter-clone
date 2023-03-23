// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDcbEZiVLVLlmjx4ql2RKoIRP5i9hDmQHc",
  authDomain: "twitter-clob.firebaseapp.com",
  projectId: "twitter-clob",
  storageBucket: "twitter-clob.appspot.com",
  messagingSenderId: "677831022332",
  appId: "1:677831022332:web:dc84bbc079ab5b2fe1a979",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
