import { takeEvery } from "redux-saga/effects";
import {
    fetchStart,
    deleteTodo,
    addTodo,
    clearAllTodo,
    updateTodo
} from "./slices/todosSlice.js";
import {
    fetchItemsSaga,
    addItemSaga,
    deleteItemSaga,
    updateItemSaga,
    clearDataSaga
} from "./workers.js";

export function* watchFetchTodos() {
    yield takeEvery(fetchStart.type, fetchItemsSaga);
}
export function* watchAddTodo() {
    yield takeEvery(addTodo.type, addItemSaga);
}
export function* watchDeleteTodo() {
    yield takeEvery(deleteTodo.type, deleteItemSaga);
}
export function* watchClearData() {
    yield takeEvery(clearAllTodo.type, clearDataSaga);
}
export function* watchUpdateTask() {
    yield takeEvery(updateTodo.type, updateItemSaga);
}
