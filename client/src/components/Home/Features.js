import React from 'react';
import styled from 'styled-components';

import {Icon} from '../../atoms';
import {colors, breakpoints} from '../../constants';

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 30px;
  padding: 30px;
  box-sizing: border-box;
  font-size: 16px;
  @media (max-width: ${breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureItem = ({iconName, title, children}) => (
  <FeatureWrapper>
    <Icon name={iconName} color={colors.ufoGreen} height={60} width={60} />
    <h3 style={{margin: '30px 0'}}>{title}</h3>
    <p>{children}</p>
  </FeatureWrapper>
);

const Features = () => (
  <Wrapper>
    <FeatureItem iconName="book" title="Tons of Books">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet
      in quam quis laoreet. Morbi ut finibus nulla. Morbi eleifend nulla tortor,
      nec aliquam odio ullamcorper id.
    </FeatureItem>
    <FeatureItem iconName="pencil-paintbrush" title="Hundreds of Authors">
      Ut hendrerit elementum libero, eu elementum quam luctus ac. Ut eu mauris
      id magna semper lacinia ut facilisis diam.
    </FeatureItem>
    <FeatureItem iconName="bookmark" title="Easily Bookmarked">
      Vivamus egestas mi turpis, sit amet laoreet orci faucibus convallis. Nulla
      facilisi. Fusce auctor sodales felis. In sagittis massa eget maximus
      elementum.
    </FeatureItem>
  </Wrapper>
);

export default Features;
