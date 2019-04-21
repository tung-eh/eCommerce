import {Router} from '@reach/router';
import React from 'react';

import {Footer} from '../../molecules';
import About from './About';
import Home from './Home';
import Login from './Login';
import Navigator from './Navigator';
import Sample from './Sample';
import SignUp from './SignUp';

const Layout = ({children}) => (
  <>
    <Navigator />
    {children}
    <Footer>Simple eCommerce ©2019 Created by Tung Teng</Footer>
  </>
);

const User = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <About path="about" />
      <Sample path="sample" />
      <Login path="login" />
      <SignUp path="signup" />
    </Router>
  </Layout>
);

export default User;
