import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from './apiData';

export default configureStore({
    reducer: {
        apiData: apiDataReducer
    }
})