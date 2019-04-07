import styled from 'styled-components';
import React from 'react';
import {Link, Location, navigate} from '@reach/router';
import {Navbar} from '../../molecules';

import logo from '../../../assets/images/logo.png';

const NAVS = {
  left: [{title: 'Home', key: '/'}, {title: 'Products', key: '/products'}],
  right: [{title: 'About', key: '/about'}, {title: 'Sample', key: '/sample'}],
};

const Navigator = () => {
  return (
    <Location>
      {({location}) => (
        <Navbar
          leftNavs={NAVS.left}
          rightNavs={NAVS.right}
          selectedKeys={[location.pathname]}
          onSelectKey={key => navigate(key)}
          logo={<img src={logo} width={50} style={{margin: '-10px 0'}} />}
          onClickLogo={() => navigate('/')}
        />
      )}
    </Location>
  );
};

export default Navigator;
