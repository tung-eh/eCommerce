import React from 'react';
import {Link} from '@reach/router';

const Navigator = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="about">About</Link> |{' '}
    <Link to="sample">Sample</Link>
  </nav>
);

export default Navigator;
