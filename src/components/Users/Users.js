import React from 'react';
import { useUsersContext } from '../../context/Users/UsersProvider';

export default function Users() {
  const { users } = useUsersContext();

  return (
    <div className='users-container'>
      <ul>
        {users.map((user) => (
          <li key={`${user.login}`}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}
