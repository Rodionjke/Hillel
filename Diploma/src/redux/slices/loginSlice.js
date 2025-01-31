import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isAuthenticated: false,
        loginError: null,
        showPassword: false,
    },
    reducers: {
        loginStart: (state) => {
            state.loginError = null;
        },
        loginSuccess: (state) => {
            state.isAuthenticated = true;
        },
        loginFailure: (state, action) => {
            state.loginError = action.payload;
        },
        togglePasswordVisibility: (state) => {
            state.showPassword = !state.showPassword;
        }
    },
});

export const {loginStart, loginSuccess, loginFailure, togglePasswordVisibility} = loginSlice.actions;

export default loginSlice.reducer;
