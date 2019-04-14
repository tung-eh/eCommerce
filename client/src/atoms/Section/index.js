import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  font-size: 24px;
`;

const Title = styled.h3`
  margin: 0 0 20px 0;
`;

const Section = ({children, title}) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Section;
