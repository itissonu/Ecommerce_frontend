import axios from "axios";

import { URL } from '../utils/serverurl'

const getallproducts = async (params) => {
  try {
    console.log(params.page)
    const { minPrice, maxPrice, category, colors, brand, search, page } = params;


    const finalURL = `${URL}product/allproducts?` +

      `minPrice=${encodeURIComponent(minPrice || '')}&` +
      `search=${encodeURIComponent(search || '')}&` +
      `maxPrice=${encodeURIComponent(maxPrice || '')}&` +
      `category=${encodeURIComponent(category || '')}&` +
      `colors=${encodeURIComponent(colors || '')}&` +
      //  `page=${encodeURIComponent(page || '')}&`+
        `brand=${encodeURIComponent(brand || '')}`;
    console.log(finalURL)
    const response = await axios.get(`${finalURL}`, {
      withCredentials: true,
    });
    if (response.data) {

      return response.data;
    }
  } catch (error) {
    throw error.response.data

  }
}
const getaproduct = async (id) => {
  try {
    const response = await axios.get(`${URL}product/products/${id}`, {
      withCredentials: true,
    });
    if (response.data) {

      return response.data;
    }
  } catch (error) {
    throw error.response.data

  }
}

const productFunctions = {
  getallproducts, getaproduct
}
export default productFunctions;