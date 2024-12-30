import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        }
    }
});

export const {addItem} = todosSlice.actions;
export default todosSlice.reducer;
