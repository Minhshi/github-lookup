import React from 'react';
import { UsersProvider } from './context/Users/UsersProvider';
import { UserProvider } from './context/User/UserProvider';
import Layout from './components/Layout/Layout';
import Users from './components/Users/Users';

export default function App() {
  return (
    <UsersProvider>
      <div className='app-title'>Hello</div>
      <Layout>
        <UserProvider>
          <Users />
        </UserProvider>
      </Layout>
    </UsersProvider>
  );
}
