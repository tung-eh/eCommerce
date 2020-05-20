import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
`;

const BrandName = styled.span`
  margin-left: 10px;
  font-size: 18px;
  font-family: "Quarz 974";
`;

const Logo = ({ color = "white" }) => (
  <Wrapper color={color}>
    <Icon name="books" width={30} />
    <BrandName>TuBo</BrandName>
  </Wrapper>
);

export default Logo;
