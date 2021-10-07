import React, { useEffect } from "react";
import styled from "styled-components";
import { cb_nasa_apod_API_call } from "../service/services";
import { getDataNASA } from "../action/index";
import { connect } from "react-redux";

const Container = styled.div`
  border: solid 1px black;
`;
const NASA = (props) => {
  return (
    <Container>
      <h3>NASA.js</h3>
      {props.isFetching && <p>...fetching</p>}
      {props.data && <p>length of array = {props.data.length}</p>}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
  };
};

const mapActionToProps = { getDataNASA };
export default connect(mapStateToProps, mapActionToProps)(NASA);
