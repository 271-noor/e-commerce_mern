import { configureStore, consfigureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slices';


const store = configureStore({
    reducer : {
        auth : authReducer
    }
})

export default store;