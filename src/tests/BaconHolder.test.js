import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaconHolder from '../components/BaconHolder';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('BaconHolder', () => {
	const displayBaconDetails = jest.fn();
	const mockData = [
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

	test('renders the BaconHolder component', () => {
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);

		const sideBarTextElement = screen.getByText(/show only resealable bacon/i);
		expect(sideBarTextElement).toBeInTheDocument();
	});

	test('filters data based on search input', () => {
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);

		const searchInput = screen.getByPlaceholderText(
			/search for your favorite brand, or style/i
		);

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
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);

		const checkboxInput = screen.getByTestId(/checkboxInput/i);
		fireEvent.click(checkboxInput);
		expect(checkboxInput.checked).toBe(true);
		expect(checkboxInput.checked).not.toBe(false);
		expect(screen.getAllByTestId('singleBacon')).toHaveLength(2);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(1);
		expect(screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
	});

	test('filters data based on company button click', () => {
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);

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
