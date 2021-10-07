import React from "react";
import styled from "styled-components";
import NASA from "./nasa";
import CNBC from "./cnbc";

const Container = styled.div`
  border: solid 1px black;
`;
const Home = (props) => {
  return (
    <Container>
      <h3>Home.js</h3>
      <NASA />
      <CNBC />
    </Container>
  );
};

export default Home;
