import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: 'login',
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        }
    }
})

export const { setActive } = formSlice.actions;