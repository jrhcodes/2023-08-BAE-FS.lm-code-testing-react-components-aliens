import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInputField from './TextInputField';

// Mock ErrorMessage component
jest.mock('./ErrorMessage', () => ({ id, messages }: { id: string; messages: string[] }) => (
    <div id={id}>{messages.join(',')}</div>
));

describe('TextInput Component', () => {
    it('renders without errors', () => {
        const mockValidator = jest.fn().mockReturnValue([]);
        const { getByLabelText, getByText } = render(
            <TextInputField
                id="testInput"
                label="Test Label"
                setContent={() => { }}
                getContent={() => ''}
                validator={mockValidator}
                placeholder="Enter text"
            />
        );

        const inputElement = getByLabelText('Test Label') as HTMLInputElement;
        expect(inputElement).toBeInTheDocument();

        const placeholderText = getByText('Enter text') as HTMLInputElement;
        expect(placeholderText).toBeInTheDocument();
    });

    it('calls setContent when input value changes', () => {
        const mockSetContent = jest.fn();
        const { getByLabelText } = render(
            <TextInputField
                id="testInput"
                label="Test Label"
                setContent={mockSetContent}
                getContent={() => ''}
                validator={() => []}
            />
        );

        const inputElement = getByLabelText('Test Label') as HTMLInputElement;

        fireEvent.change(inputElement, { target: { value: 'new value' } });

        expect(mockSetContent).toHaveBeenCalledWith('new value');
    });

    it('displays error messages from the validator', () => {
        const mockValidator = jest.fn().mockReturnValue(['Error 1', 'Error 2']);
        const { getByLabelText, getByText } = render(
            <TextInputField
                id="testInput"
                label="Test Label"
                setContent={() => { }}
                getContent={() => ''}
                validator={mockValidator}
            />
        );

        const inputElement = getByLabelText('Test Label') as HTMLInputElement;

        fireEvent.change(inputElement, { target: { value: 'invalid value' } });

        const errorElement = getByText('Error 1,Error 2') as HTMLDivElement;
        expect(errorElement).toBeInTheDocument();
    });
});
