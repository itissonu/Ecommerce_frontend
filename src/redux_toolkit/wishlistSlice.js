import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import wishlistFunctions from '../reducer_function/wishlistProducts';

const WishlistGetAllProducts = createAsyncThunk("wishlist/getwishlistproducts", async () => {
    try {
     
        return await    wishlistFunctions.WishlistGetAllProducts();

    } catch (error) {
        throw error;
    }
});
const AddWishlistGProduct = createAsyncThunk("wishlist/addwishlistproducts", async (body) => {
    try {
     
        return await  wishlistFunctions.AddWishlistProduct(body);

    } catch (error) {
        throw error;
    }
});
const deleteWishlistProduct = createAsyncThunk("wishlist/deletewishlistproducts", async (body) => {
    try {
     
        return await  wishlistFunctions.deleteWishlistProduct(body);

    } catch (error) {
        throw error;
    }
});
const initialState = {
    wishproducts: [],
    loading: false,
    error: null,
    success: false,
    message: "", 
 
};
export const wishlistSlice = createSlice({
    name: "wishlistproducts",
    initialState: initialState,
    reducers: {clearWishlistState: (state) => {
        return initialState;}},
    extraReducers: (builder) => {
        builder.addCase(WishlistGetAllProducts.pending, (state) => {  
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = ''
        })
            .addCase(WishlistGetAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.wishproducts = action.payload.wishlistproduct;
                state.success = true;
                state.message = 'product wishlisted .' 
                if (state.success) {
                   
                    localStorage.setItem('wishlist', JSON.stringify(action.payload.wishlistproduct));
                  
                }
            })
            .addCase(WishlistGetAllProducts.rejected, (state, action) => {
                console.log(action.error)
                state.loading = false;
                state.error = action.error;
                state.success = false;
                state.message = "problem in getting the product" || "Internal error ";
                if (state.success === false) {
                    toast.error(action.error.message)
                }
            })
            .addCase(AddWishlistGProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
                state.message = ''
            })
                .addCase(AddWishlistGProduct.fulfilled, (state, action) => {
                    state.loading = false;
                    state.wishproducts = action.payload.wishlistproduct;
                    state.success = true;
                    state.message = 'product wishlisted Successfully.'
                  
                    
                })
                .addCase(AddWishlistGProduct.rejected, (state, action) => {
                    console.log(action)
                    state.loading = false;
                    state.error = action.error.message;
                    state.success = false;
                    state.message = "problem in adding the product" || "Internal error ";
                    if (state.success === false) {
                        toast.error(action.error?.message)
                    }
                })
                .addCase(deleteWishlistProduct.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                    state.success = false;
                    state.message = ''
                })
                    .addCase(deleteWishlistProduct.fulfilled, (state, action) => {
                        state.loading = false;
                        state.wishproducts = action.payload.wishlistproduct;
                        state.success = true;
                        state.message = 'product deleted Successfully.'
                        if (state.success) {
                   
                            localStorage.setItem('wishlist', JSON.stringify(action.payload.wishlistproduct));
                          
                        }
                       
                    })
                    .addCase(deleteWishlistProduct.rejected, (state, action) => {
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
export default wishlistSlice.reducer;
export const { clearWishlistState } = wishlistSlice.actions;

export {AddWishlistGProduct,WishlistGetAllProducts,deleteWishlistProduct };