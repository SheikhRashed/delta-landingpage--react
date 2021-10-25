import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../GlobalStyles';
import {
  ButtonWrapper,
  HeroButton,
  HeroSection,
  HeroText,
  HeroVideo,
} from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src='./assets/hero.mp4' />
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to='signup'>
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
