/**
* Connect to API and perform either login or register the user operations
* and store the returned token.
* @author Sanjana Rao
*/
import axios from 'axios';
import { setUserSession } from '../utils/tokenOperations';

// Function to enable the user to login by connecting strapi
export async function login(email, password) {
  try {
    const { data } = await axios.post('http://localhost:1337/api/auth/local', {
      identifier: email,
      password,
    });
    setUserSession(data.data.jwt);
    return data;
  } catch (error) {
    return error;
  }
}

// Function to enable the user to create an account by connecting strapi
export async function signUp(username, email, password) {
  try {
    const data = await axios.post('http://localhost:1337/api/auth/local/register', {
      username: username.substring(0, username.indexOf(' ')),
      email,
      password,
    });
    setUserSession(data.data.jwt);
    return data;
  } catch (error) {
    return error;
  }
}
