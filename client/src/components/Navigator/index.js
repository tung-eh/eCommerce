import {Layout, Menu, Icon} from 'antd';
import styled from 'styled-components';
import React from 'react';
import {Link, Location} from '@reach/router';

import logo from '../../../assets/images/logo.png';

const {Header, Footer, Sider, Content} = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  padding: 0px;
`;

const StyledMenu = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    ({left: 'flex-end', right: 'flex-start'}[props.align])};
  flex: 1;
  line-height: 64px;
`;

const LogoLink = styled(Link)`
  height: 100%;
  padding: 10px 20px;
  display: flex;
`;

const Navigator = () => {
  return (
    <Location>
      {({location}) => (
        <StyledHeader>
          <StyledMenu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            align="left">
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/products">
              <Link to="products">Products</Link>
            </Menu.Item>
          </StyledMenu>
          <LogoLink to="">
            <img src={logo} style={{height: '100%'}} />
          </LogoLink>
          <StyledMenu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            align="right">
            <Menu.Item key="/about">
              <Link to="about">About</Link>
            </Menu.Item>
            <Menu.Item key="/sample">
              <Link to="sample">Sample</Link>
            </Menu.Item>
          </StyledMenu>
          <Menu
            mode="horizontal"
            style={{display: 'none', position: 'absolute'}}>
            <Menu.Item key="3">
              <Icon type="menu" />
            </Menu.Item>
          </Menu>
        </StyledHeader>
      )}
    </Location>
  );
};

export default Navigator;
