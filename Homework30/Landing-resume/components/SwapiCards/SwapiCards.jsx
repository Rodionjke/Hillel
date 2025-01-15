import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';

function SwapiCards({ character }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{character.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Gender: {character.gender}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Birth Year: {character.birth_year}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SwapiCards;
