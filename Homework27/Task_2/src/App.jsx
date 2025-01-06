import TodoForm from './components/TodoForm/TodoForm';
import {Provider} from 'react-redux';
import store from "./redux/store.js";
import Title from "./components/Title/Title.jsx";
import {Container} from "@mui/material";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer.jsx";
function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="sm">
                <Title/>
                <TodoForm/>
                <TodoList/>
                <Footer/>
            </Container>
        </Provider>
    );
}

export default App;
