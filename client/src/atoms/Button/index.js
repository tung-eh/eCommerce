import React from 'react';
import styled from 'styled-components';
import {colors} from '../../constants';

const MAP_COLOR = {
  primary: [colors.ufoGreen, 'white'],
  default: ['#aaa', 'white'],
};

const getCssColors = ({type, hover, ghost, colors}) => {
  const baseColors = colors || MAP_COLOR[type] || MAP_COLOR.default;
  const [bg, border, color] = hover === ghost ? [0, 0, 1] : [1, 0, 0];
  return `
    background-color: ${baseColors[bg]};
    border: 1px solid ${baseColors[border]};
    color: ${baseColors[color]}
  `;
};

const Button = styled.button`
  border-radius: ${props => (props.rounded ? '50px' : '2px')};
  ${props => getCssColors(props)};
  :hover {
    ${props => getCssColors({...props, hover: true})};
  }
  :active {
    transform: translate(1px, 1px);
  }
`;

export default Button;
