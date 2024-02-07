import axios from "axios";

import { URL } from '../utils/serverurl'
const getallorderProducts  = async () => {
    try {
      const response = await axios.get(`${URL}order/userallorders`, {
        withCredentials: true,
      });
      console.log(response)
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      console.log(error)
      throw error.response.data
  
    }
  }
  const Addaorder  = async (body) => {
    try {
      console.log(body)
      const response = await axios.post(`${URL}order/newOrder`,body, {
        withCredentials: true,
      });
      console.log(response)
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      console.log(error)
      throw error.response.data
  
    }
  }
  const deleteorderProduct  = async (body) => {
    try {
        console.log(body+"vg")
      const response = await axios.delete(`${URL}order/deleteorder/${body}`, {
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
  const updateorderProduct  = async (body) => {
    try {
        console.log(body+"vg")
      const response = await axios.put(`${URL}order/admin/updateOrder/${body}`,body, {
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

  const orderFunctions = {
    Addaorder ,deleteorderProduct,getallorderProducts ,updateorderProduct 
  }
  export default orderFunctions;


  