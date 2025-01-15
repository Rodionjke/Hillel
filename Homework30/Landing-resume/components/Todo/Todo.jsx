import {useEffect, useState} from 'react';
import TodoForm from "../TodoForm/TodoForm.jsx";
import {Container} from "@mui/material";
import TodoList from "../TodoList/TodoList.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const handleCheck = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo
            )
        );
    };

    const handleSubmit = (newTodo) => {
        const newTodoWithId = {
            id: +new Date(),
            text: newTodo,
            checked: false,
        };
        setTodos(prevTodos => [...prevTodos, newTodoWithId]);
    };

    return (
        <Container maxWidth="sm" sx={{lineHeight: 2, textAlign: 'center'}}>
            <Typography variant="h2" sx={{mt: 2, mb:2, lineHeight: 2}}>
                My todos!
            </Typography>
            <TodoForm onSubmit={handleSubmit}/>
            <TodoList items={todos} onDelete={handleDelete} onCheck={handleCheck}/>
        </Container>
    );
};

export default Todo;
