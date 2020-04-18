import * as firebase from "firebase";
import "firebase/auth";

export const createAuthUser = (user: firebase.User) => {
  if (!user || !user.uid) {
    return null
  }
  let providerData = user.providerData.find(d => d.uid);

  return {
    uid: user.uid,
    providerUid: providerData?.uid || null,
    displayName: user.displayName,
    email: user.email,
  };
}

type AuthUserInfoProps = {
  firebaseUser?: firebase.User
}
export const createAuthUserInfo = ({
  firebaseUser = null,
}: AuthUserInfoProps = {}) => {
  return {
    user: createAuthUser(firebaseUser),
  };
};
