import axios from "axios";

import { URL } from '../utils/serverurl'


const login = async (user) => {
  try {
    const response = await axios.post(`${URL}auth/login`, user, {
      withCredentials: true,
    });
    if(response.data){
      console.log(response.data)
      return response.data;
    }
  } catch (error) {
    throw error.response.data

  }
}
const logout = async () => {
  try {
    const response = await axios.get(`${URL}auth/logout`, {
      withCredentials: true,
    });
    if(response.data){
      console.log(response.data)
      return response.data;
    }
   
  } catch (error) {
    throw error.response.data

  }
}
const register = async (user) => {
  try {
    const response = await axios.post(`${URL}auth/register`, user, {
      withCredentials: true,
    });
    if(response.data){
      console.log(response.data)
      return response.data;
    }
  } catch (error) {
    throw error.response.data

  }
}

const userFunctions = {
  login,logout,register
}
export default userFunctions;

