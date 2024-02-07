import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux_toolkit/userSlice'
import productReducer from '../redux_toolkit/productSlice'
import wishlistReducer from '../redux_toolkit/wishlistSlice'
import cartReducer from '../redux_toolkit/cartSlice'
import orderReducer from '../redux_toolkit/orderSlice'
import paramReducer from '../redux_toolkit/paramSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    allproducts:productReducer,
    wishlistproducts:wishlistReducer,
    cartproducts:cartReducer,
    orders:orderReducer,
    params:paramReducer
  },
})