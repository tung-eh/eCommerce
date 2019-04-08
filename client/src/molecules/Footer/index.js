import React from 'react';
import styled from 'styled-components';
import {colors} from '../../constants';

const Wrapper = styled.div`
  background-color: ${colors.mintCream};
  font-size: 14px;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = ({children}) => <Wrapper>{children}</Wrapper>;

export default Footer;
