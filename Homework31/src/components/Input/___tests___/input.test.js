import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from "../../Input/Input.jsx";

test('Input value has numbers & text', () => {
    render(<Input label="Test Input" />);
    const inputElement = screen.getByLabelText('Test Input');
    fireEvent.change(inputElement, { target: { value: 'checking123' } });
    expect(inputElement).toHaveValue('checking123');
});
