import React from 'react';
import SingleBacon from './SingleBacon';
import { useState } from 'react';

const BaconHolder = ({ data, displayBaconDetails }) => {
	const [searchInput, setSearchInput] = useState('');
	const [checkboxInput, setCheckboxInput] = useState(false);

	const sortedData = data.sort((a, b) => {
		return a.companyName
			.toUpperCase()
			.localeCompare(b.companyName.toUpperCase());
	});

	const companyButtons = () => {
		return sortedData.reduce((acc, data) => {
            console.log('DATA: ', data.companyName);
            if (!acc.includes(data.companyName)) {
                acc[data.companyName] = []
            }
            acc.push(data.companyName)
            return acc
        }, []);
	};

    console.log("COMPANYBUTTONS", companyButtons());

	const searchInputLower = searchInput.toLowerCase();
	const filteredSearchData = sortedData.filter((item) => {
		const searchMatches = ['companyName', 'baconStyle'].some((prop) =>
			item[prop].toLowerCase().includes(searchInputLower)
		);

		const checkboxMatches = !checkboxInput || item.resealable === '✅';

		return searchMatches && checkboxMatches;
	});

	return (
		<div className="flex mt-16 bg-[#fdf2e3]">
			<div className="flex flex-col items-center bg-[#9B4428] h-screen w-[15%] fixed pt-4">
				<input
					type="text"
					placeholder="Search For Your Favorite Brand, or Style..."
					value={searchInput}
					onChange={(event) => setSearchInput(event.target.value)}
					className="text-center border-2 mt-2 border-gray-200 bg-white hover:cursor-text w-[80%] overflow-ellipsis"
				/>
				<div className="flex flex-col items-center">
					<label className="flex flex-col font-bold uppercase text-center text-xs mt-4 text-[#F9BB38]">
						Show Only Resealable Bacon <br></br> ⬇
					</label>
					<input
						type="checkbox"
						id="onlyResealableBaconAllowed"
						value={checkboxInput}
						onChange={(event) => setCheckboxInput(event.target.checked)}
						className="form-checkbox w-fit h-5 mb-6 hover:cursor-pointer"
					/>
				</div>
				<div>{companyButtons}</div>
			</div>
			<div className="flex flex-wrap justify-center gap-8 w-[85%] mt-4 ml-[15%]">
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
