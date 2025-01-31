import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(255, 123, 172, 0.8)',
        },
        secondary: {
            main: '#fff',
        },
    },
    typography: {
        fontFamily: '"Poppins", sans-serif',
        h1: {
            fontFamily: '"Playfair Display", serif',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        body1: {
            fontFamily: '"Poppins", sans-serif',
        },
        body2: {
            fontFamily: '"Poppins", sans-serif',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: ' 0 0 50px 0 rgba(0, 0, 0, 0.1)',
                    background: 'linear-gradient(220deg, rgba(255, 123, 172, 0.8) 0%, rgba(67, 165, 220, 0.61) 100%)',
                    color: '#fff',
                    borderRadius: '24px',
                    padding: '10px 20px',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.1)',
                    background: '#fff',
                },
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '30px',
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: '30px',
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
});

export default theme;
