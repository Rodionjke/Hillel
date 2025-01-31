import {call, put} from 'redux-saga/effects';
import {loginSuccess, loginFailure} from '../../slices/loginSlice.js';
import {loginApi} from '../../../loginApi.js';

export function* handleLoginWorker(action) {
    try {
        const {username, password} = action.payload;
        const response = yield call(loginApi, {username, password});

        if (response.token) {
            localStorage.setItem('token', response.token);
            yield put(loginSuccess());
        } else {
            throw new Error('No token received');
        }
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}