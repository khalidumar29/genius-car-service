// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1XXAkUc3m9Lhu4rwSWPAnY4hQGVEzHso",
  authDomain: "genius-car-services-cde8b.firebaseapp.com",
  projectId: "genius-car-services-cde8b",
  storageBucket: "genius-car-services-cde8b.appspot.com",
  messagingSenderId: "357447175927",
  appId: "1:357447175927:web:63198c477e3048227d0df2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
