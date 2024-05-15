import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Base topics for defualt topic and topics modal
export const featuredTopics = ['hobbies', 'food', 'pets', 'work', 'sport'];

export const pixabaySlice = createSlice({
  name: 'pixabay',
  initialState: {
    topic: featuredTopics[0],
    page: 1,
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setDataStart: (state, action) => {
      state.loading = true;
      state.error = null;
      state.page = action.payload.page;
      state.topic = action.payload.topic;
    },
    setDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    setDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setDataStart,
  setDataSuccess,
  setDataFailure,
  setTopic,
  setPage,
} = pixabaySlice.actions;

// Thunk function to handle async
export const setDataAsync = (topic, page) => async (dispatch) => {
  console.log('set data async');
  dispatch(setDataStart({ topic, page }));
  try {
    const requestUrl = `${
      import.meta.env.VITE_REACT_API
    }/api/pixabay/${topic}/${page}`;
    const response = await axios.get(requestUrl);
    dispatch(setDataSuccess(response.data));
  } catch (error) {
    dispatch(setDataFailure(error.message));
    console.error(error);
  }
};

export default pixabaySlice.reducer;
