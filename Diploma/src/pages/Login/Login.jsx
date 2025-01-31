import React, {useEffect} from 'react';
import {Field, Form} from 'react-final-form';
import {TextField, Button, Box, Typography, InputAdornment, IconButton} from '@mui/material';
import {AccountCircle, Visibility, VisibilityOff} from '@mui/icons-material';
import HttpsIcon from '@mui/icons-material/Https';
import {useDispatch, useSelector} from 'react-redux';
import {loginStart, togglePasswordVisibility} from '../../redux/slices/loginSlice.js';
import backgroundImage from '../../images/background.jpg';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {requiredValidator} from "../../validators/validators.js";
import {useNavigate} from 'react-router-dom';
import {selectIsAuthenticated, selectLoginError, selectShowPassword} from "../../redux/selectors.js";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const showPassword = useSelector(selectShowPassword);
    const loginError = useSelector(selectLoginError)
    const handleFormSubmit = (values) => {
        dispatch(loginStart(values));
    };
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/panel');
        }
    }, [isAuthenticated, navigate]);
    useEffect(() => {
        if (loginError) {
            alert('Access Denied. Wrong login or password');
        }
    }, [loginError]);
    const validateAdmin = (values) => {
        return {
            username: requiredValidator(values.username),
            password: requiredValidator(values.password),
        };
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                position: 'relative',
                padding: 4,
            }}
        >
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
                    filter: 'blur(1px)',
                    zIndex: -1,
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 400,
                    width: '100%',
                    padding: 3,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    maxWidth: 400,
                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#fff',
                            textAlign: 'center',
                            marginBottom: 4,
                            marginTop: 3,
                        }}
                    >
                        Admin Panel
                    </Typography>
                    <AdminPanelSettingsIcon
                        sx={{
                            color: '#fff',
                            fontSize: 30,
                            marginBottom: 4,
                            marginTop: 3,
                        }}
                    />
                </Box>
                <Form
                    onSubmit={handleFormSubmit}
                    validate={validateAdmin}
                    render={({handleSubmit}) => (
                        <form onSubmit={async (event) => {
                            event.preventDefault();
                            await handleSubmit(event);
                        }}>
                            <Field name="username">
                                {({input, meta}) => (
                                    <TextField
                                        {...input}
                                        label="Login"
                                        fullWidth
                                        margin="normal"
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle sx={{color: '#fff'}}/>
                                                </InputAdornment>
                                            ),
                                            style: {color: '#fff'},
                                        }}
                                        InputLabelProps={{
                                            style: {color: '#fff'},
                                        }}
                                        sx={{
                                            '& .MuiInput-underline:before': {
                                                borderBottom: '1px solid #fff',
                                            },
                                            '& .MuiInput-underline:after': {
                                                borderBottom: '2px solid rgba(255, 123, 172, 0.8) !important',
                                            },
                                            '& .MuiInput-underline:hover:before': {
                                                borderBottom: '1px solid rgba(255, 123, 172, 0.8) !important',
                                            },
                                            '& .MuiInput-underline:hover:after': {
                                                borderBottom: '1px solid rgba(255, 123, 172, 0.8) !important',
                                            },
                                            padding: '10px 0',
                                        }}
                                        error={meta.touched && !!meta.error}
                                        helperText={meta.touched && meta.error ? meta.error : ""}
                                    />

                                )}
                            </Field>
                            <Field name="password">
                                {({input, meta}) => (
                                    <TextField
                                        {...input}
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        fullWidth
                                        margin="normal"
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <HttpsIcon sx={{color: '#fff'}}/>
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => dispatch(togglePasswordVisibility())}
                                                        edge="end"
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff sx={{color: '#fff', mr: '10px'}}/>
                                                        ) : (
                                                            <Visibility sx={{color: '#fff', mr: '10px'}}/>
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                            style: {color: '#fff'},
                                        }}
                                        InputLabelProps={{
                                            style: {color: '#fff'},
                                        }}
                                        sx={{
                                            '& .MuiInput-underline:before': {
                                                borderBottom: '1px solid #fff',
                                            },
                                            '& .MuiInput-underline:after': {
                                                borderBottom: '2px solid rgba(255, 123, 172, 0.8) !important',
                                            },
                                            '& .MuiInput-underline:hover:before': {
                                                borderBottom: '1px solid rgba(255, 123, 172, 0.8) !important',
                                            },
                                            '& .MuiInput-underline:hover:after': {
                                                borderBottom: '1px solid rgba(255, 123, 172, 0.8) !important',
                                            },
                                            padding: '10px 0',
                                        }}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error ? meta.error : null}
                                    />
                                )}
                            </Field>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: 3,
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        color: '#fff',
                                        padding: '16px 60px',
                                    }}
                                >
                                    Login
                                </Button>
                            </Box>
                        </form>
                    )}
                />
            </Box>
        </Box>
    );
};

export default Login;
