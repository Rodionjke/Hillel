import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const SwapiList = ({ characters }) => {
    return (
        <Grid container spacing={3}>
            {characters.map((character, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{character.name}</Typography>
                            <Typography variant="body2">
                                <strong>Height:</strong> {character.height} cm
                            </Typography>
                            <Typography variant="body2">
                                <strong>Mass:</strong> {character.mass} kg
                            </Typography>
                            <Typography variant="body2">
                                <strong>Gender:</strong> {character.gender}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Birth Year:</strong> {character.birth_year}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default SwapiList;
