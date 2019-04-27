import React from 'react';
import styled from 'styled-components';

import {Drawer, Icon} from '../../atoms';
import {colors} from '../../constants';

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  :hover {
    background-color: ${colors.mintCreamDark};
    color: ${colors.onyx};
  }
  ${props =>
    props.isSelected &&
    `
    color: gray;
    background-color: ${colors.mintCream};
  `};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  justify-content: center;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
`;

const Sidebar = ({
  width,
  logo,
  navs,
  selectedKeys,
  onSelectKey,
  onClickLogo,
}) => (
  <Drawer
    open
    style={{
      width,
      backgroundColor: 'gray',
      color: 'white',
    }}>
    <LogoWrapper onClick={onClickLogo}>{logo}</LogoWrapper>
    {navs.map(({title, key, iconName}) => (
      <Nav
        key={key}
        isSelected={selectedKeys.indexOf(key) !== -1}
        onClick={() => onSelectKey(key)}>
        <Icon name={iconName} style={{marginRight: 10}} />
        {title}
      </Nav>
    ))}
  </Drawer>
);

export default Sidebar;
