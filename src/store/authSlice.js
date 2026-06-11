import { createSlice } from "@reduxjs/toolkit";
import { set } from "react-hook-form";


const initialState = {
    status: false,
    userData: null,
    userDetails: null,
    loader: true
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        addDetails: (state, action) => {
            state.userDetails = action.payload
        },
        removeDetails: (state) => {
            state.userDetails = null;
        },
        changeLoader: (state, action) => {
            state.loader = action.payload
        }
    }
})

export const {login, logout, addDetails, removeDetails, changeLoader} = authSlice.actions;

export default authSlice.reducer;