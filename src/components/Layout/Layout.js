import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import './Layout.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='page-container'>{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
