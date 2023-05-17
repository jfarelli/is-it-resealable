import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaconHolder from '../components/BaconHolder';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('SingleBacon', () => {
	const mockData = [
		{
			id: 1,
			companyName: 'Good Bacon Company A',
			baconStyle: 'Style 1 - Thick Cut',
			resealable: '✅',
			image: 'https://example.com/image1.png',
			displayBaconDetails: jest.fn(),
		},
	];

	test('renders the SingleBacon component', () => {
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={mockData.displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);

		const singleBacon = screen.getAllByTestId('singleBacon');
		expect(singleBacon).toHaveLength(1);
	});

	test('calls displayBaconDetails with the correct id when the button is clicked', () => {
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={mockData.displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);

		const button = screen.getByTestId(
			`companyButton`
		);
        expect(button).toBeInTheDocument()
		fireEvent.click(button);
		// expect(mockData.displayBaconDetails).toHaveBeenCalledWith(mockData.id);
        expect(mockData.boo).toHaveBeenCalled()
	});
});
