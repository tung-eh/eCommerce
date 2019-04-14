import React from 'react';
import styled from 'styled-components';

import {Card, ButtonGroup} from '../../atoms';
import {colors} from '../../constants';

const Wrapper = styled(Card)`
  max-width: 240px;
  background-color: ${colors.mintCream};
  box-shadow: 0px 0px 1px 1px ${colors.mintCreamDark};
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  text-align: center;
  font-size: 14px;
`;

const ProductCard = ({product: {imageUrl, title, author, price}}) => (
  <Wrapper imageUrl={imageUrl}>
    <CardBody>
      <h3>{title}</h3>
      <p>{author}</p>
      <h2>${price.toFixed(2)}</h2>
      <ButtonGroup
        buttons={[
          {children: 'Detail', rounded: true},
          {children: 'Buy', rounded: true, type: 'primary'},
        ]}
        style={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}
      />
    </CardBody>
  </Wrapper>
);

export default ProductCard;
