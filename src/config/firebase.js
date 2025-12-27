// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_YrM7TloAwx6KX-3VFQ1ODmCyrtURFRI",
  authDomain: "vite-contact-20db0.firebaseapp.com",
  projectId: "vite-contact-20db0",
  storageBucket: "vite-contact-20db0.firebasestorage.app",
  messagingSenderId: "945907493392",
  appId: "1:945907493392:web:15ccc02f2113393e0a7895"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);