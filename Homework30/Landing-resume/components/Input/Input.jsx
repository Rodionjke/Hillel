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
            sx={{width: '400px', mr: '10px'}}
        />
    );
};

export default Input;
