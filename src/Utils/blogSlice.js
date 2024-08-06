import { createSlice } from "@reduxjs/toolkit";

const storedData = () => {
    try {
        const recevdData = localStorage.getItem("blogs");
        if (recevdData === null) {
            return [];
        }
        return JSON.parse(recevdData);
    } catch (err) {
        console.error("Could not load state from local storage", err);
        return [];
    }
};

const storedState = (state) => {
    try {
        const recevdData = JSON.stringify(state);
        localStorage.setItem("blogs", recevdData);
    } catch (err) {
        console.error("Could not save state to local storage", err);
    }
};

const initialState = {
    card: storedData()
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.card.push(action.payload);
            storedState(state.card);
        },
        removeBlog: (state, action) => {
            state.card = state.card.filter((blog) => blog.id !== action.payload);
            storedState(state.card);
        }
    }
});

export const { addBlog, removeBlog } = blogSlice.actions;

export default blogSlice.reducer;
