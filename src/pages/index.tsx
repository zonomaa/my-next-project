import React from 'react';
import withAuth from 'helper/withAuth';
import UserStateInfo from 'components/UserStateInfo';
import { auth } from 'utils/firebase/auth';

function Index() {
  return (
    <>
      <h1>My Next Project</h1>
      <UserStateInfo />

      <button onClick={() => auth.signOut()}>ログアウト</button>
    </>
  );
}

export default withAuth(Index);
