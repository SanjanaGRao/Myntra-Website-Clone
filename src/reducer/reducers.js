/**
 * reducer for storing user's status
 * @author Sanjana Rao
 */
import actionTypes from '../constants/actionTypes';

const intialState = {
  isLogin: false,
};
// eslint-disable-next-line default-param-last
const reducers = (state = intialState, { type }) => {
  switch (type) {
    case actionTypes.SET_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    default:
      return state;
  }
};
export default reducers;
