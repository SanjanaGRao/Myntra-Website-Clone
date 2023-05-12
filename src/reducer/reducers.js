/**
 * Reducer for storing user's status
 * @author Sanjana Rao
 */
import actionTypes from '../constants/actionTypes';

const intialState = {
  isLogin: false,
  brands: {},
  topBrands: {},
  categories: {},
  luxe: {},
  indianWear: {},
  sports: {},
  footwear: {},
};
// eslint-disable-next-line default-param-last
const reducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case actionTypes.SET_TOP_BRANDS:
      return {
        ...state,
        brands: payload,
      };
    case actionTypes.SET_BIG_TOP_BRANDS:
      return {
        ...state,
        topBrands: payload,
      };
    case actionTypes.SET_CATEGORIES_TO_BAG:
      return {
        ...state,
        categories: payload,
      };
    case actionTypes.SET_LUXE:
      return {
        ...state,
        luxe: payload,
      };
    case actionTypes.SET_INDIAN_WEAR:
      return {
        ...state,
        indianWear: payload,
      };
    case actionTypes.SET_SPORTS_WEAR:
      return {
        ...state,
        sports: payload,
      };
    case actionTypes.SET_FOOTWEAR:
      return {
        ...state,
        footwear: payload,
      };
    default:
      return state;
  }
};
export default reducers;
