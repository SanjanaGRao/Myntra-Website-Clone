/**
* Connect to API and perform fetch all the products stored
* along with their details
* @author Sanjana Rao
*/
const axios = require('axios');
const qs = require('qs');

/**
 * Function to get all the items(products) stored in Strapi data
 * Filtering is used to get the products of specific category ID
 */
export default async function getAllItems(categoryId) {
  const query = qs.stringify({
    filters: {
      categoryId: {
        $eq: categoryId,
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  try {
    const response = await axios.get(`http://localhost:1337/api/products?${query}`);
    return response.data.data;
  } catch (error) {
    return [];
  }
}
