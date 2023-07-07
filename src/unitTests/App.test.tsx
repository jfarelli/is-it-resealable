import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import App from '../App';
import { fetchBaconData } from '../apiCalls';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../apiCalls');

describe('App', () => {
	test('renders bacon data after fetching', async () => {
		const mockData = [
			{ id: 1, name: 'Bacon 1' },
			{ id: 2, name: 'Bacon 2' },
		];

		fetchBaconData.mockResolvedValue({ data: mockData });

		render(<BrowserRouter><App /></BrowserRouter>);

		expect(screen.getByText('Loading...')).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText('Bacon 1')).toBeInTheDocument();
			// expect(screen.getByText('Bacon 2')).toBeInTheDocument();
		});
	});
});
