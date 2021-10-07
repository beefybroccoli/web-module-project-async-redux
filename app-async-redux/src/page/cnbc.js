import React, { useEffect } from "react";
import styled from "styled-components";
import {
  cb_cnbc_API_call_listSpecialReport,
  mock_cnbc_API_call_listSpecialReport,
} from "../service/services";

const Container = styled.div`
  border: solid 1px black;
`;
const CNBC = (props) => {
  const arrayOfObject = [];

  useEffect(() => {
    {
      /*retrieve arrayOfObject from an API call */
    }
    const data = mock_cnbc_API_call_listSpecialReport();
    console.log("data.length = ", data.length);
  }, []);

  return (
    <Container>
      <h3>CNBC.js</h3>

      {/* list an array of articles */}
    </Container>
  );
};

export default CNBC;
