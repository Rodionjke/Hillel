import {useForm, Controller} from "react-hook-form";
import Button from "@mui/material/Button";
import Input from "../Input/Input.jsx";
import "../../index.css";
import React from "react"

const TodoForm = ({onSubmit}) => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data.todo);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="todo-form">
            <Controller
                name="todo"
                control={control}
                defaultValue=""
                rules={{
                    required: "This field is required",
                    minLength: {
                        value: 5,
                        message: "Minimum length should be at least 5 symbols",
                    },
                }}
                render={({field}) => (
                    <Input
                        field={field}
                        label="What to do?"
                        error={!!errors.todo}
                        helperText={errors.todo ? errors.todo.message : ""}
                    />
                )}
            />
            <Button type="submit" variant="contained" color="primary" className="main-button">
                Add Task
            </Button>
        </form>
    );
};

export default TodoForm;
