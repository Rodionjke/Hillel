import React from 'react';
import {Box, Typography, Link, IconButton} from '@mui/material';
import {Facebook, Instagram, Twitter, Email} from '@mui/icons-material';
import Divider from "@mui/material/Divider";

const Footer = () => {
    return (
        <>
            <Divider/>
            <Box
                component="footer"
                sx={{
                    p: 2,
                }}
            >
                <Typography variant="h5" sx={{textAlign: 'center', mb: 4, mt:2}}>
                    My contacts
                </Typography>
                <Box display="flex"
                     justifyContent="space-around"
                     alignItems="center">
                    <Typography variant="body2" sx={{mb:3}}>
                        Email: <Link href="mailto:RodionSylenko@example.com" target="_blank"
                                     color="inherit">RodionSylenko@example.com</Link>
                    </Typography>
                    <Typography variant="body2" sx={{mb:3}}>
                        Phone: <Link href="tel:+380951234567" target="_blank" color="inherit">+380 (95) 12-34-567</Link>
                    </Typography>
                </Box>
                <Box sx={{textAlign: 'center'}}>
                    <IconButton
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener"
                        sx={{color: '#1976d2'}}
                    >
                        <Facebook/>
                    </IconButton>
                    <IconButton
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener"
                        sx={{color: '#1976d2'}}
                    >
                        <Instagram/>
                    </IconButton>
                    <IconButton
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener"
                        sx={{color: '#1976d2'}}
                    >
                        <Twitter/>
                    </IconButton>
                    <IconButton
                        href="mailto:example@example.com"
                        sx={{color: '#1976d2'}}
                    >
                        <Email/>
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
