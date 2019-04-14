import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../atoms';
import {Hero} from '../../molecules';
import {Section} from '../../atoms';
import PopularBooks from './PopularBooks';
import heroImg from '../../../assets/images/hero.jpg';

const HeroButton = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Home = () => (
  <>
    <Hero img={heroImg}>
      <div>Let's travel without moving your feet</div>
      <div>... through our books</div>
      <HeroButton>
        <div>Explore</div>
        <Icon name="down" color="white" size="lg" />
      </HeroButton>
    </Hero>
    <Section title="Popular books">
      <PopularBooks />
    </Section>
  </>
);

export default Home;
