/* eslint-disable default-param-last */
/**
 * Reducer for storing the items
 * @author Sanjana Rao
 */
import actionTypes from '../constants/actionTypes';

const intialState = {
  products: [],
};
const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export default productReducer;
