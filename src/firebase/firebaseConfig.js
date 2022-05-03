import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU8in8UE6a2IcsF6KLoqEt_lk3q5GPyZs",
  authDomain: "sprint-3-7d221.firebaseapp.com",
  projectId: "sprint-3-7d221",
  storageBucket: "sprint-3-7d221.appspot.com",
  messagingSenderId: "820693339583",
  appId: "1:820693339583:web:10b96b9557a83ea063e50a"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };