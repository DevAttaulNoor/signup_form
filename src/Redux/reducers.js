import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { formSlice } from "./formSlice";

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    form: formSlice.reducer,
})