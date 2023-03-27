// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgE0neSVj1SO7qoX3LuT09-UkWu3XyGy4",
  authDomain: "music-8c393.firebaseapp.com",
  projectId: "music-8c393",
  storageBucket: "music-8c393.appspot.com",
  messagingSenderId: "847716276397",
  appId: "1:847716276397:web:fcef4b5481ef0901000e24",
  measurementId: "G-V0ENC39SPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);