// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGiRzmmRG79b_sa-GOlM-CMVrkmMQ9zA0",
  authDomain: "test1-19d6b.firebaseapp.com",
  projectId: "test1-19d6b",
  storageBucket: "test1-19d6b.appspot.com",
  messagingSenderId: "810365798198",
  appId: "1:810365798198:web:059cd4764fd5eb26c49597",
  measurementId: "G-7LCNTG668T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
