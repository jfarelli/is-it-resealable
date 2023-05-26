import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
			'display: block',
			'flex-direction: column',
			'text-align: center',
			'height: 100vh',
			'align-items: center',
			'justify-content: center',
			'row-gap: 2rem',
			'--tw-bg-opacity: 1',
			'background-color: rgb(253 242 227 / var(--tw-bg-opacity))',
			'--tw-text-opacity: 1',
			'color: rgb(155 68 40 / var(--tw-text-opacity))',
			'font-weight: 700',
			'font-size: 1.5em',
			'line-height: 2rem'
		);

		expect(screen.getByText(/is it resealable/i)).toHaveStyle(
			'font-size: 2em',
			'font-weight: 700',
			'padding-top: 0.5rem',
			'padding-bottom: 0.5rem',
			'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',
			'transition-duration: 150ms'
		);

		expect(screen.getByText(/after clicking the button/i)).toHaveStyle(
			'font-size: 1.17em',
			'font-weight: 700'
		);

		expect(screen.getByText(/get answers/i)).toHaveStyle(
			'padding: 2px 6px 3px 6px',
			'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',
			'transition-duration: 150ms'
		);
	});
});
