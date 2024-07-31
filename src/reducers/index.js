import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import landingPageReducer from './landingPageReducer';

const rootReducer = combineReducers({
  navbar: navbarReducer,
  landingPage: landingPageReducer,
});

export default rootReducer;
