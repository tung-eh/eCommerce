import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandName = styled.span`
  color: white;
  margin-left: 10px;
  font-size: 18px;
  font-family: 'Quarz 974';
`;

const Logo = ({color = 'white'}) => (
  <Wrapper>
    <Icon name="books" width={30} color={color} />
    <BrandName>TuBo</BrandName>
  </Wrapper>
);

export default Logo;
