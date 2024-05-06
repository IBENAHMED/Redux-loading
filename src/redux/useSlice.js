import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {
            name: "",
            email: ""
        },
        loding: null,
        err: false
    },
    reducers: {

        addUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        },

        startUser: (state) => {
            state.loding = true;
        },

        succesUser: (state, action) => {
            state.userData = action.payload;
            state.loding = false;
        },

        errUser: (state) => {
            state.loding = false;
            state.err = true;
        }
    }
});

export const { addUser, succesUser, startUser, errUser } = userSlice.actions;

export default userSlice.reducer;