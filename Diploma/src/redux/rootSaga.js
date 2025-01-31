import {all} from 'redux-saga/effects';
import {watchFetchProducts, watchAddProduct, watchUpdateProduct, watchDeleteProduct} from './panel/saga/watchers.js';
import {watchLoginStart} from './login/saga/watchers';

export default function* rootSaga() {
    yield all([
        watchLoginStart(),
        watchFetchProducts(),
        watchAddProduct(),
        watchUpdateProduct(),
        watchDeleteProduct(),
    ]);
}
