import React, { useEffect } from "react";
import styled from "styled-components";
import { mock_nasa_apod_API_call } from "../service/services";

const Container = styled.div`
  border: solid 1px black;
`;
const NASA = (props) => {
  const arryOfObject = [];

  useEffect(() => {
    {
      /*retrieve arrayOfObject from an API call */
    }
    const data = mock_nasa_apod_API_call();
    console.log("data.length = ", data.length);
  }, []);

  return (
    <Container>
      <h3>NASA.js</h3>
      {/* list an array of object*/}
    </Container>
  );
};

export default NASA;
