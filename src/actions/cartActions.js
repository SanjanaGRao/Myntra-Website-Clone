import ActionTypes from '../constants/actionTypes';

export const setCart = (cart) => ({
  type: ActionTypes.SET_CART,
  payload: cart,
});

export const addToCart = (cart) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: cart,
});

export const updateCartQuantity = (cart) => ({
  type: ActionTypes.UPDATE_CART,
  payload: cart,
});

export const deleteCartItem = (cartId) => ({
  type: ActionTypes.DELETE_CART,
  payload: cartId,
});
