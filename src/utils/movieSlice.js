import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: "Movies",
        initialState: {
            nowPlaying: null,
            topRated: null,
            upcoming: null,
            popular: null,
            topRatedTv: null,
            popularTv: null,
            onTheAirTv: null,
            airingTodayTv: null
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
            },
            addTopRatedTv: (state, action) => {
                state.topRatedTv = action.payload;
            },
            addPopularTv: (state, action) => {
                state.popularTv = action.payload;
            },
             addOnTheAirTv: (state, action) => {
                state.onTheAirTv = action.payload;
            },
             addAiringTodayTv: (state, action) => {
                state.airingTodayTv = action.payload;
            },
        },
    }
);

export const { addPopular, addNowPlaying, addTopRated, addUpcoming, addTopRatedTv, addPopularTv,addOnTheAirTv,addAiringTodayTv } = movieSlice.actions;
export default movieSlice.reducer;