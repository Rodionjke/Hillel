import {Container} from "@mui/material";
import Header from "../components/Header/Header.jsx";
import {createTheme, ThemeProvider} from '@mui/material';
import Footer from "../components/Footer/Footer.jsx";

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 900,
        fontWeightBold: 700,

        h1: {
            fontFamily: '"Roboto", serif',
            fontWeight: 700,
            color: '#222222',
        },
        body1: {
            fontFamily: '"Roboto", serif',
            fontWeight: 400,
            color: '#333333',
        },
        legend: {
            fontFamily: '"Roboto", serif',
            fontWeight: 800,
            color: '#333333',
        },
    },
    palette: {
        primary: {
            main: '#1976D2',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#63A4FF',
        },
        background: {
            default: '#f8f9fa',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
    },
});

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header/>
                <Footer/>
            </Container>
        </ThemeProvider>
    )
}

export default App;
