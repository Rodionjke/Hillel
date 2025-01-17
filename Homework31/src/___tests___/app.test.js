import React from 'react';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import App from '../App.jsx';

describe('App tests', () => {
    test('adds a proper todo', async () => {
        render(<App/>);
        const inputElement = screen.getByLabelText('What to do?');
        const buttonElement = screen.getByRole('button', {name: 'Add Task'});

        fireEvent.change(inputElement, {target: {value: 'Learn React'}});
        fireEvent.click(buttonElement);

        const newTodo = await screen.findByText('Learn React');
        expect(newTodo).toBeInTheDocument();
    });

    test('todo has line-through decoration when done?', async () => {
        render(<App/>);

        const inputElement = screen.getByLabelText('What to do?');
        const buttonElement = screen.getByRole('button', {name: 'Add Task'});

        fireEvent.change(inputElement, {target: {value: 'Learn React'}});
        fireEvent.click(buttonElement);

        const todoItem = await screen.findByText('Learn React');
        const checkbox = screen.getByTestId(`checkbox-${todoItem.textContent}`);

        fireEvent.click(checkbox);
        await waitFor(() => {
            expect(todoItem).toHaveStyle('text-decoration: line-through');
        });
    });
});
