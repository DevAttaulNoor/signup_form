import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    profileImg: '',
    isLoading: true,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },

        logoutUser: (state) => {
            state.user = null;
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setProfileImg: (state, action) => {
            state.profileImg = action.payload;
        },
    }
})

export const {loginUser, logoutUser, setLoading, setProfileImg} = userSlice.actions;