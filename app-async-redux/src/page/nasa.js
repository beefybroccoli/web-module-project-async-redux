import React, { useEffect } from "react";
import styled from "styled-components";
import { cb_nasa_apod_API_call } from "../service/services";
import { getDataNASA } from "../action/index";
import { connect } from "react-redux";

const Container = styled.div`
  border: solid 1px black;
`;
const NASA = (props) => {
  const arryOfObject = [];

  useEffect(() => {
    {
      /*retrieve arrayOfObject from an API call */
    }
    // const data = mock_nasa_apod_API_call();
    // console.log("data.data.length = ", data.data.length);
    // const data = cb_nasa_apod_API_call();
    // console.log("data = ", data);
    props.getDataNASA();
  }, []);

  return (
    <Container>
      <h3>NASA.js</h3>
      {/* list an array of object*/}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapActionToProps = { getDataNASA };
export default connect(mapStateToProps, mapActionToProps)(NASA);
