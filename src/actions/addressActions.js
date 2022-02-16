import ActionTypes from '../constants/actionTypes';

const setAddress = (address) => ({
  type: ActionTypes.SET_ADDRESS,
  payload: address,
});

export default setAddress;
