import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './config';

export default () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};
