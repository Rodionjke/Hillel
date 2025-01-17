import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import TodoForm from '../TodoForm.jsx';

    test('shows error if input is blank', async () => {
        render(<TodoForm />);

        const buttonElement = screen.getByRole('button', { name: 'Add Task' });
        fireEvent.click(buttonElement);

        const errorMessage = await screen.findByText('This field is required');
        expect(errorMessage).toBeInTheDocument();
    });
