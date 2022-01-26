import React from 'react';
import styled from 'styled-components';
import csLogo from '../images/logo.png';
import Background from '../images/new-background.png';

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  /* padding: 10px 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  /* width: 50%; */
  padding-top: 50px;
  padding-left: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  /* width: 50%; */
  padding-top: 50px;
  padding-right: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  padding-top: 70px;
  width: 10%;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  color: #4e6e47;
  cursor: pointer;
  letter-spacing: var(--spacing);
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
`;

const BackgroundImage = styled.div`
  display: flex;
`;

export default function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Menu className="menuFont">
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
          </Menu>
        </Left>
        <Image src={csLogo} />
        <Right>
          <Menu className="menuFont">
            <MenuItem>Projects</MenuItem>
            <MenuItem>Testimonials</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Right>
      </Wrapper>
      {/* <BackgroundImage>
        <img src={Background} objectFit={'cover'} width={1920} height={700} />
      </BackgroundImage> */}
    </Container>
  );
}
