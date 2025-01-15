import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const TodoList = ({items, onDelete, onCheck}) => {
    return (
        <Box sx={{width: '100%', mt: '10px'}}>
            <List>
                {items.map((item) => (
                    <div key={item.id}>
                        <Divider/>
                        <ListItem>
                            <Checkbox
                                edge="start"
                                checked={item.checked}
                                onChange={() => onCheck(item.id)}
                                tabIndex={-1}
                                disableRipple
                            />
                            <ListItemText
                                primary={
                                    <span style={{textDecoration: item.checked ? 'line-through' : 'none'}}>
                                        {item.text}
                                    </span>
                                }
                            />
                            <IconButton onClick={() => onDelete(item.id)} edge="end" aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                        </ListItem>
                    </div>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
