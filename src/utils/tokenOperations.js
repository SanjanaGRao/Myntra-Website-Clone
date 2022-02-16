/* eslint-disable no-console */
/**
* To store jwt tokens in session storage
* @returns functions for storing and removing tokens
* @author Sanjana Rao
*/

// return the token from the session storage
export const getToken = () => localStorage.getItem('token') || null;

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
};

// set the token and user from the session storage
export const setUserSession = (token) => {
  localStorage.setItem('token', token);
};
