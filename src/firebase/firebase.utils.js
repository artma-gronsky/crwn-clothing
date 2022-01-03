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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        try {
            await userRef.set({
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                email: userAuth.email,
                createdAt: new Date(),
                userAboutHimself: 'I love Shafak!'
            });
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, force = false) => {
    const collectionRef = firestore.collection(collectionKey);

    const collectionSnapShot = await collectionRef.get();
    if (collectionSnapShot.empty || force) {
        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj);
        });

        return await batch.commit();
    }

};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;

