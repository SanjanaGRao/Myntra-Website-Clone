/**
* Actions for product state
* @author Sanjana Rao
*/
import actionTypes from '../constants/actionTypes';

const setProducts = (products) => ({
  type: actionTypes.SET_PRODUCTS,
  payload: products,
});
export default setProducts;
