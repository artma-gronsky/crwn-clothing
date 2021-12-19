import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCOCGgviJL999f8hf88jXBtrlPDA7Ve2vY",
    authDomain: "crwn-db-11f38.firebaseapp.com",
    projectId: "crwn-db-11f38",
    storageBucket: "crwn-db-11f38.appspot.com",
    messagingSenderId: "940665410258",
    appId: "1:940665410258:web:4eb07f3f909729b921530b",
    measurementId: "G-0SS7V9TVY9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

