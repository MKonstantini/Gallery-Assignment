import { configureStore } from "@reduxjs/toolkit";
import pixabayReducer from './pixabay';

export default configureStore({
    reducer: {
        pixabay: pixabayReducer
    }
})