// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBRpGj8z1BLApPUl28idpAcwNK4RnmqlK4",
    authDomain: "clone-2e724.firebaseapp.com",
    projectId: "clone-2e724",
    storageBucket: "clone-2e724.appspot.com",
    messagingSenderId: "844820433768",
    appId: "1:844820433768:web:8b586c0f8b2ffb4ab1a4dd",
    measurementId: "G-P9B0ZFF43T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};