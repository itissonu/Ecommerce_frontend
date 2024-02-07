import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';
import productFunctions from '../reducer_function/productFunction';

const GetAllProducts = createAsyncThunk("product/getproducts", async (params) => {
    try {
       
        return await    productFunctions.getallproducts(params);

    } catch (error) {
        throw error;
    }
});
const GetAProduct = createAsyncThunk("product/getaproduct", async (id) => {
    try {
     
        return await   productFunctions.getaproduct(id);

    } catch (error) {
        throw error;
    }
});
const initialState = {
    products: [],
    loading: false,
    error: null,
    success: false,
    message: "", 
    singleProduct:'' 
};

export const productSlice = createSlice({
    name: "allproducts",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllProducts.pending, (state) => {
            
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = ''
        })
            .addCase(GetAllProducts.fulfilled, (state, action) => {

                state.loading = false;
                state.products = action.payload.products;
                state.success = true;
                state.message = 'product got Successfully.'
               
            })
            .addCase(GetAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
                state.message = "problem in getting the product" || "Internal error ";
                if (state.success === false) {
                    toast.info(action.error.message)
                }
            })
            .addCase(GetAProduct.pending, (state) => {
            
                state.loading = true;
                state.error = null;
                state.success = false;
                state.message = ''
            })
                .addCase(GetAProduct.fulfilled, (state, action) => {
    
                    state.loading = false;
                    state.singleProduct = action.payload.products;
                    state.success = true;
                    state.message = 'product got Successfully.'
                   
                })
                .addCase(GetAProduct.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                    state.success = false;
                    state.message = "problem in getting the product" || "Internal error ";
                    if (state.success === false) {
                        toast.info(action.error.message)
                    }
                })
                
            .addDefaultCase((state) => state);
    }
})
export default productSlice.reducer;
export {GetAllProducts,GetAProduct };