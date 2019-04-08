import {Router} from '@reach/router';
import React from 'react';

import About from './About';
import AuthProvider from './AuthProvider';
import Home from './Home';
import Login from './Login';
import Navigator from './Navigator';
import Sample from './Sample';
import SignUp from './SignUp';
import {Footer} from '../molecules';

const App = () => (
  <AuthProvider>
    <Navigator />
    <Router>
      <Home path="/" />
      <About path="about" />
      <Sample path="sample" />
      <Login path="login" />
      <SignUp path="signup" />
    </Router>
    <Footer>Simple eCommerce ©2019 Created by Tung Teng</Footer>
  </AuthProvider>
);

export default App;
