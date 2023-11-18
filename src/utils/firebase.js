// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-on-400010.firebaseapp.com",
  projectId: "blog-on-400010",
  storageBucket: "blog-on-400010.appspot.com",
  messagingSenderId: "978210643121",
  appId: "1:978210643121:web:27da530ca0292d61f51690"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);