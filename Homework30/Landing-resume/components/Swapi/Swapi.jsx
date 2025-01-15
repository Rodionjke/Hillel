import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Swapi = () => {
    const [url, setUrl] = useState('https://swapi.dev/api/people/1');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const fetchData = () => {
        setError('');
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    setError(`Error ${response.status}: ${response.statusText}`);
                    setData(null);
                    return;
                }
                return response.json();
            })
            .then((result) => {
                setData(result);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            });
    };

    let errorMessage = null;
    if (error) {
        errorMessage = (
            <Typography color="error" sx={{ mb: 2 }}>
                Sorry, but you have {error}
            </Typography>
        );
    }

    let dataMessage = null;
    if (data) {
        dataMessage = (
            <Box
                component="pre"
                p={2}
                bgcolor="#f5f5f5"
                border="1px solid #ddd"
                borderRadius={2}
                maxHeight="400px"
                overflow="auto"
            >
                {JSON.stringify(data, null, 4)}
            </Box>
        );
    }

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Try it now!
            </Typography>

            <Box display="flex" sx={{gap: 2, mb: 3}}>
                <TextField
                    label="URL"
                    variant="outlined"
                    fullWidth
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    helperText="Need a hint? try people/1/ or planets/3/ or starships/9/"
                />
                <Button variant="contained" color="primary" onClick={fetchData} sx={{ height: '53px' }}>
                    Request
                </Button>
            </Box>
            <Typography variant="body1">{errorMessage}</Typography>
            <Typography variant="body2">{dataMessage}</Typography>

        </Container>
    );
};

export default Swapi;
