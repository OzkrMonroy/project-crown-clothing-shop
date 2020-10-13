import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARZDS__CgVQufA2xno3eGRU24XoJyGEbM",
  authDomain: "crwn-db-8f78b.firebaseapp.com",
  databaseURL: "https://crwn-db-8f78b.firebaseio.com",
  projectId: "crwn-db-8f78b",
  storageBucket: "crwn-db-8f78b.appspot.com",
  messagingSenderId: "317523647694",
  appId: "1:317523647694:web:d5abcd81b31c671595849f",
  measurementId: "G-0M06E032F4"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if(!userSnapshot.exists){
    const { displayName, email } = userAuth;
    const userCreatedAt = new Date();

    try {
      await userRef.set({
        userDisplayName: displayName,
        userEmail: email,
        userCreatedAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef
}

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;