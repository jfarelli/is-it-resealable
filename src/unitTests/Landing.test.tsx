import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Landing from '../components/Landing';
import { BrowserRouter } from 'react-router-dom';

describe('Landing', () => {
	test('renders the Landing component', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		expect(screen.getByText(/the bacon lovers website/i)).toBeInTheDocument();

		expect(screen.getByText(/is your bacon resealable/i)).toBeInTheDocument();

		expect(
			screen.getByText(/after clicking the button below/i)
		).toBeInTheDocument();

		expect(screen.getByText(/get answers/i)).toBeInTheDocument();
	});

	test('should change colors of title h1 element and button on mouse over', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		fireEvent.mouseOver(screen.getByText(/get answers/i));

		expect(screen.getByTestId('resealableTextBackground')).toHaveStyle(
			'background-color: #9B4428'
		);
		expect(screen.getByTestId('resealableTextBackground')).not.toHaveStyle(
			'background-color: #F9BB38'
		);

		expect(screen.getByTestId('resealableTextBackground')).toHaveStyle(
			'color: #F9BB38'
		);
		expect(screen.getByTestId('resealableTextBackground')).not.toHaveStyle(
			'color: #9B4428'
		);

		expect(screen.getByTestId('resealableText')).toHaveStyle(
			'background-color: #9B4428'
		);
		expect(screen.getByTestId('resealableText')).not.toHaveStyle(
			'background-color: #F9BB38'
		);
	});

	test('should change colors of title h1 element and button on mouse out', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		fireEvent.mouseOut(screen.getByText(/get answers/i));

		expect(screen.getByTestId('resealableTextBackground')).toHaveStyle(
			'background-color: #F9BB38'
		);
		expect(screen.getByTestId('resealableTextBackground')).not.toHaveStyle(
			'background-color: #9B4428'
		);

		expect(screen.getByTestId('resealableTextBackground')).toHaveStyle(
			'color: #9B4428'
		);
		expect(screen.getByTestId('resealableTextBackground')).not.toHaveStyle(
			'color: #F9BB38'
		);

		expect(screen.getByTestId('resealableText')).toHaveStyle(
			'background-color: #F9BB38'
		);
		expect(screen.getByTestId('resealableText')).not.toHaveStyle(
			'background-color: #9B4428'
		);
	});

	test('redirects to the correct destination when the button is clicked', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		fireEvent.click(screen.getByText(/get answers/i));

		expect(window.location.pathname).toBe('/bacon-main');
	});

	test('applies the correct styles to the elements', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		expect(screen.getByText(/the bacon lovers website/i)).toHaveStyle(
			'display: block'
		);

		expect(screen.getByText(/is your bacon resealable/i)).toHaveStyle('font-size: 2em');

		expect(screen.getByText(/after clicking the button/i)).toHaveStyle(
			'font-size: 1.17em'
		);

		expect(screen.getByText(/get answers/i)).toHaveStyle(
			'padding: 2px 6px 3px 6px'
		);
	});

	test('should fail to render a non-existent text element', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		expect(() => screen.getByText(/non-existent element/i)).toThrowError();
	});

	test('should fail to find a non-existent data-testid element', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		expect(() => screen.getByTestId('non-existent-element')).toThrowError();
	});

	test('should fail to apply incorrect styles to the elements', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		expect(screen.getByText(/the bacon lovers website/i)).not.toHaveStyle(
			'display: flex'
		);

		expect(screen.getByText(/is your bacon resealable/i)).not.toHaveStyle(
			'font-size: 1em'
		);

		expect(
			screen.getByText(/after clicking the button below/i)
		).not.toHaveStyle('font-size: 1em');

		expect(screen.getByText(/get answers/i)).not.toHaveStyle('padding: 4px');
	});
});
