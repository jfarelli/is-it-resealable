import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Landing from '../components/Landing';
import { BrowserRouter } from 'react-router-dom';

describe('Landing', () => {
	test('renders the Landing component', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		expect(screen.getByText(/the bacon lovers website/i)).toBeInTheDocument();

		expect(screen.getByText(/is it resealable/i)).toBeInTheDocument();

		expect(
			screen.getByText(/after clicking the button below/i)
		).toBeInTheDocument();

		expect(screen.getByText(/get answers/i)).toBeInTheDocument();
	});

	test('should change colors of title h1 element on mouse over', () => {
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

	test('should change colors of title h1 element on mouse out', () => {
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
});
