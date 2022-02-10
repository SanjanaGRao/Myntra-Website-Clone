/**
@description to combine all the reducers
@author Sanjana Rao
*/
import { combineReducers } from 'redux';
import reducer from './reducers';
import itemReducer from './itemReducers';

const reducers = combineReducers({
  login: reducer,
  allItems: itemReducer,
});
export default reducers;
