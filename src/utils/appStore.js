import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import cricketReducer from "./cricketSlice"

const appStore = configureStore(
    {
        reducer:{
            movies:moviesReducer,
            cricket:cricketReducer
        }

    }
)

export default appStore;