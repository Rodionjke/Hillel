import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProductsRequest, openModal} from '../../redux/slices/productSlice.js';
import {
    Button,
    Typography,
    Avatar,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "../../components/Modal/Modal.jsx";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";
import CircularProgress from '@mui/material/CircularProgress';
import {selectProducts, selectModal, selectLoading} from "../../redux/selectors.js";
import {useNavigate} from 'react-router-dom';
import {checkAuth} from '../../validators/validators.js';

const Panel = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const {loading} = useSelector(selectLoading);
    const {isOpen, type, productId} = useSelector(selectModal);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    const goToProducts = () => {
        navigate('/products');
    };

    const openEditModal = (product) => {
        dispatch(openModal({type: 'edit', productId: product.id}));
    };

    const openAddModal = () => {
        dispatch(openModal({type: 'add', productId: null}));
    };

    const openDeleteModal = (id) => {
        dispatch(openModal({type: 'delete', productId: id}));
    };

    if (loading) return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress color="primary"/>
        </Box>
    );

    return (
        <Box sx={{
            boxShadow: "0 0 50px 0 rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(220deg, rgba(255, 123, 172, 0.8) 0%, rgba(67, 165, 220, 0.61) 100%)",
            height: '100%',
            padding: '50px',
        }}>
            <Typography variant="h4" align="center" color="#fff"
                        sx={{mb: '30px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                Products Table
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Button variant="contained" onClick={openAddModal} sx={{mb: '30px'}}>
                    Add Product
                </Button>
                <Button variant="contained" onClick={goToProducts} sx={{mb: '30px'}}>
                    Preview Products
                </Button>
            </Box>

            <TableContainer sx={{
                border: '1px solid #eff0f6',
                borderRadius: '20px',
                width: '100%',
                height: 'auto',
                background: '#fff',
                padding: '10px',
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price ($)</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>
                                    <Avatar
                                        src={product.img}
                                        alt={product.name}
                                        variant="square"
                                        sx={{width: 56, height: 56}}
                                    />
                                </TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => openEditModal(product)}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => openDeleteModal(product.id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isOpen && (type === 'edit' || type === 'add') && <Modal/>}
            {isOpen && type === 'delete' && <DeleteModal productId={productId}/>}
        </Box>
    );
};

export default Panel;
