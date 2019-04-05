import styled from 'styled-components';
import React from 'react';
import {Link, Location} from '@reach/router';

import logo from '../../../assets/images/logo.png';

const StyledHeader = styled.div`
  display: flex;
  padding: 0px;
  background-color: #43d580;
  height: 60px;
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    ({left: 'flex-end', right: 'flex-start'}[props.align])};
  flex: 1;
`;

const LogoLink = styled(Link)`
  height: 100%;
  display: flex;
`;

const Navigator = () => {
  return (
    <Location>
      {({location}) => (
        <StyledHeader>
          <StyledMenu align="left">
            <Link to="/">Home</Link>
            <Link to="products">Products</Link>
          </StyledMenu>
          <LogoLink to="">
            <img src={logo} style={{height: '100%'}} />
          </LogoLink>
          <StyledMenu align="right">
            <Link to="about">About</Link>
            <Link to="sample">Sample</Link>
          </StyledMenu>
        </StyledHeader>
      )}
    </Location>
  );
};

export default Navigator;
