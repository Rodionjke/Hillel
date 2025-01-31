import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import theme from "./theme.js";
import Login from './pages/Login/Login.jsx';
import Panel from './pages/Panel/Panel.jsx';
import Products from "./pages/Products/Products.jsx";
import {ThemeProvider} from "@mui/material";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/panel" element={<Panel/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
