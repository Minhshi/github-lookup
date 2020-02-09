import React from 'react';
import { UsersProvider } from './context/Users/UsersProvider';
import Layout from './components/Layout/Layout';
import Users from './components/Users/Users';

export default function App() {
  return (
    <UsersProvider>
      <Layout>
        <div className='app-title'>Hello</div>
        <Users />
      </Layout>
    </UsersProvider>
  );
}
