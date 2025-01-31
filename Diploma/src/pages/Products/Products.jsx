import useFetchProducts from '../../hooks/useFetchProducts';
import {Grid, Typography, CircularProgress, Box, ThemeProvider} from "@mui/material";
import ProductItem from "../../components/ProductItem/ProductItem.jsx";
import theme from "../../theme";
import backgroundImage from '../../images/background.jpg';

const Products = () => {
    const { products, loading, error } = useFetchProducts();

    if (loading) return <CircularProgress sx={{margin: 'auto', display: 'block'}}/>;
    if (error) return <Typography color="error" variant="h6" align="center">Error: {error}</Typography>;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                position: 'relative',
                padding: 4,
                minHeight: '100vh',
                overflow: 'hidden',
            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        filter: 'blur(1px)',
                        zIndex: -1,
                    }}
                />
                <Box sx={{position: 'relative', zIndex: 1}}>
                    <Typography component="h3" color="secondary" variant="h3" align="center" sx={{mb: '50px'}}>
                        Products
                    </Typography>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <ProductItem product={product}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Products;
