import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../action/index";
const initialState = {
  loading: false,
  data: null,
  isFetching: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* case - fetch start */
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };

    /* case - fetch success */
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "",
      };

    /* case - fetch fail */
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
