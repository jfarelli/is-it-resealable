import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BaconBits from '../components/BaconBits';
import { AppTestProps } from '../model';

describe('BaconBits', () => {
	const mockData: AppTestProps = {
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

	const BaconBitsComponent = (
		<BrowserRouter>
			<BaconBits selectedBacon={mockData} />
		</BrowserRouter>
	);

	test('renders the component correctly', () => {
		render(BaconBitsComponent);
	});

	test('clicking on "Back to Search" button navigates to "/bacon-main" route', () => {
		render(BaconBitsComponent);

		const linkElement = screen.getByText('Back to Search');
		expect(linkElement).toBeInTheDocument();

		fireEvent.click(linkElement);

		expect(window.location.pathname).toBe('/bacon-main');
	});

	test('displays the "Back to Search" button', () => {
		render(BaconBitsComponent);

		const linkElement = screen.getByText('Back to Search');
		expect(linkElement).toBeInTheDocument();
	});

	test('displays the correct "NOPE", or "YUUUUP!" heading', () => {
		render(BaconBitsComponent);

		const nopeElement = screen.getByText('NOPE!');
		expect(nopeElement).toBeInTheDocument();

		const yupElement = screen.queryByText('YUUUUUP!');
		expect(yupElement).not.toBeInTheDocument();
	});

	test('displays the correct image', () => {
		render(BaconBitsComponent);

		const imageElement = screen.getByAltText('Big Bill Crispy');
		expect(imageElement).toBeInTheDocument();
		expect(imageElement.getAttribute('src')).toBe(
			'http://localhost:8000/images/mockData.jpg'
		);
	});

	test('renders the resealable conditionals component', () => {
		render(BaconBitsComponent);

		const resealableConditionals = screen.getByTestId(
			'resealable-conditionals'
		);
		expect(resealableConditionals).toBeInTheDocument();
	});

	test('displays the social media buttons', () => {
		render(BaconBitsComponent);

		const socialMediaButtons = screen.getByTestId('social-media-buttons');
		expect(typeof socialMediaButtons).toBe('object');
		expect(socialMediaButtons).toBeInTheDocument();
	});

	test('displays the phone number if not resealable', () => {
		render(BaconBitsComponent);

		const phonePromptElement = screen.getByText("You can even Call 'em!");
		expect(typeof phonePromptElement.textContent).toBe('string');

		const phoneNumberElement = screen.getByText('1-254-867-5309');
		expect(typeof phoneNumberElement.textContent).toBe('string');
		expect(phoneNumberElement).toBeInTheDocument();
		expect(phoneNumberElement).not.toEqual(1 - 254 - 867 - 5309);
		expect(typeof phoneNumberElement).not.toBe('number');
	});
});
