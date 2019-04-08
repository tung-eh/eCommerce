import React from 'react';
import styled from 'styled-components';
import {colors} from '../../constants';

const Background = styled.div`
  height: 200px;
  min-height: 80vh;
  background-image: url("${props => props.img}");
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.ufoGreen};
  opacity: 0.8;
`;

const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
  position: relative;
  font-size: 50px;
  color: white;
  z-index: 1;
`;

const Hero = ({img, children, cta, style}) => (
  <Background img={img}>
    <Overlay />
    <ChildrenContainer style={style}>{children}</ChildrenContainer>
  </Background>
);

export default Hero;
