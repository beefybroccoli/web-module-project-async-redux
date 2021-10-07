import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px black;
`;
const CNBC = (props) => {
  const arrayOfObject = [];

  useEffect(() => {
    {
      /*retrieve arrayOfObject from an API call */
    }
  }, []);

  return (
    <Container>
      <h3>CNBC.js</h3>

      {/* list an array of articles */}
    </Container>
  );
};

export default CNBC;
