import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Landing from '../components/Landing';
import { BrowserRouter } from 'react-router-dom';

describe('Landing', () => {
	test('renders the Landing component', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		const titleElementOne = screen.getByText(/the bacon lovers website/i);
		expect(titleElementOne).toBeInTheDocument();

		const titleElementTwo = screen.getByText(/is it resealable/i);
		expect(titleElementTwo).toBeInTheDocument();

		const titleElementThree = screen.getByText(
			/after clicking the button below/i
		);
		expect(titleElementThree).toBeInTheDocument();

		const buttonElement = screen.getByText(/get answers/i);
		expect(buttonElement).toBeInTheDocument();
	});

	test('should change colors of title h1 element on mouse over', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		const buttonElement = screen.getByText(/get answers/i);
		fireEvent.mouseOver(buttonElement);

		const titleElementTwoBackground = screen.getByTestId(
			'resealableTextBackground'
		);
		expect(titleElementTwoBackground).toHaveStyle('background-color: #9B4428');

		const titleElementTwoText = screen.getByTestId('resealableTextBackground');
		expect(titleElementTwoText).toHaveStyle('color: #F9BB38');

		const titleElementTwoTexts = screen.getByTestId('resealableText');
		expect(titleElementTwoTexts).toHaveStyle('background-color: #9B4428');
	});

	test('should change colors of title h1 element on mouse out', () => {
		render(<Landing />, { wrapper: BrowserRouter });

		const buttonElement = screen.getByText(/get answers/i);
		fireEvent.mouseOut(buttonElement);

		const titleElementTwoBackground = screen.getByTestId(
			'resealableTextBackground'
		);
		expect(titleElementTwoBackground).toHaveStyle('background-color: #F9BB38');

		const titleElementTwoText = screen.getByTestId('resealableTextBackground');
		expect(titleElementTwoText).toHaveStyle('color: #9B4428');

		const titleElementTwoTexts = screen.getByTestId('resealableText');
		expect(titleElementTwoTexts).toHaveStyle('background-color: #F9BB38');
	});
});
