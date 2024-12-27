import TextField from '@mui/material/TextField';

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
