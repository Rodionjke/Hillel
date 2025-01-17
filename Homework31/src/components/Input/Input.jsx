import TextField from '@mui/material/TextField';
import React from "react"

const Input = ({field, label, error, helperText}) => {
    return (
        <TextField
            {...field}
            label={label}
            variant="outlined"
            error={!!error}
            helperText={helperText}
            size="small"
            className="input-width"
        />
    );
};

export default Input;
