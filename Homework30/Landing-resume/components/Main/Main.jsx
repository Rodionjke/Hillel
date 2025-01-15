import * as React from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {styled} from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from "@mui/material/Box";
import '../Main/Main.scss'
import {Container} from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function Main() {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#1976d2',
        },
        '& .MuiRating-iconHover': {
            color: '#0000FF',
        },
    });

    return (
        <Container sx={{p: "20px"}}>
            <Typography variant="h2" component="div" sx={{mb: "50px", mt:2, textAlign: 'center'}}>
                About Me
            </Typography>
            <Box display="flex"
                 justifyContent="space-between"
                 alignItems="center"
                 sx={{mb: "50px"}}>
                <img src="../../src/assets/my_photo.jpg" width='140px' height="200px" alt="Rodion Sylenko's photo" className="photo-mrg"/>
                <Typography variant="body1" sx={{lineHeight: 2, textAlign: 'right', width: "75%"}}>
                    Hello! My name is Rodion Sylenko. I am a passionate and dedicated individual with a deep interest in
                    technology and web development. I specialize in front-end development and have a solid understanding
                    of key technologies such as HTML, CSS, JavaScript, React, and more. I am experienced in building
                    responsive, user-friendly websites and web applications.
                </Typography>
            </Box>
            <Typography variant="h5" component="legend" sx={{mt: 2}}>
                I am skilled in:
            </Typography>

            <List sx={{mt: 2, mb: '40px'}}>
                <ListItem>
                    <ListItemIcon>
                        <StarsIcon sx={{color: '#1976d2'}}/>
                    </ListItemIcon>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{flex: 0.75}}>
                            <ListItemText
                                primary="HTML: Creating well-structured and semantic markup for web pages."
                            />
                        </Box>
                        <Box sx={{flex: 0.25, display: 'flex', justifyContent: 'center'}}>
                            <StyledRating name="customized-10" defaultValue={5} max={5}/>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarsIcon sx={{color: '#1976d2'}} />
                    </ListItemIcon>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{flex: 0.75}}>
                            <ListItemText
                                primary="CSS: Styling web pages with modern techniques such as Flexbox, Grid, and animations."
                            />
                        </Box>
                        <Box sx={{flex: 0.25, display: 'flex', justifyContent: 'center'}}>
                            <StyledRating name="customized-10" defaultValue={4} max={5}/>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarsIcon sx={{color: '#1976d2'}}/>
                    </ListItemIcon>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{flex: 0.75}}>
                            <ListItemText
                                primary="JavaScript: Writing clean, efficient, and functional JavaScript to implement interactive features."
                            />
                        </Box>
                        <Box sx={{flex: 0.25, display: 'flex', justifyContent: 'center'}}>
                            <StyledRating name="customized-10" defaultValue={3} max={5}/>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarsIcon sx={{color: '#1976d2'}} />
                    </ListItemIcon>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{flex: 0.75}}>
                            <ListItemText
                                primary="React: Building dynamic, reusable components and managing application state."
                            />
                        </Box>
                        <Box sx={{flex: 0.25, display: 'flex', justifyContent: 'center'}}>
                            <StyledRating name="customized-10" defaultValue={4} max={5}/>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarsIcon sx={{color: '#1976d2'}} />
                    </ListItemIcon>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{flex: 0.75}}>
                            <ListItemText
                                primary="Version Control: Familiar with Git for tracking changes and collaborating on code."
                            />
                        </Box>
                        <Box sx={{flex: 0.25, display: 'flex', justifyContent: 'center'}}>
                            <StyledRating name="customized-10" defaultValue={4} max={5}/>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarsIcon  sx={{color: '#1976d2'}}/>
                    </ListItemIcon>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{flex: 0.75}}>
                            <ListItemText
                                primary="Responsive Design: Ensuring websites are fully responsive and functional on different screen sizes."
                            />
                        </Box>
                        <Box sx={{flex: 0.25, display: 'flex', justifyContent: 'center'}}>
                            <StyledRating name="customized-10" defaultValue={4} max={5}/>
                        </Box>
                    </Box>
                </ListItem>
            </List>

            <Typography variant="body1" sx={{mt: 2, lineHeight: 2}}>
                In addition to these core skills, I am constantly eager to learn new tools and frameworks to improve my
                development process. I enjoy solving problems and turning creative ideas into functional web
                applications.
            </Typography>
            <Typography variant="body1" sx={{mt: 1, mb: 2, lineHeight: 2}}>
                In my free time, I explore new programming languages, read tech blogs, and work on personal projects to
                enhance my skills. I believe in continuous growth and always strive to improve my knowledge and
                abilities.
            </Typography>
            <Typography variant="legend" sx={{mt: '30px', lineHeight: 2}}>
                Feel free to reach out if you'd like to connect or collaborate!
            </Typography>
        </Container>
    );
}
