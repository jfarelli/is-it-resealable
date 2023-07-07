import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarNav from '../components/SidebarNav';

describe('SidebarNav', () => {
	const mockProps = {
		searchInput: '',
		checkboxInput: false,
		setCheckboxInput: jest.fn(),
		setSearchInput: jest.fn(),
		companyButtons: [],
	};

	it('should render the component with correct initial values', () => {
		render(<SidebarNav {...mockProps} />);

		const searchInput = screen.getByLabelText(
			'search-input'
		) as HTMLInputElement;
		expect(searchInput.value).toBe('');

		const checkboxInput = screen.getByTestId(
			'checkboxInput'
		) as HTMLInputElement;
		expect(checkboxInput.checked).toBe(false);
	});

	it('should call setSearchInput when search input value changes', () => {
		render(<SidebarNav {...mockProps} />);

		const searchInput = screen.getByLabelText(
			'search-input'
		) as HTMLInputElement;
		fireEvent.change(searchInput, { target: { value: 'example' } });

		expect(mockProps.setSearchInput).toHaveBeenCalledTimes(1);
		expect(mockProps.setSearchInput).toHaveBeenCalledWith('example');
	});

	it('should call setCheckboxInput when checkbox value changes', () => {
		render(<SidebarNav {...mockProps} />);

		const checkboxInput = screen.getByTestId(
			'checkboxInput'
		) as HTMLInputElement;
		fireEvent.click(checkboxInput);

		expect(mockProps.setCheckboxInput).toHaveBeenCalledTimes(1);
		expect(mockProps.setCheckboxInput).toHaveBeenCalledWith(true);
	});
});
