import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../redux/slices/productSlice';
import { selectProducts, selectLoading, selectError } from '../redux/selectors';
import { checkAuth } from '../validators/validators';

const useFetchProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        checkAuth();
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    return { products, loading, error };
};

export default useFetchProducts;
