import React from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
  height: 100%;
  position: fixed;
  width: ${props => (props.open ? '250px' : 0)};
  top: 0;
  ${props => `${props.position}: 0;`};
  transition: 0.5s;
  overflow: hidden;
`;

export default Drawer;
