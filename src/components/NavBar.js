import React from "react";
import styled from "styled-components";
import csLogo from "../images/logo.png";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 30%;
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
  color: black;
`;

export default function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={csLogo} />
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Testimonials</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
      </Wrapper>
    </Container>
  );
}
