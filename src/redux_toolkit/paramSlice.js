import { createSlice } from '@reduxjs/toolkit';

const paramsSlice = createSlice({
    name: 'params',
    initialState: {},
    reducers: {
        updateParams: (state, action) => {
            const newData = action.payload;
            localStorage.setItem('params', JSON.stringify(newData));
            return newData;
        },
    },
});

export const { updateParams } = paramsSlice.actions;
export default paramsSlice.reducer;
