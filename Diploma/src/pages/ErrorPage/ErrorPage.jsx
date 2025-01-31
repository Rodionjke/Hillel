import React from 'react';
import {Box, Typography} from '@mui/material';

const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: "linear-gradient(220deg, rgba(255, 123, 172, 0.8) 0%, rgba(67, 165, 220, 0.61) 100%)",
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Typography variant="h1" sx={{fontSize: '8rem', marginBottom: 2, fontWeight: 'bold', color: '#f44336'}}>
                404
            </Typography>
            <Typography variant="h5" sx={{color: 'black', marginBottom: 2}}>
                Page Not Found
            </Typography>
            <Typography variant="body1" sx={{color: 'black', marginBottom: 3}}>
                Sorry, but that page doesn't exist. Please check the route or go back to the main page.
            </Typography>
        </Box>
    );
};

export default ErrorPage;
