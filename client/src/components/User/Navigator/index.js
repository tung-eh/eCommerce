import styled from 'styled-components';
import React from 'react';
import {Link, Location, navigate} from '@reach/router';

import {Navbar} from '../../../molecules';
import {Icon} from '../../../atoms';

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
          logo={
            <>
              <Icon name="books" width={30} color="white" />
              <span
                style={{
                  color: 'white',
                  marginLeft: 10,
                  fontSize: 18,
                  fontFamily: `"Quarz 974"`,
                }}>
                TuBo
              </span>
            </>
          }
          onClickLogo={() => navigate('/')}
        />
      )}
    </Location>
  );
};

export default Navigator;
