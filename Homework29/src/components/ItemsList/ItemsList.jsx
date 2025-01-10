import { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";
import selectors from '../../redux/slices/selectors';
import { useDispatch, useSelector } from "react-redux";
import { clearAllTodo, deleteTodo, fetchStart, updateTodo } from "../../redux/slices/todosSlice";

const ItemsList = () => {
    const items = useSelector(selectors.items);
    const isLoading = useSelector(selectors.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStart());
    }, [dispatch]);

    const handleCheckboxChange = (id, completed) => {
        dispatch(updateTodo({ id, completed }));
    };

    const handleClick = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleClear = () => {
        dispatch(clearAllTodo());
    };

    const handleEditClick = (id, currentText) => {
        const newText = prompt("Enter new task text:", currentText);
            dispatch(updateTodo({ id, text: newText }));
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: '10px' }}>
            <List sx={{ mb: 2 }}>
                {items.map((item) => (
                    <div key={item.id}>
                        <Divider />
                        <ListItem>
                            <input
                                className="margin-right"
                                type="checkbox"
                                checked={item.completed || false}
                                onChange={() => handleCheckboxChange(item.id, !item.completed)}
                            />
                            <ListItemText
                                primary={item.text}
                                style={{
                                    textDecoration: item.completed ? "line-through" : "none",
                                }}
                            />
                            <Button
                                variant="outlined"
                                color="error"
                                style={{ height: "40px" }}
                                sx={{ mr: 2 }}
                                onClick={() => handleEditClick(item.id, item.text)}
                            >
                                Edit todo
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                type='submit'
                                style={{ height: "40px" }}
                                onClick={() => handleClick(item.id)}
                                disabled={isLoading}
                            >
                                Delete
                            </Button>
                        </ListItem>
                    </div>
                ))}
            </List>
            <Button
                variant="outlined"
                color="error"
                type='submit'
                style={{ height: "56px" }}
                onClick={() => handleClear()}
                disabled={isLoading}
            >
                Clear data
            </Button>
        </Box>
    );
};

export default ItemsList;
