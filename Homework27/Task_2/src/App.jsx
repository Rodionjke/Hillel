import TodoForm from './components/TodoForm/TodoForm';
import {Provider} from 'react-redux';
import store from "./components/redux/store.js";
import Title from "./components/Title/Title.jsx";
import {Container} from "@mui/material";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="sm">
                <Title/>
                <TodoForm/>
                <TodoList/>
            </Container>
        </Provider>
    );
}

export default App;
