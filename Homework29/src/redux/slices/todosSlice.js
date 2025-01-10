import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], loading: false };

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchItems: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        addTodo: (state) => {
            state.loading = true;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        },
        deleteTodo: (state) => {
            state.loading = true;
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.loading = false;
        },
        updateTodo: (state) => {
            state.loading = true;
        },
        updateTodoSuccess: (state, action) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? { ...item, text: action.payload.text, completed: action.payload.completed } : item
            );
            state.loading = false;
        },
        clearAllTodo: (state) => {
            state.loading = true;
        },
        clearData: (state) => {
            state.items = [];
            state.loading = false;
        },
    },
});

export const {
    addItem,
    updateTodo,
    updateTodoSuccess,
    clearAllTodo,
    clearData,
    addTodo,
    deleteItem,
    deleteTodo,
    fetchItems,
    fetchStart
} = todosSlice.actions;
