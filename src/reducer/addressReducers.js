import actionTypes from '../constants/actionTypes';

const intialState = {
  address: [],
};
// eslint-disable-next-line default-param-last
const addressReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
};
export default addressReducers;
