import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import fetchBaconData from '../apiCalls';
import Landing from './components/Landing';
import Header from './components/Header';
import BaconHolder from './components/BaconHolder';
import BaconBits from './components/BaconBits';

const App = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [selectedBacon, setSelectedBacon] = useState([]);
	const [scrolled, setScrolled] = useState(false);

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
			if (window.scrollY > 50) {
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

	const displayBaconDetails = (id) => {
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
								<Header scrolled={scrolled} selectedBacon={selectedBacon} />
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
