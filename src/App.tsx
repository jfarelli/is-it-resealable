import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import fetchBaconData from './apiCalls';
import Landing from './components/Landing';
import Header from './components/Header';
import BaconHolder from './components/BaconHolder';
import BaconBits from './components/BaconBits';
import { AppProps } from './model';

const App: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<AppProps[]>([]);
	const [selectedBacon, setSelectedBacon] = useState<AppProps>(); // LEFT OFF HERE!!!!!! CONSOLE.LOG IN BACONBITS TO SEE WHAT'S BROUGHT IN!!
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

	const displayBaconDetails = (id: number | string) => {
		if (data) {
			const foundBacon = data.find((bacon) => {
				let stringBacon = bacon.id.toString();
				return stringBacon == id;
			});
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
