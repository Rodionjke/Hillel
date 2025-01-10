import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './slices/todosSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga.js'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
  middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);