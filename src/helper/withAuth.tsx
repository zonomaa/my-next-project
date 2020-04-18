import React from 'react';
import router from 'next/router';
import { useFirebaseAuth, AuthUserInfoContext } from 'utils/firebase/hooks';
import { createAuthUser } from 'utils/firebase/user';

export default (ComposedComponent) => {
  const WithAuthUserComponent = (props) => {
    const { initializing, user: firebaseUser } = useFirebaseAuth();
    const AuthUserFromClient = createAuthUser(firebaseUser);
    const user = AuthUserFromClient || null;

    if (!initializing && !user) {
      router.push('/login');
      return <></>;
    }

    return (
      <AuthUserInfoContext.Provider value={{ user }}>
        {initializing ? <>Loading...</> : <ComposedComponent {...props} />}
      </AuthUserInfoContext.Provider>
    );
  };
  return WithAuthUserComponent;
};
