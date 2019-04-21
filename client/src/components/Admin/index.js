import React from 'react';
import {Router} from '@reach/router';

const Navigator = () => 'Navigator';

const Layout = ({children}) => (
  <>
    <Navigator />
    {children}
  </>
);

const Dashboard = () => 'Dashboard';

const Admin = () => (
  <Layout>
    <Router>
      <Dashboard path="/" />
    </Router>
  </Layout>
);

export default Admin;
