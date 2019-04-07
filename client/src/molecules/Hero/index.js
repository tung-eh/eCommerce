import React from 'react';
import styled from 'styled-components';
import {colors} from '../../constants';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-image: url("${props => props.img}");
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.ufoGreen};
  opacity: 0.8;
`;

const ChildrenContainer = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
  z-index: 1;
`;

const Hero = ({img, children}) => (
  <Background img={img}>
    <Overlay />
    <ChildrenContainer>{children}</ChildrenContainer>
  </Background>
);

export default Hero;
