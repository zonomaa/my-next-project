import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "./init";
import { createAuthUserInfo } from "./user";

// Init the Firebase app.
initFirebase();

export const AuthUserInfoContext = React.createContext(createAuthUserInfo());

export const useAuthUserInfo = () => {
  return React.useContext(AuthUserInfoContext);
};

export const useFirebaseAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  const onChange = (user) => {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};