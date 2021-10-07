import React, { useEffect } from "react";
import styled from "styled-components";
import { cb_cnbc_API_call_listTrending } from "../action/index";

const Container = styled.div`
  border: solid 1px black;
`;
const NASA = (props) => {
  const arryOfObject = [];

  useEffect(() => {
    {
      /*retrieve arrayOfObject from an API call */
    }
    cb_cnbc_API_call_listTrending();
  }, []);

  return (
    <Container>
      <h3>NASA.js</h3>

      {/* list an array of object*/}
    </Container>
  );
};

export default NASA;
