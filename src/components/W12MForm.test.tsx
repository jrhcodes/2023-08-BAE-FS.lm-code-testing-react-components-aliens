import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import this for additional matchers like toHaveClass
import W12MForm from './W12MForm';

test('renders form element', () => {
	render(<W12MForm id="W12MTest" />);
	// Use Testing Library's getByTestId to get the form element
	const formElement = screen.getByTestId('w12MTest');
	// Assert that the form element has the expected class
	expect(formElement).toHaveClass('w12MForm');
});

