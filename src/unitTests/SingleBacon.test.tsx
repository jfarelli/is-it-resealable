import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaconHolder from '../components/BaconHolder';
import Header from '../components/Header';
import SingleBacon from '../components/SingleBacon';
import { BrowserRouter } from 'react-router-dom';
import { SingleBaconProps } from '../model';

const mockData: SingleBaconProps[] = [
	{
		id: 1,
		companyName: 'Big Bill',
		baconStyle: 'Crispy',
		resealable: '❌',
		image: 'mockData.jpg',
		displayBaconDetails: jest.fn(),
	},
];

const SingleBaconComponent = (
	<>
		<Header scrolled={false} />
		<BaconHolder
			data={mockData}
			displayBaconDetails={mockData[0].displayBaconDetails}
		/>
	</>
);

describe('SingleBacon', () => {
	it('renders correctly', () => {
		render(SingleBaconComponent, { wrapper: BrowserRouter });
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

	test('displays the correct image', () => {
		render(
			<BrowserRouter>
				<SingleBacon
					id={1}
					companyName="Big Bill"
					baconStyle="Crispy"
					resealable="❌"
					image="mockData.jpg"
					displayBaconDetails={jest.fn()}
				/>
			</BrowserRouter>
		);

		const image = screen.getByAltText('Big Bill Crispy Bacon');
		expect(image).toHaveAttribute(
			'src',
			'https://is-it-resealable-be.vercel.app/images/mockData.jpg'
		);
	});

	test('triggers handleSelectedBacon correctly when button is clicked', () => {
		render(SingleBaconComponent, { wrapper: BrowserRouter });
		const button = screen.getByText("Big Bill's Details");

		fireEvent.click(button);

		expect(mockData[0].displayBaconDetails).toHaveBeenCalledTimes(1);
		expect(mockData[0].displayBaconDetails).toHaveBeenCalledWith('1');
	});
});
