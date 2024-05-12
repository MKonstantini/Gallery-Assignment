import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const pixabaySlice = createSlice({
    name: "pixabay",
    initialState : {
        topic: 'hobbies',
        data: []        
    },
    reducers: {
        getData: (state, action) => {
            const { topic, page } = action.payload
            const requestUrl = `${import.meta.env.VITE_REACT_API}/api/pixabay/${topic}/${page}`
            axios.get(requestUrl)
                .then((response) => {
                console.log(response.data.hits);
                })
                .catch((error) => {
                console.error(error);
            });
        }
    }
});

export const { getData } = pixabaySlice.actions;
export default pixabaySlice.reducer;