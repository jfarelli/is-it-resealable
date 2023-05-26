import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaconHolder from '../components/BaconHolder';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
// import useSound from 'use-sound';

// const useSound = jest.fn().mockReturnValue([jest.fn()]);

const mockData = [
	{
		id: 1,
		companyName: 'Big Bill',
		baconStyle: 'Crispy',
		resealable: '❌',
		image: 'mockData.jpg',
		displayBaconDetails: jest.fn(),
	},
];

describe('SingleBacon', () => {
	it('renders correctly', () => {
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={mockData[0].displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);
		const singleBacon = screen.getByTestId('singleBacon');
		const companyName = screen.getByTestId('company-name');
		const baconStyle = screen.getByText('Crispy');
		const resealable = screen.getByText('IS IT RESEALABLE? ❌');
		const button = screen.getByText("Big Bill's Details");

		expect(singleBacon).toBeInTheDocument();
		expect(companyName).toBeInTheDocument();
		expect(baconStyle).toBeInTheDocument();
		expect(resealable).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	test('triggers handleSelectedBacon correctly when button is clicked', () => {
		render(
			<>
				<Header />
				<BaconHolder
					data={mockData}
					displayBaconDetails={mockData[0].displayBaconDetails}
				/>
			</>,
			{ wrapper: BrowserRouter }
		);
		const button = screen.getByText("Big Bill's Details");

		fireEvent.click(button);

		expect(mockData[0].displayBaconDetails).toHaveBeenCalledTimes(1);
		expect(mockData[0].displayBaconDetails).toHaveBeenCalledWith('1');
	});

	// // WIP: CAN'T GET THE useSound hook mocked properly
	// test.only('plays boo sound when resealable is ❌', () => {
	// 	const mockBoo = jest.fn();
	// 	jest.mock('use-sound', () => ({
	// 		__esModule: true,
	// 		default: jest.fn().mockReturnValue([mockBoo]),
	// 	}));

	// 	render(
	// 		<>
	// 			<Header />
	// 			<BaconHolder
	// 				data={mockData}
	// 				displayBaconDetails={mockData[0].displayBaconDetails}
	// 			/>
	// 		</>,
	// 		{ wrapper: BrowserRouter }
	// 	);
	// 	const button = screen.getByText("Big Bill's Details");

	// 	fireEvent.click(button);

	// 	expect(mockBoo).toHaveBeenCalledTimes(1);
	// });

	// // WIP: CAN'T GET THE useSound hook mocked properly
	// it('plays cheer sound when resealable is not ❌', () => {
	// 	const mockData2 = [
	// 		{
	// 			id: 2,
	// 			companyName: 'Small Sally',
	// 			baconStyle: 'Thick Cut',
	// 			resealable: '✅',
	// 			image: 'mockData.jpg',
	// 			displayBaconDetails: jest.fn(),
	// 		},
	// 	];

	// 	render(
	// 		<>
	// 			<Header />
	// 			<BaconHolder
	// 				data={mockData2}
	// 				displayBaconDetails={mockData2[0].displayBaconDetails}
	// 			/>
	// 		</>,
	// 		{ wrapper: BrowserRouter }
	// 	);

	// 	const button = screen.getByText("Small Sally's Details");

	// 	fireEvent.click(button);

	// 	expect(useSound).toHaveBeenCalledTimes(1);
	// });
});
