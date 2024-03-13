import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7KMPxLFe_-cFPiR3vu15cmZc4Jt8p0ZI",
    authDomain: "react-signupform-f83e4.firebaseapp.com",
    projectId: "react-signupform-f83e4",
    storageBucket: "react-signupform-f83e4.appspot.com",
    messagingSenderId: "423591009244",
    appId: "1:423591009244:web:ba248a31039cfa83660d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();