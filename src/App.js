import React from "react";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export default function App() {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>
      <Container>
        <Home />
      </Container>
    </div>
  );
}
