/**
* Actions for product and category state
* @author Sanjana Rao
*/
import actionTypes from '../constants/actionTypes';

// Actions on multiple product state
export const setProducts = (products) => ({
  type: actionTypes.SET_PRODUCTS,
  payload: products,
});

// Actions on category state
export const setCategory = (category) => ({
  type: actionTypes.SET_CATEGORY,
  payload: category,
});

// Actions on a single product state
export const setOneProduct = (product) => ({
  type: actionTypes.SET_ONE_PRODUCT,
  payload: product,
});
