import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {useSelector} from 'react-redux';
import selectors from "../redux/slice/selectors.js";

const TodoList = () => {
    const items = useSelector(selectors.items);

    return (
        <Box sx={{width: '100%', bgcolor: 'background.paper', mt: '10px'}}>
            <List>
                {items.map((item) => (
                    <div key={item.id}>
                        <Divider/>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <span>
                                        {item.text}
                                    </span>
                                }
                            />
                        </ListItem>
                    </div>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
