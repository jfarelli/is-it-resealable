import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
	it('renders the header with default styles when not scrolled', () => {
		render(
			<BrowserRouter>
				<Header scrolled={false} />
			</BrowserRouter>
		);

		const headerElement = screen.getByRole('heading');
		const linkElement = screen.getByRole('link', {
			name: /is your bacon resealable\?\?\?/i,
		});

		expect(headerElement).toBeInTheDocument();
		expect(headerElement).toHaveClass(
			'text-center bg-[#F9BB38] text-2xl sm:text-4xl hover:cursor-pointer'
		);
		expect(headerElement).not.toHaveClass('shadow-sm shadow-gray-700');
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', '/');

		fireEvent.mouseEnter(linkElement);

		expect(window.location.pathname).toBe('/');
	});

	it('renders the header with additional styles when scrolled', () => {
		render(
			<BrowserRouter>
				<Header scrolled={true} />
			</BrowserRouter>
		);

		const headerComponent = screen.getByTestId('header-element');
		const headerElement = screen.getByRole('heading');
		const linkElement = screen.getByRole('link', {
			name: /is your bacon resealable\?\?\?/i,
		});

		expect(headerComponent).toBeInTheDocument();
		expect(headerComponent).toHaveClass(
			'flex items-center justify-center z-10 p-2 bg-[#F9BB38] text-[#9B4428] drop-shadow-2xl fixed top-0 left-0 right-0 font-bold shadow-md shadow-black-300'
		);
		expect(headerElement).toHaveClass(
			'text-center bg-[#F9BB38] text-2xl sm:text-4xl hover:cursor-pointer'
		);
		expect(headerElement).toBeInTheDocument();
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', '/');

		fireEvent.mouseEnter(linkElement);

		expect(window.location.pathname).toBe('/');
	});
});
