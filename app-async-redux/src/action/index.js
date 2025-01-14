import axios from "axios";
import { NASA_API_URL } from "../constant/constant";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getDataNASA = () => (dispatch) => {
  //dispatch fetchStart
  dispatch(fetchStart());

  axios
    .get(NASA_API_URL)
    .then((resp) => {
      dispatch(fetchSuccess(resp.data));
    })
    .catch((err) => {
      dispatch(fetchFail(err));
    });
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (input_data) => {
  return { type: FETCH_SUCCESS, payload: input_data };
};

export const fetchFail = (input_error) => {
  return { type: FETCH_FAIL, payload: input_error };
};
