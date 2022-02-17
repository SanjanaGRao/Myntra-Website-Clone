/**
* Actions for cart state
* @author Sanjana Rao
*/
import ActionTypes from '../constants/actionTypes';

// Actions to set a cart
export const setCart = (cart) => ({
  type: ActionTypes.SET_CART,
  payload: cart,
});

// Actions to add to cart
export const addToCart = (cart) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: cart,
});

// Actions to update cart quantity
export const updateCartQuantity = (cart) => ({
  type: ActionTypes.UPDATE_CART,
  payload: cart,
});

// Actions to delete cart quantity
export const deleteCartItem = (cartId) => ({
  type: ActionTypes.DELETE_CART,
  payload: cartId,
});
