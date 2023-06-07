// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcMGtf_-i8ik70t7Ritb16jz0nvxE7HDU",
  authDomain: "goodcitycars-d43bb.firebaseapp.com",
  projectId: "goodcitycars-d43bb",
  storageBucket: "goodcitycars-d43bb.appspot.com",
  messagingSenderId: "696013556539",
  appId: "1:696013556539:web:e0299957b90714c9f8051e",
  measurementId: "G-SGT8YMENTX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.firestore();

export {db};