/**
* Connect to API and perform either login or register the user operations
* and store the returned token.
* @author Sanjana Rao
*/
import axios from 'axios';
import { setUserSession } from '../utils/tokenOperations';

// Function to enable the user to login by connecting strapi
export function loginUser(email, password) {
  return axios.post('http://localhost:1337/api/auth/local', {
    identifier: email,
    password,
  }).then((data) => {
    setUserSession(data.data.jwt);
    return data;
  }).catch((err) => {
    throw err;
  });
}

// Function to enable the user to create an account by connecting strapi
export function signUpUser(username, email, password) {
  return axios.post('http://localhost:1337/api/auth/local/register', {
    username,
    email,
    password,
  }).then((data) => {
    setUserSession(data.data.jwt);
    return data;
  }).catch((err) => {
    throw err;
  });
}
