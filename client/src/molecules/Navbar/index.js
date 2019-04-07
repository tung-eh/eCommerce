import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon, Drawer} from '../../atoms';
import {colors, breakpoints} from '../../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.mintCream};
  border-bottom: 1px solid ${colors.mintCreamDark};
  box-shadow: 0 1px 2px ${colors.mintCreamDark};
  position: relative;
`;

const Navs = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: ${props =>
    ({left: 'flex-end', right: 'flex-start'}[props.align])};
  flex: 1;
  @media (max-width: ${breakpoints.mobileMax}px) {
    display: none;
  }
`;

const Nav = styled.div`
  margin: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  cursor: pointer;
  color: ${colors.ufoGreen};
  font-weight: 500;
  ${props =>
    props.isSelected
      ? `
      background-color: ${colors.mintCreamDark};
      border-bottom: 2px solid ${colors.ufoGreen};
    `
      : `
      background-color: ${colors.mintCream};
      `} :hover {
    background-color: ${colors.ufoGreenDark};
    color: white;
  }
  @media (max-width: ${breakpoints.mobileMax}px) {
    padding: 10px 20px;
  }
`;

const LogoNav = styled(Nav)`
  background-color: ${colors.ufoGreen};
  box-shadow: 0 0 4px 1px green;
  margin-top: 1px;
`;

const Bar = styled.div`
  height: 100%;
  position: absolute;
  right: 20px;
  display: flex;
  @media (min-width: ${breakpoints.tabletMin}px) {
    display: none;
  }
`;

const mapNavs = (navs, {selectedKeys, onSelectKey}) =>
  navs.map(({title, key}) => (
    <Nav
      key={key}
      isSelected={selectedKeys.indexOf(key) !== -1}
      onClick={() => onSelectKey(key)}>
      {title}
    </Nav>
  ));

const Navbar = ({
  leftNavs,
  rightNavs,
  selectedKeys,
  onSelectKey,
  logo,
  onClickLogo,
}) => {
  const [openDrawerState, setOpenDrawerState] = useState(false);

  return (
    <Wrapper>
      <Navs align="left">{mapNavs(leftNavs, {selectedKeys, onSelectKey})}</Navs>
      <LogoNav onClick={onClickLogo}>{logo}</LogoNav>
      <Navs align="right">
        {mapNavs(rightNavs, {selectedKeys, onSelectKey})}
      </Navs>
      <Bar>
        <Icon
          name={openDrawerState ? 'times' : 'bars'}
          color={colors.ufoGreen}
          style={{zIndex: 11}}
          onClick={() => setOpenDrawerState(open => !open)}
        />
      </Bar>
      <Drawer
        open={openDrawerState}
        position="right"
        style={{
          backgroundColor: colors.mintCream,
          boxShadow: `-1px 0 2px ${colors.mintCreamDark}`,
        }}>
        <div
          style={{
            padding: '50px 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}>
          {mapNavs(leftNavs.concat(rightNavs), {selectedKeys, onSelectKey})}
        </div>
      </Drawer>
    </Wrapper>
  );
};

export default Navbar;
