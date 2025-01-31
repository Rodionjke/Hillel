import {CardContent, CardMedia, Typography} from "@mui/material";
import {StyledButton, StyledCard} from "./styles.jsx";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const ProductItem = ({product}) => {
    return (
        <StyledCard>
            <CardMedia
                component="img"
                alt={product.name}
                height="250"
                image={product.image}
                sx={{objectFit: 'contain'}}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{mb: 2}}>
                    {product.quantity} left in stock
                </Typography>
                <Typography variant="h6" color="primary" sx={{fontWeight: 'bold', mb: 2}}>
                    ${product.price}
                </Typography>
                <StyledButton variant="contained" fullWidth>
                    <AddShoppingCartRoundedIcon sx={{mr: 1}}/>
                    Add to Cart
                </StyledButton>
            </CardContent>
        </StyledCard>
    );
};

export default ProductItem;
