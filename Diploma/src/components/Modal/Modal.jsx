import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    closeModal,
    setFormValue,
    setFormErrors,
    addProductRequest,
    updateProductRequest
} from '../../redux/slices/productSlice';
import {TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import {numberValidator, requiredValidator} from "../../validators/validators.js";

const Modal = () => {
    const dispatch = useDispatch();
    const {type, productId, form, errors} = useSelector((state) => state.products.modal);
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        if (type === 'edit' && productId) {
            const product = products.find(product => product.id === productId);
            if (product) {
                dispatch(setFormValue({field: 'name', value: product.name}));
                dispatch(setFormValue({field: 'category', value: product.category}));
                dispatch(setFormValue({field: 'quantity', value: product.quantity}));
                dispatch(setFormValue({field: 'price', value: product.price}));
                dispatch(setFormValue({field: 'img', value: product.image}));
            }
        } else if (type === 'add') {
            dispatch(setFormValue({field: 'name', value: ''}));
            dispatch(setFormValue({field: 'category', value: ''}));
            dispatch(setFormValue({field: 'quantity', value: 0}));
            dispatch(setFormValue({field: 'price', value: 0}));
            dispatch(setFormValue({field: 'img', value: ''}));
        }
    }, [type, productId, products, dispatch]);

    const handleChange = (error) => {
        const {name, value} = error.target;
        dispatch(setFormValue({field: name, value}));
    };

    const handleSubmit = () => {
        const errors = {
            name: requiredValidator(form.name),
            category: requiredValidator(form.category),
            quantity: numberValidator(form.quantity),
            price: numberValidator(form.price),
            img: form.img && form.img.trim() === '' ? '' : '',
        };

        dispatch(setFormErrors(errors));

        const hasErrors = Object.values(errors).some(error => error);
        if (hasErrors) return;

        if (type === 'edit') {
            dispatch(updateProductRequest({...form, id: productId}));
        } else if (type === 'add') {
            dispatch(addProductRequest(form));
        }

        dispatch(closeModal());
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>{type === 'edit' ? 'Edit Product' : 'Add Product'}</DialogTitle>
            <DialogContent>
                <TextField
                    label="Image URL (Optional)"
                    name="img"
                    value={form.img}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.img)}
                    helperText={errors.img || 'Image URL is optional'}
                />
                <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                />
                <TextField
                    label="Category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.category)}
                    helperText={errors.category}
                />
                <TextField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={form.quantity}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.quantity)}
                    helperText={errors.quantity}
                    inputProps={{
                        min: 0,
                        step: 1,
                    }}
                />
                <TextField
                    label="Price ($)"
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    error={Boolean(errors.price)}
                    helperText={errors.price}
                    inputProps={{
                        min: 0,
                        step: 0.01,
                    }}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    {type === 'edit' ? 'Save Changes' : 'Add Product'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;
