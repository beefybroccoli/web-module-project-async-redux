import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../action/index";
const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* case fetch start - toggle isFetching to true*/
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };

    /* case fetch success 
     - store action.payload in data
     - toggle isFetching to false */
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };

    /* case fetch fail 
    - store action.payload in error
    - toggle isFetching to false */
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
