import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
        modal: {
            isOpen: false,
            type: '',
            productId: null,
            form: {
                image: '',
                category: '',
                name: '',
                quantity: '',
                price: ''
            },
            errors: {}
        },
    },
    reducers: {
        fetchProductsRequest: (state) => {
            state.loading = true;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        openModal: (state, action) => {
            state.modal.isOpen = true;
            state.modal.type = action.payload.type;
            state.modal.productId = action.payload.productId;
        },
        closeModal: (state) => {
            state.modal.isOpen = false;
            state.modal.type = '';
            state.modal.productId = null;
            state.modal.form = {
                image: '',
                category: '',
                name: '',
                quantity: '',
                price: ''
            };
            state.modal.errors = {};
        },
        setFormValue: (state, action) => {
            state.modal.form[action.payload.field] = action.payload.value;
        },
        setFormErrors: (state, action) => {
            state.modal.errors = action.payload;
        },
        updateProduct: (state, action) => {
            const updatedProduct = action.payload;
            const index = state.products.findIndex((product) => product.id === updatedProduct.id);
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }
            state.loading = false;
        },
        updateProductRequest: (state) => {
            state.loading = true;
        },
        addProductRequest: (state) => {
            state.loading = true;
        },
        addProductSuccess: (state, action) => {
            state.products.push(action.payload);
            state.loading = false;
        },
        deleteProductRequest: (state) => {
            state.loading = true;
        },
        deleteProductSuccess: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            state.loading = false;
        },
        deleteProductFailure: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    openModal,
    closeModal,
    setFormValue,
    setFormErrors,
    updateProduct,
    updateProductRequest,
    addProductRequest,
    addProductSuccess,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
