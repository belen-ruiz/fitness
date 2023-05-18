// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa-feuyfBsCLS7R6TdbL-Fd9sZ5t556zU",
  authDomain: "movie-app-bbdf7.firebaseapp.com",
  projectId: "movie-app-bbdf7",
  storageBucket: "movie-app-bbdf7.appspot.com",
  messagingSenderId: "119282463036",
  appId: "1:119282463036:web:8f26f30df4c140c75dee39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)