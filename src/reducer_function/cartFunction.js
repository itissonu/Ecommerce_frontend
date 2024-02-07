import axios from "axios";

import { URL } from '../utils/serverurl'
const getallcartProducts  = async () => {
    try {
      const response = await axios.get(`${URL}cart/getcartproducts`, {
        withCredentials: true,
      });
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      throw error.response.data
  
    }
  }
  const Addacart  = async (body) => {
    try {
      const response = await axios.post(`${URL}cart/addtocart`,body, {
        withCredentials: true,
      });
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      throw error.response.data
  
    }
  }
  const deletecartProduct  = async (body) => {
    try {
        console.log(body+"vg")
        const response = await axios.delete(`${URL}cart/deleteCart/${body}`, {
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
  const updatecartProduct  = async (data) => {
    try {
        
        const response = await axios.put(`${URL}cart/updateCart/${data.ProductId}`,data, {
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

  const cartFunctions = {
    Addacart ,deletecartProduct,getallcartProducts ,updatecartProduct 
  }
  export default cartFunctions;
