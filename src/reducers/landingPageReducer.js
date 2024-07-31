import { FETCH_LANDING_PAGE } from '../actions/landingPageActions';

const initialState = {
  landingPage: [],
};

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANDING_PAGE:
      return {
        ...state,
        landingPage: action.payload,
      };
    default:
      return state;
  }
};

export default landingPageReducer;
