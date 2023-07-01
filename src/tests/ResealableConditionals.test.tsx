import React from 'react';
import { render, screen } from '@testing-library/react';
import ResealableConditionals from '../components/ResealableConditionals';
import { BrowserRouter } from 'react-router-dom';
import { ResealableConditionalsProps } from '../model';

describe('ResealableConditionals', () => {
	const selectedBacon: ResealableConditionalsProps['selectedBacon'] = {
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

	test('renders "not believe" message for non-resealable bacon', () => {
		render(
			<BrowserRouter>
				<ResealableConditionals selectedBacon={selectedBacon} />
			</BrowserRouter>
		);

		const notBelieveMessage = screen.getByText(/not/i);
		const resealableText = screen.queryByText(/believes/i);

		expect(notBelieveMessage).toBeInTheDocument();
		expect(resealableText).not.toBeInTheDocument();
	});

	test('renders "believes" message for resealable bacon', () => {
		const selectedBaconWithResealable = { ...selectedBacon, resealable: '✅' };

		render(
			<BrowserRouter>
				<ResealableConditionals selectedBacon={selectedBaconWithResealable} />
			</BrowserRouter>
		);

		const believesMessage = screen.getByText(/believes/i);
		const notBelieveText = screen.queryByText(/not believe/i);

		expect(believesMessage).toBeInTheDocument();
		expect(notBelieveText).not.toBeInTheDocument();
	});

	test('renders correct contact information for non-resealable bacon', () => {
		render(
			<BrowserRouter>
				<ResealableConditionals selectedBacon={selectedBacon} />
			</BrowserRouter>
		);

		const contactMessage = screen.getByText(/you can even call/i);
		const phoneText = screen.getByText(
			selectedBacon.companyContacts?.phone ?? ''
		);

		expect(contactMessage).toBeInTheDocument();
		expect(phoneText).toBeInTheDocument();
	});

	test('renders social media buttons for non-resealable bacon', () => {
		render(
			<BrowserRouter>
				<ResealableConditionals selectedBacon={selectedBacon} />
			</BrowserRouter>
		);

		const socialMediaButtons = screen.getByTestId('social-media-buttons');

		expect(socialMediaButtons).toBeInTheDocument();
	});

	test('does not render contact information for resealable bacon', () => {
		const selectedBaconWithResealable = { ...selectedBacon, resealable: '✅' };

		render(
			<BrowserRouter>
				<ResealableConditionals selectedBacon={selectedBaconWithResealable} />
			</BrowserRouter>
		);

		const contactMessage = screen.queryByText(/you can even call/i);
		const phoneText = screen.queryByText(
			selectedBacon.companyContacts?.phone ?? ''
		);

		expect(contactMessage).not.toBeInTheDocument();
		expect(phoneText).not.toBeInTheDocument();
	});
});
