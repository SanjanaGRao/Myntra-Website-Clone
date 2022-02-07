/**
* Actions for user's state
* @author Sanjana Rao
*/
import actionTypes from '../constants/actionTypes';

const loginStatus = (flag) => ({
  type: actionTypes.SET_LOGIN,
  payload: flag,
});
export default loginStatus;
