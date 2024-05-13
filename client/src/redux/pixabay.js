import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const pixabaySlice = createSlice({
    name: "pixabay",
    initialState : {
        topic: 'hobbies',
        page: 1,
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        setDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        setDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { setDataStart, setDataSuccess, setDataFailure, setTopic, setPage } = pixabaySlice.actions;

// Thunk function to handle async logic
export const setDataAsync = (topic, page) => async (dispatch) => {
    dispatch(setTopic(topic));
    dispatch(setPage(page));
    dispatch(setDataStart());
    try {
        const requestUrl = `${import.meta.env.VITE_REACT_API}/api/pixabay/${topic}/${page}`;
        const response = await axios.get(requestUrl);
        dispatch(setDataSuccess(response.data));
    } catch (error) {
        dispatch(setDataFailure(error.message));
        console.error(error);
    }
};

export default pixabaySlice.reducer;