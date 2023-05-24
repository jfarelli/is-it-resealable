import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BaconBits from '../components/BaconBits';

describe('BaconBits', () => {
	const mockData = {
		id: 1,
		companyName: 'Big Bill',
		companyContacts: {
			twitter: 'https://twitter.com/BigBill',
			facebook: 'https://www.facebook.com/bigbill/',
			website: 'https://bigbill.com/',
			phone: '1-254-867-5309',
		},
		baconStyle: 'Crispy',
		resealable: '❌',
		image: 'mockData.jpg',
		displayBaconDetails: jest.fn(),
	};

	test('renders the component correctly', () => {
		render(
			<BrowserRouter>
				<BaconBits selectedBacon={mockData} />
			</BrowserRouter>
		);

		const linkElement = screen.getByText('Back to Search');
		const nopeElement = screen.getByText('NOPE!');
		const imageElement = screen.getByAltText('Big Bill Crispy');
		const resealableConditionals = screen.getByTestId(
			'resealable-conditionals'
		);
		const socialMediaButtons = screen.getByTestId('social-media-buttons');

		expect(linkElement).toBeInTheDocument();
		expect(nopeElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		expect(imageElement.getAttribute('src')).toBe(
			'http://localhost:8000/images/mockData.jpg'
		);
		expect(resealableConditionals).toBeInTheDocument();
		expect(socialMediaButtons).toBeInTheDocument();
	});
});
