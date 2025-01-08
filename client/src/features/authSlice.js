import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: { // multipal action hota hai
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        userLoggedOut: (state) => {
            state.user = null;
            state.isAuthenticated = true;
        }
    }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions
export default authSlice.reducer