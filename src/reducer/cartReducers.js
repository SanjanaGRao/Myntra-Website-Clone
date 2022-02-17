/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/**
 * Reducer for storing the cart items
 * @author Sanjana Rao
 */
import ActionTypes from '../constants/actionTypes';

const intialState = {
  cart: [],
};
const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      return {
        ...state,
        cart: payload,
      };
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          payload,
        ],
      };
    case ActionTypes.UPDATE_CART:
      const newCart = [...state.cart];
      const index = state.cart.findIndex((carts) => carts.id === payload.id);
      newCart[index] = payload;
      return {
        ...state,
        cart: newCart,
      };
    case ActionTypes.DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
