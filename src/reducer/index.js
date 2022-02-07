/**
@description to combine all the reducers
@author Sanjana Rao
*/
import { combineReducers } from 'redux';
import reducer from './reducers';

const reducers = combineReducers({
  allOffers: reducer,
});
export default reducers;
