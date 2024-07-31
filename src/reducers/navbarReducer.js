import { FETCH_NAVBAR_SUCCESS, FETCH_NAVBAR_FAILURE } from '../actions/navbarActions';

const initialState = {
  Tabs: [],
  error: null,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAVBAR_SUCCESS:
      return {
        ...state,
        Tabs: action.payload.Tabs || [], // Default to empty array if Tabs is not available
        error: null,
      };
    case FETCH_NAVBAR_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
