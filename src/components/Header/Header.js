import React from 'react';
import Logo from '../../images/logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='links'>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
