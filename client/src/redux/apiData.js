import { createSlice } from "@reduxjs/toolkit";

export const apiDataSlice = createSlice({
    name: "apiData",
    initialState : {
        topic: 'burgers',
        data: 0        
    },
    reducers: {
        changeTopic: (state, topic) => {
            state.topic = topic.payload
            state.data = 0
        }
    }
});

export const { changeTopic } = apiDataSlice.actions;
export default apiDataSlice.reducer;