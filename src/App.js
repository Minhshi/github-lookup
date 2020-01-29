import React from 'react';
import { UsersProvider } from './context/UsersProvider';
import Users from './components/Users';

export default function App() {
  return (
    <UsersProvider>
      <div className='app-title'>Hello</div>
      <Users />
    </UsersProvider>
  );
}
