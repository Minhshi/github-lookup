import React from 'react';
import { useUsersContext } from '../../context/Users/UsersProvider';
import { useUserContext } from '../../context/User/UserProvider';

export default function Users() {
  const { users } = useUsersContext();
  const { user } = useUserContext();

  return (
    <div className='users-container'>
      <h1>{user.login}</h1>
      <ul>
        {users.map((u) => (
          <li key={`${u.login}`}>{u.login}</li>
        ))}
      </ul>
    </div>
  );
}
