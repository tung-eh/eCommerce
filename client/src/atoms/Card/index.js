import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

const Wrapper = styled.div`
  border-radius: 5px;
  padding: 5px;
  overflow: hidden;
`;

const Card = ({ imageUrl, children, className, style }) => (
  <Wrapper className={className} style={style}>
    <img src={imageUrl} width="100%" />
    {children}
  </Wrapper>
);

export default Card;
