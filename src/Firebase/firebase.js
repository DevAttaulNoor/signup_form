import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"
import firebase from "firebase/compat/app"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA42dNQgljixPg86xjb2SmD25J4iYm1et4",
    authDomain: "react-userauthform.firebaseapp.com",
    projectId: "react-userauthform",
    storageBucket: "react-userauthform.appspot.com",
    messagingSenderId: "713375983757",
    appId: "1:713375983757:web:13ccde342d619e42dc1ac4"
});

const auth = firebase.auth()
const storage = firebase.storage();
const db = firebaseConfig.firestore();

export { auth, storage, db }