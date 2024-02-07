import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import userFunctions from '../reducer_function/userFunctions';
import { toast } from 'react-toastify';



const LoginUser = createAsyncThunk("auth/userlogin", async (user) => {
    try {
        return await userFunctions.login(user);

    } catch (error) {
        throw error;
    }
});
const LogoutUser = createAsyncThunk("auth/userlogout", async () => {
    try {
        return await userFunctions.logout()

    } catch (error) {
        throw error;
    }
});
const RegisterUser = createAsyncThunk("auth/registerlogin", async (user) => {
    try {
        return await userFunctions.register(user);

    } catch (error) {
        throw error;
    }
});
const initialState = {
    user: '',
    loading: false,
    error: null,
    success: false,
    message: "",
    token: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            console.log("pending")
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = ''
        })
            .addCase(LoginUser.fulfilled, (state, action) => {
                console.log("fulldilled")
                state.loading = false;
                state.user = action.payload.user;
                state.success = true;
                state.message = 'Login Successful.'
                if (state.success === true) {
                    toast.info("login Succesful.")
                }
                if (state.success) {
                    const { name, email, profilePhoto } = action.payload.user;
                    const userNewValue = { name, email, profilePhoto };
                    localStorage.setItem('user', JSON.stringify(userNewValue));
                    localStorage.setItem('token', action.payload.token);
                }
            })
            .addCase(LoginUser.rejected, (state, action) => {

                state.loading = false;
                state.error = action.error.message;
                state.success = false;
                state.message = "login failed" || "Internal error ";
                if (state.success === false) {
                    toast.info(action.error.message)
                }
            })
            .addCase(LogoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
                state.message = ''
            })
            .addCase(LogoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = null;
                state.success = true;
                state.message = 'Logout Successful.'
                if (state.success) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    localStorage.removeItem('wishlist');

                }
            })
            
            .addCase(LogoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
                state.message = "logout failed" || "Internal error ";
            })
            //register
            .addCase(RegisterUser.pending, (state) => {
               
                state.loading = true;
                state.error = null;
                state.success = false;
                state.message = ''
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {

                state.loading = false;
                state.user = action.payload.user;
                state.success = true;
                state.message = 'New user created  Successfully.'
                if (state.success === true) {
                    toast.info(" user created  Successfully.")
                }

            })
            .addCase(RegisterUser.rejected, (state, action) => {

                state.loading = false;
                state.error = action.error.message;
                state.success = false;
                state.message = "signup failed" || "Internal error ";
                if (state.success === false) {
                    toast.info(action.error.message)
                }
            })
            .addDefaultCase((state) => state);
    }
})

export default authSlice.reducer;
export { LoginUser, LogoutUser ,RegisterUser};