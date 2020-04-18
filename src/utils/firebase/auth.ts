import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from './init';

// Init the Firebase app.
initFirebase();

// Googleサービスアカウント
const GProvider = new firebase.auth.GoogleAuthProvider();

export const googleAccountLogin = () => {
  return firebase.auth().signInWithPopup(GProvider);
};

export const auth = firebase.auth();
