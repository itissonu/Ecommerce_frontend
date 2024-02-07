import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import cartFunctions from '../reducer_function/cartFunction';


const cartsGetAllProducts = createAsyncThunk("cart/getcartproducts", async () => {
    try {
  
        return await    cartFunctions.getallcartProducts();

    } catch (error) {
        throw error;
    }
});

const AddcartsProduct = createAsyncThunk("cart/addcartproducts", async (body) => {
    try {
        return await   cartFunctions.Addacart(body);
    } catch (error) {
        throw error;
    }
});

const deletecartProduct = createAsyncThunk("cart/deletecartproducts", async (body) => {
    try {
     
        return await   cartFunctions.deletecartProduct(body);

    } catch (error) {
        throw error;
    }
});
const updatecartProduct = createAsyncThunk("cart/updatecartproducts", async (data) => {
    try {
     
        return await   cartFunctions.updatecartProduct(data);

    } catch (error) {
        throw error;
    }
});
const initialState = {
   cartProducts: [],
    loading: false,
    error: null,
    success: false,
    message: "", 
};

export const cartSlice = createSlice({
    name: "cartProducts",
    initialState: initialState,
    reducers: {clearcartState: (state) => {
        return initialState;}},
    extraReducers: (builder) => {
        builder.addCase(cartsGetAllProducts.pending, (state) => {  
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = ''
        })
            .addCase(cartsGetAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.cartProducts = action.payload.cartproduct;
                state.success = true;
                state.message = 'got all product .' 
                if (state.success) {
                   
                    localStorage.setItem('cart', JSON.stringify(action.payload.cartproduct));
                  
                }
            })
            .addCase(cartsGetAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
                state.message = "problem in getting the product" || "Internal error ";
                // if (state.success === false) {
                //     toast.error(action.error.message)
                // }
            })
            .addCase(AddcartsProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
                state.message = ''
            })
                .addCase(AddcartsProduct.fulfilled, (state, action) => {
                    state.loading = false;
                    state.cartProducts = action.payload.cartproduct;
                    state.success = true;
                    state.message = 'product carted Successfully.'
                    if (state.success === true) {
                        toast.info("product wishlited successfully")
                    } 
                    
                })
                .addCase(AddcartsProduct.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                    state.success = false;
                    state.message = "problem in adding the product" || "Internal error ";
                    // if (state.success === false) {
                    //     toast.error(action.error.message)
                    // }
                })
                .addCase(deletecartProduct.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                    state.success = false;
                    state.message = ''
                })
                    .addCase(deletecartProduct.fulfilled, (state, action) => {
                        state.loading = false;
                        state.cartProducts = action.payload.cartproduct;
                        state.success = true;
                        state.message = 'product deleted Successfully.'
                        if (state.success) {
                   
                            localStorage.setItem('cart', JSON.stringify(action.payload.cartproduct));
                          
                        }
                       
                    })
                    .addCase(deletecartProduct.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.error.message;
                        state.success = false;
                        state.message = "problem in getting the product" || "Internal error ";
                        // if (state.success === false) {
                        //     toast.error(action.error.message)
                        // }
                    })
                    .addCase(updatecartProduct.pending, (state) => {
                        state.loading = true;
                        state.error = null;
                        state.success = false;
                        state.message = ''
                    })
                        .addCase(updatecartProduct.fulfilled, (state, action) => {
                            state.loading = false;
                            state.cartProducts = action.payload.cartproduct;
                            state.success = true;
                            state.message = 'product updated Successfully.'
                            if (state.success) {
                       
                                localStorage.setItem('cart', JSON.stringify(action.payload.cartproduct));
                              
                            }
                           
                        })
                        .addCase(updatecartProduct.rejected, (state, action) => {
                            state.loading = false;
                            state.error = action.error.message;
                            state.success = false;
                            state.message = "problem in getting the product" || "Internal error ";
                            // if (state.success === false) {
                            //     toast.error(action.error.message)
                            // }
                        })
                
            .addDefaultCase((state) => state);
    }
})
export default cartSlice.reducer;
export const { clearcartState } = cartSlice.actions;

export {cartsGetAllProducts, deletecartProduct,AddcartsProduct,updatecartProduct};