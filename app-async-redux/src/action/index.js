export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export { cb_nasa_apod_API_call } from "../service/services";

export const getDataNASA = () => (dispatch, cb_nasa_apod_API_call) => {
  //dispatch fetchStart
  dispatch(fetchStart());

  console.log("line 10, index.js in action.js");
  //https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await

  const call1 = async () => {
    const object = await cb_nasa_apod_API_call();
    console.log("object = ", object);
  };

  call1();
  //   promise.then((res) => {
  //     console.log("res = ", res);
  //   });
  //   response.then((res) => {
  //     console.log("res = ", res);
  //   });
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
