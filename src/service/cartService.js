/* eslint-disable no-console */
/**
* Connect to API and perform either cart operations
* and store the returned token.
* @author Sanjana Rao
*/
import axios from 'axios';
import { getToken } from '../utils/tokenOperations';

const token = getToken();

// Function to enable the user to login and add to cart
export async function setCart(data) {
  try {
    const response = await axios.post('http://localhost:1337/api/carts', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to get the cart items
export async function getCart() {
  try {
    const response = await axios.get('http://localhost:1337/api/carts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to update the cart items
export async function updateCart(data, id) {
  try {
    const response = await axios.put(`http://localhost:1337/api/carts/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to delete the cart items
export async function deleteCart(id) {
  try {
    const response = await axios.delete(`http://localhost:1337/api/carts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
