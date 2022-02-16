/**
* Actions for product and category state
* @author Sanjana Rao
*/
import actionTypes from '../constants/actionTypes';

export const setProducts = (products) => ({
  type: actionTypes.SET_PRODUCTS,
  payload: products,
});

export const setCategory = (category) => ({
  type: actionTypes.SET_CATEGORY,
  payload: category,
});

export const setOneProduct = (product) => ({
  type: actionTypes.SET_ONE_PRODUCT,
  payload: product,
});
