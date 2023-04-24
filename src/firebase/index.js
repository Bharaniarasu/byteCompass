// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwNa-xxe3DVf128InE_VPHMLI1kRXCTRQ",
  authDomain: "user-details-2bb0b.firebaseapp.com",
  projectId: "user-details-2bb0b",
  storageBucket: "user-details-2bb0b.appspot.com",
  messagingSenderId: "1031150011160",
  appId: "1:1031150011160:web:9b05e6911663b8e7b1d46d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
