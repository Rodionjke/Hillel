import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Header.scss';
import Main from '../Main/Main.jsx';
import Todo from '../Todo/Todo.jsx';
import Swapi from "../Swapi/Swapi.jsx";

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', p: '20px'}}>
            <TabContext value={value}>
                <Box display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                     sx={{ borderBottom: 1, borderColor: 'divider', pb:'20px'}}>
                    <img src="../../src/assets/react.svg" alt="react" width='48px' height='48px' className='rotate'/>
                    <TabList onChange={handleChange} aria-label="Landing-resume">
                        <Tab label="Main" value="1" />
                        <Tab label="Todo list" value="2" />
                        <Tab label="Swapi" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Main/></TabPanel>
                <TabPanel value="2"><Todo/></TabPanel>
                <TabPanel value="3"><Swapi/></TabPanel>
            </TabContext>
        </Box>
    );
}