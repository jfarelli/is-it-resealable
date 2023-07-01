import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaconHolder from '../components/BaconHolder';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import { AppProps } from '../model';

describe('BaconHolder', () => {
	const displayBaconDetails = jest.fn();
	const mockData: AppProps[] = [
		{
			id: 1,
			companyName: 'Good Bacon Company A',
			baconStyle: 'Style 1 - Thick Cut',
			resealable: '✅',
			image: 'https://example.com/image1.png',
		},
		{
			id: 2,
			companyName: 'Bad Bacon Company B',
			baconStyle: 'Style 2 - Thin Cut',
			resealable: '❌',
			image: 'https://example.com/image2.png',
		},
		{
			id: 3,
			companyName: 'Good Bacon Company C',
			baconStyle: 'Style 3 - Applewood Smoked',
			resealable: '✅',
			image: 'https://example.com/image2.png',
		},
	];

	const BaconHolderComponent = (
		<>
			<Header scrolled={false} />
			<BaconHolder data={mockData} displayBaconDetails={displayBaconDetails} />
		</>
	);

	test('renders the BaconHolder component', () => {
		render(BaconHolderComponent, { wrapper: BrowserRouter });
	});

	test('renders the checkbox and checkbox text', () => {
		render(BaconHolderComponent, { wrapper: BrowserRouter });

		const sideBarTextElement = screen.getByText(/show only resealable bacon/i);
		expect(sideBarTextElement).toBeInTheDocument();
	});

	test('renders individual SingleBacon components', () => {
		render(BaconHolderComponent, { wrapper: BrowserRouter });

		const singleBaconComponents = screen.getAllByTestId('singleBacon');
		expect(singleBaconComponents).toHaveLength(mockData.length);
	});

	test('filters data based on search input', () => {
		render(BaconHolderComponent, { wrapper: BrowserRouter });

		const searchInput = screen.getByPlaceholderText(
			/search brand, or style/i
		) as HTMLInputElement;

		fireEvent.change(searchInput, { target: { value: 'Style 1' } });
		expect(searchInput.value).toBe('Style 1');
		expect(screen.getAllByTestId('singleBacon')).toHaveLength(1);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(2);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(3);

		fireEvent.change(searchInput, { target: { value: 'Good Bacon' } });
		expect(searchInput.value).toBe('Good Bacon');
		expect(screen.getAllByTestId('singleBacon')).toHaveLength(2);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(1);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
	});

	test('filters data based on checkbox input', () => {
		render(BaconHolderComponent, { wrapper: BrowserRouter });

		const checkboxInput = screen.getByTestId(
			/checkboxInput/i
		) as HTMLInputElement;
		fireEvent.click(checkboxInput);
		expect(checkboxInput.checked).toBe(true);
		expect(checkboxInput.checked).not.toBe(false);
		expect(screen.getAllByTestId('singleBacon')).toHaveLength(2);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(1);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
	});

	test('filters data based on company button click', () => {
		render(BaconHolderComponent, { wrapper: BrowserRouter });

		const companyButton = screen.getAllByTestId(/companyButton/i);
		expect(companyButton).toHaveLength(3);
		expect(companyButton).not.toHaveLength(0);
		expect(companyButton).not.toHaveLength(1);
		expect(companyButton).not.toHaveLength(2);

		fireEvent.click(companyButton[1]);
		expect(screen.getAllByTestId('singleBacon')).toHaveLength(1);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(2);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
	});
});
