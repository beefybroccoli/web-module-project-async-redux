import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px black;
`;
const Home = (props) => {
  return (
    <Container>
      <h3>Home.js</h3>
    </Container>
  );
};

export default Home;
