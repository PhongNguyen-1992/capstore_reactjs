import { configureStore } from "@reduxjs/toolkit";
import listMovieSlice from "../HomeTemplete/ListMovie/slice";


const store = configureStore({
    reducer: {
        listMovieSlice,
        

    }
})
export default store;