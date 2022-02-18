/**
 * Function to get all the products stored in database and connects to api.
 * @author Sanjana Rao
 * @since 14-02-2022
 */
import { getToken } from '../utils/tokenOperations';

const axios = require('axios');

const token = getToken();

// Function to get all the delivery address for the customer via backend
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

// Function to set a customer's address in backend
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

// Function to update the customer's address in backend
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
