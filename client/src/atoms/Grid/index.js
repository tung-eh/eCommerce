import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants";

const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  @media (max-width: ${breakpoints.tabletMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = ({ children }) => <GridContainer>{children}</GridContainer>;

export default Grid;
