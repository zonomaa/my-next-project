import React, { useContext } from 'react';
import { AuthUserInfoContext } from 'utils/firebase/hooks';

const UserStateInfo = () => {
  const {
    user: { displayName },
  } = useContext(AuthUserInfoContext);

  return (
    <div>
      <h2>ようこそ</h2>
      <span>{displayName} さん</span>
    </div>
  );
};

export default UserStateInfo;
