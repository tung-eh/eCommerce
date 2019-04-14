import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
  > button {
    :not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    :not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const ButtonGroup = ({buttons, style}) => (
  <Wrapper style={style}>
    {buttons.map((button, index) => <Button key={index} {...button} ghost />)}
  </Wrapper>
);

export default ButtonGroup;
