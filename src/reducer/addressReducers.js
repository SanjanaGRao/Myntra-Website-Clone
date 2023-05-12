/* eslint-disable default-param-last */
/**
 * Reducer for storing the address
 * @author Sanjana Rao
 */
import actionTypes from '../constants/actionTypes';

const intialState = {
  address: [],
};

const addressReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
};
export default addressReducers;
