/**
@description to combine all the reducers
@author Sanjana Rao
*/
import { combineReducers } from 'redux';
import reducer from './reducers';
import itemReducer from './itemReducers';
import cartReducer from './cartReducers';
import addressReducers from './addressReducers';

const reducers = combineReducers({
  login: reducer,
  allItems: itemReducer,
  allCarts: cartReducer,
  allAddress: addressReducers,
});
export default reducers;
