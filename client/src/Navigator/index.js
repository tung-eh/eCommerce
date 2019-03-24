import {Link, navigate} from '@reach/router';
import React, {useContext} from 'react';

import {AuthContext} from '../AuthProvider';

const AuthNav = () => {
  const {authInfo, updateAuthInfo} = useContext(AuthContext);

  const handleClickLogout = () => {
    fetch('/api/logout', {
      method: 'POST',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        alert('Logged out successfully');
        updateAuthInfo(null);
        navigate('/login');
      })
      .catch(error => console.log(error));
  };

  return authInfo ? (
    <a href="#" onClick={handleClickLogout}>
      Logout
    </a>
  ) : (
    <>
      <Link to="login">Login</Link> | <Link to="signup">Register</Link>
    </>
  );
};

const Navigator = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="about">About</Link> |{' '}
    <Link to="sample">Sample</Link>
    <span style={{float: 'right'}}>
      <AuthNav />
    </span>
  </nav>
);

export default Navigator;
