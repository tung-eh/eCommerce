import React from 'react';

import {Location, navigate} from '@reach/router';
import {Sidebar} from '../../../molecules';
import Logo from '../../shared/Logo';

const NAVS = [
  {title: 'Dashboard', key: '/admin', iconName: 'dashboard'},
  {title: 'Categories', key: '/admin/categories', iconName: 'cubes'},
  {title: 'Products', key: '/admin/products', iconName: 'cube'},
];

const Navigator = ({width}) => (
  <Location>
    {({location}) => (
      <Sidebar
        width={width}
        navs={NAVS}
        selectedKeys={[location.pathname]}
        onSelectKey={key => navigate(key)}
        logo={
          <>
            <Logo />
            <span style={{marginLeft: 10}}>Admin</span>
          </>
        }
        onClickLogo={() => navigate('/admin')}
      />
    )}
  </Location>
);

export default Navigator;
