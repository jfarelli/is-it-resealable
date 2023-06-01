import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import fetchBaconData from './apiCalls';
import Landing from './components/Landing';
import Header from './components/Header';
import BaconHolder from './components/BaconHolder';
import BaconBits from './components/BaconBits';

interface Bacon {
	id: number;
}

const App: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<Bacon[]>([]);
	const [selectedBacon, setSelectedBacon] = useState<Bacon | undefined>(
		undefined
	);
	const [scrolled, setScrolled] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		fetchBaconData()
			.then(({ data }) => {
				setData(data);
			})
			.finally(() => {
				setLoading(false);
			});
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const displayBaconDetails = (id: number) => {
		if (data) {
			const foundBacon = data.find((bacon) => bacon.id == id);
			setSelectedBacon(foundBacon);
		}
	};

	return (
		<div>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route
					path="bacon-main"
					element={
						loading ? (
							<h1>Loading...</h1>
						) : (
							<>
								<Header scrolled={scrolled} />
								<BaconHolder
									data={data}
									displayBaconDetails={displayBaconDetails}
								/>
							</>
						)
					}
				/>
				<Route
					path="bacon-bits"
					element={
						loading ? (
							<h1>Loading...</h1>
						) : (
							<>
								<Header scrolled={scrolled} />
								<BaconBits selectedBacon={selectedBacon} />
							</>
						)
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
