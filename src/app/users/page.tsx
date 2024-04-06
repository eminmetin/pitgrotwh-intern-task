// components/UsersComponent.tsx

import React from 'react';
import users from '../../../users.json';
import User from '../components/User';

const UsersComponent: React.FC = () => {
  console.log(users);
  return (
    <div>
      <User />
    </div>
  );
};

export default UsersComponent;
