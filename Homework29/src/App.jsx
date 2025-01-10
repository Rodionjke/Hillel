import TodoForm from './components/TodoForm/TodoForm';
import ItemsList from './components/ItemsList/ItemsList';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Box from "@mui/material/Box";

function App() {
    return (
        <Box sx={{ p: '20px' }}>
        <Provider store={store}>
            <h1>Todo</h1>
            <TodoForm/>
            <ItemsList/>
        </Provider>
        </Box>
    );
}

export default App;
