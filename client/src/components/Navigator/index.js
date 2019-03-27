import {Link, navigate} from '@reach/router';
import React, {useContext} from 'react';

import {AuthContext} from '../AuthProvider';
import {useFetch} from '../../hooks';

const AuthNav = () => {
  const {authInfo, updateAuthInfo} = useContext(AuthContext);
  const {triggerFetch} = useFetch({
    url: '/api/logout',
    method: 'POST',
    successCb: data => {
      alert('Logged out successfully');
      updateAuthInfo(null);
      navigate('/login');
    },
  });

  return authInfo ? (
    <a href="#" onClick={triggerFetch}>
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
