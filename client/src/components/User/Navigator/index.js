import {Location, navigate} from '@reach/router';
import React from 'react';

import {Navbar} from '../../../molecules';
import Logo from '../../shared/Logo';

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
          logo={<Logo />}
          onClickLogo={() => navigate('/')}
        />
      )}
    </Location>
  );
};

export default Navigator;
