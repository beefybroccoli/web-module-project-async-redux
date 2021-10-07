export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export {} from "../service/services";

export const getData = () => (dispatch) => {
  //dispatch fetchStart
  dispatch(fetchStart());

  //
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = () => {
  return { type: FETCH_SUCCESS, payload: [] };
};

export const fetchFail = () => {
  return { type: FETCH_FAIL, payload: [] };
};
