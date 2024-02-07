import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import orderFunctions from '../reducer_function/orderFunction';


const ordersGetAllProducts = createAsyncThunk("order/getorderproducts", async () => {
    try {
   
        return await    orderFunctions.getallorderProducts();

    } catch (error) {
        throw error;
    }
});

const AddOrdersProduct = createAsyncThunk("order/addorderproducts", async (body) => {
    try {
        console.log(body)
        return await   orderFunctions.Addaorder(body);
    } catch (error) {
        throw error;
    }
});

const deleteOrderProduct = createAsyncThunk("order/deleteorderproducts", async (body) => {
    try {
     
        return await   orderFunctions.deleteorderProduct(body);

    } catch (error) {
        throw error;
    }
});
const updateOrderProduct = createAsyncThunk("order/updateorderproducts", async (body) => {
    try {
     
        return await   orderFunctions.deleteorderProduct(body);

    } catch (error) {
        throw error;
    }
});
const initialState = {
   orderProducts: [],
    loading: false,
    error: null,
    success: false,
    message: "", 
};

export const orderSlice = createSlice({
    name: "orderProducts",
    initialState: initialState,
    reducers: {clearOrdertState: (state) => {
        return initialState;}},
    extraReducers: (builder) => {
        builder.addCase(ordersGetAllProducts.pending, (state) => {  
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = ''
        })
            .addCase(ordersGetAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.orderProducts = action.payload.ordersitem;
                state.success = true;
                state.message = 'product odered .' 
                
            })
            .addCase(ordersGetAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
                state.message = "problem in getting the product" || "Internal error ";
                if (state.success === false) {
                    toast.error(action.error.message)
                }
            })
            .addCase(AddOrdersProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
                state.message = ''
            })
                .addCase(AddOrdersProduct.fulfilled, (state, action) => {
                    state.loading = false;
                    state.orderProducts = action.payload.ordersitem;
                    state.success = true;
                    state.message = 'product wishlisted Successfully.'
                    if (state.success === true) {
                        toast.info("product wishlited successfully")
                    } 
                    
                })
                .addCase(AddOrdersProduct.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                    state.success = false;
                    state.message = "problem in adding the product" || "Internal error ";
                    if (state.success === false) {
                        toast.error(action.error.message)
                    }
                })
                .addCase(deleteOrderProduct.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                    state.success = false;
                    state.message = ''
                })
                    .addCase(deleteOrderProduct.fulfilled, (state, action) => {
                        state.loading = false;
                        state.orderProducts = action.payload.ordersitem;
                        state.success = true;
                        state.message = 'product deleted Successfully.'
                        if (state.success) {
                   
                            localStorage.setItem('wishlist', JSON.stringify(action.payload.wishlistproduct));
                          
                        }
                       
                    })
                    .addCase(deleteOrderProduct.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.error.message;
                        state.success = false;
                        state.message = "problem in getting the product" || "Internal error ";
                        if (state.success === false) {
                            toast.error(action.error.message)
                        }
                    })
                    .addCase(updateOrderProduct.pending, (state) => {
                        state.loading = true;
                        state.error = null;
                        state.success = false;
                        state.message = ''
                    })
                        .addCase(updateOrderProduct.fulfilled, (state, action) => {
                            state.loading = false;
                            state.orderProducts = action.payload.ordersitem;
                            state.success = true;
                            state.message = 'product deleted Successfully.'
                           
                           
                        })
                        .addCase(updateOrderProduct.rejected, (state, action) => {
                            state.loading = false;
                            state.error = action.error.message;
                            state.success = false;
                            state.message = "problem in getting the product" || "Internal error ";
                            if (state.success === false) {
                                toast.error(action.error.message)
                            }
                        })
                
            .addDefaultCase((state) => state);
    }
})
export default orderSlice.reducer;
export const { clearOrdertState } = orderSlice.actions;

export {ordersGetAllProducts, deleteOrderProduct,AddOrdersProduct,updateOrderProduct};