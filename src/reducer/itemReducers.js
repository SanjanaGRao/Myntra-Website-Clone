/* eslint-disable default-param-last */
/**
 * Reducer for storing the items
 * @author Sanjana Rao
 */
import actionTypes from '../constants/actionTypes';

const intialState = {
  products: [],
  category: {},
  oneProduct: {},
};
const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case actionTypes.SET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: payload,
      };
    default:
      return state;
  }
};
export default productReducer;
