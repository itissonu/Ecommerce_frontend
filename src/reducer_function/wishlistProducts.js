import axios from "axios";

import { URL } from '../utils/serverurl'
const WishlistGetAllProducts  = async () => {
    try {
      const response = await axios.get(`${URL}wishlist/getallwishlist`, {
        withCredentials: true,
      });
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      throw error.response.data
  
    }
  }
  const AddWishlistProduct  = async (body) => {
    try {
      const response = await axios.post(`${URL}wishlist/addtowishlist`,body, {
        withCredentials: true,
      });
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      console.log(error.response.data)
      throw error.response.data
  
    }
  }
  const deleteWishlistProduct  = async (body) => {
    try {
        console.log(body+"vg")
      const response = await axios.delete(`${URL}wishlist/deletewishlist/${body}`, {
        withCredentials: true,
      });
      console.log(response)
      if(response.data){
        console.log(response+"kkkk");
        return response.data;
      }
    } catch (error) {
      throw error.response.data
  
    }
  }

  const wishlistFunctions = {
    AddWishlistProduct ,WishlistGetAllProducts,deleteWishlistProduct
  }
  export default wishlistFunctions;
