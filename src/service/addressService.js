/**
 * Function to get all the products stored in database and connects to api.
 * @author Sanjana Rao
 */
import { getToken } from '../utils/tokenOperations';

const axios = require('axios');

const token = getToken();

export async function getAddress() {
  try {
    const response = await axios.get('http://localhost:1337/api/addresses', {
      headers: {
        Authorization:
           `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
export async function setAddresses(data) {
  try {
    const response = await axios.post('http://localhost:1337/api/addresses', data, {
      headers: {
        Authorization:
           `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
export async function updateAddress(data, id) {
  try {
    const response = await axios.put(`http://localhost:1337/api/addresses/${id}`, data, {
      headers: {
        Authorization:
             `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
