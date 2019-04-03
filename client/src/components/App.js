import {Router} from '@reach/router';
import React from 'react';
import {Layout, Breadcrumb} from 'antd';

import About from './About';
import AuthProvider from './AuthProvider';
import Home from './Home';
import Login from './Login';
import Navigator from './Navigator';
import Sample from './Sample';
import SignUp from './SignUp';

const {Footer, Content} = Layout;

const App = () => (
  <AuthProvider>
    <Layout>
      <Navigator />
      <Content>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{background: '#fff', padding: 24, minHeight: 280}}>
          <Router>
            <Home path="/" />
            <About path="about" />
            <Sample path="sample" />
            <Login path="login" />
            <SignUp path="signup" />
          </Router>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Simle eCommerce ©2019 Created by Tung Teng
      </Footer>
    </Layout>
  </AuthProvider>
);

export default App;
