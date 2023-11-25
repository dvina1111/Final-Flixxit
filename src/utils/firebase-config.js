// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdowrZLATvsniRAzjHmbLMwy-_JObUBhs",
  authDomain: "flixxit-react-project-59ca8.firebaseapp.com",
  projectId: "flixxit-react-project-59ca8",
  storageBucket: "flixxit-react-project-59ca8.appspot.com",
  messagingSenderId: "24635283723",
  appId: "1:24635283723:web:48af2b4d46655f639daa0e",
  measurementId: "G-HDLEM29GNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
