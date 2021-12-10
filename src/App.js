import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const NavShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 100% 0%, 100% 8%, 0 8%);
  background-color: #96a480;
`;

export default function App() {
  return (
    <div>
      <NavShape />
      <Container>
        <NavBar />
      </Container>
      <Home />
    </div>
  );
}
