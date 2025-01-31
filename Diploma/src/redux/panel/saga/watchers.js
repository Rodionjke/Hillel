import {
    addProductRequest,
    deleteProductRequest,
    fetchProductsRequest,
    updateProductRequest,
} from '../../slices/productSlice';
import {
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleFetchProducts,
} from './workers.js';
import {takeEvery} from 'redux-saga/effects';

export function* watchFetchProducts() {
    yield takeEvery(fetchProductsRequest.type, handleFetchProducts);
}

export function* watchUpdateProduct() {
    yield takeEvery(updateProductRequest.type, handleUpdateProduct);
}

export function* watchAddProduct() {
    yield takeEvery(addProductRequest.type, handleAddProduct);
}

export function* watchDeleteProduct() {
    yield takeEvery(deleteProductRequest.type, handleDeleteProduct);
}