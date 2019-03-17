import React from 'react';
import {Router} from '@reach/router';

import Navigator from './Navigator';
import Home from './Home';
import About from './About';
import Sample from './Sample';

const App = () => (
  <>
    <Navigator />
    <Router>
      <Home path="/" />
      <About path="about" />
      <Sample path="sample" />
    </Router>
  </>
);

export default App;
