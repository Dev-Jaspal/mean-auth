// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZk6MM5IiOtXWqWcB0mIfj7FUQplntFOY",
  authDomain: "mern-auth-c3e44.firebaseapp.com",
  projectId: "mern-auth-c3e44",
  storageBucket: "mern-auth-c3e44.appspot.com",
  messagingSenderId: "711485859184",
  appId: "1:711485859184:web:fa9d7391391f5bcd94dbb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);