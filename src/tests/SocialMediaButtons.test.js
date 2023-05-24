import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SocialMediaButtons from '../components/SocialMediaButtons';

describe('SocialMediaButtons', () => {
	const selectedBacon = {
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

	test('renders social media buttons with correct links', () => {
		render(
			<BrowserRouter>
				<SocialMediaButtons selectedBacon={selectedBacon} />
			</BrowserRouter>
		);

		const websiteButton = screen.getByRole('link', { name: /website/i });
		const facebookButton = screen.getByRole('link', { name: /facebook/i });
		const twitterButton = screen.getByRole('link', { name: /twitter/i });

		expect(websiteButton).toHaveAttribute(
			'href',
			selectedBacon.companyContacts.website
		);
		expect(facebookButton).toHaveAttribute(
			'href',
			selectedBacon.companyContacts.facebook
		);
		expect(twitterButton).toHaveAttribute(
			'href',
			selectedBacon.companyContacts.twitter
		);
	});

	test('does not render buttons when contact links are missing', () => {
		const selectedBaconWithoutContacts = { companyContacts: {} };

		render(
			<BrowserRouter>
				<SocialMediaButtons selectedBacon={selectedBaconWithoutContacts} />
			</BrowserRouter>
		);

		const websiteButton = screen.queryByRole('link', { name: /website/i });
		const facebookButton = screen.queryByRole('link', { name: /facebook/i });
		const twitterButton = screen.queryByRole('link', { name: /twitter/i });

		expect(websiteButton).not.toBeInTheDocument();
		expect(facebookButton).not.toBeInTheDocument();
		expect(twitterButton).not.toBeInTheDocument();
	});

	test('opens links in a new tab when clicked', () => {
		render(
			<BrowserRouter>
				<SocialMediaButtons selectedBacon={selectedBacon} />
			</BrowserRouter>
		);

		const websiteButton = screen.getByRole('link', { name: /website/i });
		const facebookButton = screen.getByRole('link', { name: /facebook/i });
		const twitterButton = screen.getByRole('link', { name: /twitter/i });

		expect(websiteButton).toHaveAttribute('target', '_blank');
		expect(facebookButton).toHaveAttribute('target', '_blank');
		expect(twitterButton).toHaveAttribute('target', '_blank');
	});

	test('triggers proper actions when buttons are clicked', () => {
		render(
			<BrowserRouter>
				<SocialMediaButtons selectedBacon={selectedBacon} />
			</BrowserRouter>
		);

		const websiteButton = screen.getByRole('link', { name: /website/i });
		const facebookButton = screen.getByRole('link', { name: /facebook/i });
		const twitterButton = screen.getByRole('link', { name: /twitter/i });

		const customAttribute = 'data-mock-clicked';
		const setClicked = jest.fn((event) => {
			event.target.setAttribute(customAttribute, 'true');
		});

		websiteButton.addEventListener('click', setClicked);
		facebookButton.addEventListener('click', setClicked);
		twitterButton.addEventListener('click', setClicked);

		userEvent.click(websiteButton);
		userEvent.click(facebookButton);
		userEvent.click(twitterButton);

		expect(websiteButton.getAttribute(customAttribute)).toBe('true');
		expect(facebookButton.getAttribute(customAttribute)).toBe('true');
		expect(twitterButton.getAttribute(customAttribute)).toBe('true');

		websiteButton.removeEventListener('click', setClicked);
		facebookButton.removeEventListener('click', setClicked);
		twitterButton.removeEventListener('click', setClicked);
	});
});
