import React from 'react';
import {useDispatch} from 'react-redux';
import {closeModal, deleteProductRequest} from "../../redux/slices/productSlice.js";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material';
import PropTypes from 'prop-types';

const DeleteModal = ({productId}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProductRequest(productId));
        dispatch(closeModal());
    };

    return (
        <Dialog open onClose={() => dispatch(closeModal())}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this product?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
                <Button onClick={handleDelete}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};
DeleteModal.propTypes = {
    productId: PropTypes.number.isRequired,
};
export default DeleteModal;
