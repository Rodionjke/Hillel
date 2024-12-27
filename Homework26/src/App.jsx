import {useEffect, useState} from 'react';
import TodoForm from "./Components/TodoForm/TodoForm.jsx";
import Title from "./Components/Title/Title.jsx";
import {Container} from "@mui/material";
import TodoList from "./Components/TodoList/TodoList.jsx";
import "./index.css";

const App = () => {
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
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
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
        <Container maxWidth="sm">
            <Title/>
            <TodoForm onSubmit={handleSubmit}/>
            <TodoList items={todos} onDelete={handleDelete} onCheck={handleCheck}/>
        </Container>
    );
};

export default App;
