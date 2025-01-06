import {createSlice} from "@reduxjs/toolkit";
import API from "../constants/constants";

const initialState = {
    data: null,
    loading: false,
    error: null,
    endpoint: null,
};

export const swapiSlice = createSlice({
    name: "swapi",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        fetchFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearData: (state) => {
            state.data = null;
            state.error = null;
        },
        setEndpoint: (state, action) => {
            state.endpoint = action.payload;
        },
    },
});

export const {fetchStart, fetchSuccess, fetchFailure, clearData, setEndpoint} = swapiSlice.actions;

export const fetchData = (endpoint) => async (dispatch) => {
    dispatch(fetchStart());
    try {
        const response = await fetch(`${API.SWAPI_URL}${endpoint}`);
        const data = await response.json();
        dispatch(fetchSuccess(data));
    } catch (error) {
        dispatch(fetchFailure(error.toString()));
    }
};

export default swapiSlice.reducer;
