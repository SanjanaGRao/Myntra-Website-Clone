/**
* Actions for address state
* @author Sanjana Rao
*/
import ActionTypes from '../constants/actionTypes';

// Actions to set an address
const setAddress = (address) => ({
  type: ActionTypes.SET_ADDRESS,
  payload: address,
});

export default setAddress;
