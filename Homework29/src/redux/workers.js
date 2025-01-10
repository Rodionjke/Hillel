import {call, put} from "redux-saga/effects";
import API from "../redux/constants/constants.js";
import {
    fetchItems,
    addItem,
    deleteItem,
    updateTodoSuccess,
    clearData
} from "./slices/todosSlice.js"
import fetchHelper from "../helpers/fetchHelper.js";

export function* fetchItemsSaga() {
    try {
        const todos = yield call(fetchHelper, API.URL_TODO);
        yield put(fetchItems(todos.map(todo => ({
            ...todo,
            completed: todo.completed || false,
        }))));
    } catch (e) {
        console.error(e);
    }
}

export function* addItemSaga(action) {
    try {
        const todo = yield call(fetchHelper, API.URL_TODO, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: action.payload}),
        });
        yield put(addItem(todo));
    } catch (e) {
        console.error(e);
    }
}

export function* deleteItemSaga(action) {
    try {
        yield call(fetchHelper, `${API.URL_TODO}/${action.payload}`, {
            method: 'DELETE',
        });
        yield put(deleteItem({id: action.payload}));
    } catch (e) {
        console.error(e);
    }
}

export function* updateItemSaga(action) {
    try {
        const updatedTask = yield call(fetchHelper, `${API.URL_TODO}/${action.payload.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: action.payload.text, completed: action.payload.completed}),
        });
        yield put(updateTodoSuccess({id: action.payload.id, text: updatedTask.text, completed: updatedTask.completed}));
    } catch (e) {
        console.error(e);
    }
}

export function* clearDataSaga() {
    try {
        const todos = yield call(fetchHelper, API.URL_TODO);
        for (const todo of todos) {
            yield call(fetchHelper, `${API.URL_TODO}/${todo.id}`, {
                method: 'DELETE',
            });
        }
        yield put(clearData());
    } catch (e) {
        console.error(e);
    }
}
