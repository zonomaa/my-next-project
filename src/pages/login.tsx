import React from 'react';
import { googleAccountLogin } from 'utils/firebase/auth';
import router from 'next/router';

const Login = () => {
  const loginAction = () => {
    googleAccountLogin()
      .then((_) => {
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.error({ ...errorCode, errorMessage, email, credential });
      });
  };
  return (
    <div>
      <button onClick={loginAction}>Googleログイン</button>
    </div>
  );
};

export default Login;
