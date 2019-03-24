import {Router} from '@reach/router';
import React from 'react';

import About from './About';
import AuthProvider from './AuthProvider';
import Home from './Home';
import Login from './Login';
import Navigator from './Navigator';
import Sample from './Sample';
import SignUp from './SignUp';

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
  </AuthProvider>
);

export default App;
