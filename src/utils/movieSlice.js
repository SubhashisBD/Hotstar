import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: "Movies",
        initialState: {
            nowPlaying: null,
            topRated: null,
            upcoming: null,
            popular: null
        },
        reducers: {
            addNowPlaying: (state, action) => {
                state.nowPlaying = action.payload;
            },
            addTopRated: (state, action) => {
                state.topRated = action.payload;
            },
            addUpcoming: (state, action) => {
                state.upcoming = action.payload;
            },
            addPopular: (state, action) => {
                state.popular = action.payload;
            }
        },
    }
);

export const { addPopular, addNowPlaying, addTopRated, addUpcoming } = movieSlice.actions;
export default movieSlice.reducer;