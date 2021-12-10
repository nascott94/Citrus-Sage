import React from "react";
import styled from "styled-components";
import Background from "../images/background.jpg";

const Container = styled.div`
  height: cal(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
`;

export default function Home() {
  return <Container></Container>;
}
