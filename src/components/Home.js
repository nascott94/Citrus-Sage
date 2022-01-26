import React from 'react';
import styled from 'styled-components';
import Background from '../images/new-background (2).png';
import Bedroom from '../images/bedroom.jpg';

const Container = styled.div`
  height: 100px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const BackgroundImage = styled.image`
  display: flex;
  margin-top: 200px;
`;

const OverlayImage = styled.image`
  /* display: flex;
  position: absolute; */
`;

export default function Home() {
  return (
    <Container>
      <BackgroundImage>
        <img src={Background} objectFit={'cover'} width={1760} height={900} />
      </BackgroundImage>
      <OverlayImage src={Bedroom} />
    </Container>
  );
}
