import {configureStore} from "@reduxjs/toolkit";
import swapiSlice from "./slices/swapiSlice.js";

export const store = configureStore({
    reducer: {
        swapi: swapiSlice,
    },
});
