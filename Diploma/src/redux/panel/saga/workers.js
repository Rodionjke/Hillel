import axios from 'axios';
import {API_URL} from '../../../constants/constants';
import {
    fetchProductsSuccess,
    fetchProductsFailure,
    updateProduct,
    addProductSuccess,
    deleteProductSuccess,
    deleteProductFailure,
} from '../../slices/productSlice';
import {call, put} from 'redux-saga/effects';

export function* handleFetchProducts() {
    try {
        const response = yield call(axios.get, API_URL);
        yield put(fetchProductsSuccess(response.data));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* handleUpdateProduct(action) {
    try {
        const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
        yield put(updateProduct(response.data));
    } catch (error) {
        console.error('Failed to update product:', error);
    }
}

export function* handleAddProduct(action) {
    try {
        const response = yield call(axios.post, API_URL, action.payload);
        yield put(addProductSuccess(response.data));
    } catch (error) {
        console.error('Failed to add product:', error);
    }
}

export function* handleDeleteProduct(action) {
    try {
        yield call(axios.delete, `${API_URL}/${action.payload}`);
        yield put(deleteProductSuccess(action.payload));
    } catch (error) {
        yield put(deleteProductFailure(error.message));
        console.error('Failed to delete product:', error);
    }
}
