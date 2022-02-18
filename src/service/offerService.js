/**
 * Function to get all the deals stored in database and connects to api.
 * @author Sanjana Rao
 */
const axios = require('axios');

// Function to enable the user to get images for Deals of the Day
export async function getTopBrandsImage() {
  try {
    const response = await axios.get('http://localhost:1337/api/deals-of-the-days?populate=*');
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to get images for Top Brands
export async function getBrandsImage() {
  try {
    const response = await axios.get('http://localhost:1337/api/top-brands-deals?populate=*');
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to get images for Categories To Bag
export async function getCategoriesToBag() {
  try {
    const response = await axios.get('http://localhost:1337/api/min30-offers?populate=*');
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to get images for Myntra Luxe
export async function getLuxe() {
  try {
    const response = await axios.get('http://localhost:1337/api/offer30-to60s?populate=*');
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to get images for Indian Wear
export async function getIndianWear() {
  try {
    const response = await axios.get('http://localhost:1337/api/offer50s?populate=*');
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to get images for Sports Wear
export async function getSportsWear() {
  try {
    const response = await axios.get('http://localhost:1337/api/sports-wears?populate=*');
    return response.data.data;
  } catch (error) {
    return [];
  }
}

// Function to enable the user to get images for Footwear
export async function getFootwear() {
  try {
    const response = await axios.get('http://localhost:1337/api/footwears?populate=*');
    return response.data.data;
  } catch (error) {
    return [];
  }
}
