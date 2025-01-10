import { all } from "redux-saga/effects";
import {
    watchFetchTodos,
    watchDeleteTodo,
    watchAddTodo,
    watchClearData,
    watchUpdateTask
} from "./watchers.js";

export default function* rootSaga() {
    yield all([
        watchFetchTodos(),
        watchDeleteTodo(),
        watchAddTodo(),
        watchClearData(),
        watchUpdateTask()
    ]);
}
