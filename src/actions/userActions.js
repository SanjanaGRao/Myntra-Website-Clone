/**
* Multiple functions to perform different redux actions
* @author Sanjana Rao
*/
import actionTypes from '../constants/actionTypes';

// Actions for user's state
export const loginStatus = (flag) => ({
  type: actionTypes.SET_LOGIN,
  payload: flag,
});

// Actions to perform on deals of the day state
export const topBrands = (data) => ({
  type: actionTypes.SET_TOP_BRANDS,
  payload: data,
});

// Actions to perform on top brands state
export const topBrandsExplore = (data) => ({
  type: actionTypes.SET_BIG_TOP_BRANDS,
  payload: data,
});

// Actions to perform on Categories To Bag state
export const categoriesToBag = (data) => ({
  type: actionTypes.SET_CATEGORIES_TO_BAG,
  payload: data,
});

// Actions to perform on Myntra Luxe state
export const luxe = (data) => ({
  type: actionTypes.SET_LUXE,
  payload: data,
});

// Actions to perform on Indian Wear state
export const indianWear = (data) => ({
  type: actionTypes.SET_INDIAN_WEAR,
  payload: data,
});

// Actions to perform on sports wear state
export const sportsWear = (data) => ({
  type: actionTypes.SET_SPORTS_WEAR,
  payload: data,
});

// Actions to perform on footwear state
export const footwear = (data) => ({
  type: actionTypes.SET_FOOTWEAR,
  payload: data,
});
