import {takeEvery} from 'redux-saga/effects';
import {loginStart} from '../../slices/loginSlice.js';
import {handleLoginWorker} from './workers.js';

export function* watchLoginStart() {
    yield takeEvery(loginStart.type, handleLoginWorker);
}

