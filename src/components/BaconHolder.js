import React from 'react';
import SingleBacon from './SingleBacon';
import { useState } from 'react';

const BaconHolder = ({ data, displayBaconDetails }) => {
	const [searchInput, setSearchInput] = useState('');
	const [checkboxInput, setCheckboxInput] = useState(false);

	const sortedData = data.sort((a, b) => {
		let nameA = a.companyName.toUpperCase();
		let nameB = b.companyName.toUpperCase();

		if (nameA < nameB) {
			return -1;
		}

		if (nameA > nameB) {
			return 1;
		}

		return 0;
	});

	const filteredSearchData = sortedData.filter((item) => {
		let searchMatches =
			item.companyName.toLowerCase().includes(searchInput.toLowerCase()) ||
			item.baconStyle.toLowerCase().includes(searchInput.toLowerCase());

		let checkboxMatches = !checkboxInput || item.resealable === '✅';
		return searchMatches && checkboxMatches;
	});

	return (
		<div className="flex flex-col items-center justify-center gap-2 p-4 mt-16">
			<input
				type="text"
				placeholder="Search For Your Favorite Brand, or Style..."
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
				className="text-center mt-5 border-2 border-gray-200 bg-white hover:cursor-text w-[30%] overflow-ellipsis"
			/>
			<div className="flex flex-col items-center">
				<label className="flex flex-col font-bold uppercase text-center">
					Or, Click below to Show Only Resealable Bacon
				</label>
				<input
					type="checkbox"
					id="onlyResealableBaconAllowed"
					value={checkboxInput}
					onChange={(event) => setCheckboxInput(event.target.checked)}
					className="form-checkbox w-fit h-5 mb-6 hover:cursor-pointer"
				/>
			</div>
			<div className="flex flex-wrap justify-center gap-8 w-screen">
				{filteredSearchData.map((item) => {
					return (
						<SingleBacon
							id={item.id}
							key={item.id}
							companyName={item.companyName}
							baconStyle={item.baconStyle}
							resealable={item.resealable}
							image={item.image}
							displayBaconDetails={displayBaconDetails}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default BaconHolder;
