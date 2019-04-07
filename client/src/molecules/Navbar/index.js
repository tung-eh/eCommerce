import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon, Drawer} from '../../atoms';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f8fa;
  border-bottom: 1px solid #eaf0f6;
  box-shadow: 0 1px 2px #eaf0f6;
  position: relative;
`;

const Navs = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: ${props =>
    ({left: 'flex-end', right: 'flex-start'}[props.align])};
  flex: 1;
  @media (max-width: 480px) {
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
  color: #43d580;
  font-weight: 500;
  ${props =>
    props.isSelected
      ? `
      background-color: #E8F1F2;
      border-bottom: 2px solid #43d580;
    `
      : `
      background-color: #F5F8FA;
      `} :hover {
    background-color: #36d278;
    color: #fff;
  }
  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

const LogoNav = styled(Nav)`
  background-color: #43d580;
  color: #fff;
  box-shadow: 0 0 4px 1px green;
  margin-top: 1px;
`;

const Bar = styled.div`
  height: 100%;
  position: absolute;
  right: 20px;
  display: flex;
  @media (min-width: 481px) {
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
          color="#43D580"
          style={{zIndex: 1}}
          onClick={() => setOpenDrawerState(open => !open)}
        />
      </Bar>
      <Drawer
        open={openDrawerState}
        position="right"
        style={{
          backgroundColor: '#f5f8fa',
          boxShadow: '-1px 0 2px #eaf0f6',
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
