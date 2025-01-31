import {styled} from '@mui/system';
import {Card, Button} from '@mui/material';

export const StyledCard = styled(Card)(({theme}) => ({
    maxWidth: 345,
    borderRadius: '15px',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[10],
    },
}));


export const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '10px 20px',
    textTransform: 'none',
    borderRadius: '20px',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    }
}));
