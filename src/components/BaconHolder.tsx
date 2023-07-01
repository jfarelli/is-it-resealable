import React from 'react';
import SingleBacon from './SingleBacon';
import SidebarNav from './SidebarNav';
import useSearchAndFilter from '../hooks/useSearchAndFilter';
import { AppProps, BaconHolderProps } from '../model';

const BaconHolder: React.FC<BaconHolderProps> = ({
	data,
	displayBaconDetails,
}) => {
	const {
		searchInput,
		setSearchInput,
		checkboxInput,
		setCheckboxInput,
		companyButtons,
		filteredSearchData,
	} = useSearchAndFilter(data);

	return (
		<div className="flex mt-16 mb-4 bg-[#fdf2e3]">
			<SidebarNav
				searchInput={searchInput}
				checkboxInput={checkboxInput}
				setCheckboxInput={setCheckboxInput}
				setSearchInput={setSearchInput}
				companyButtons={companyButtons}
			/>
			<div className="flex flex-wrap justify-center gap-7 mt-4 ml-[15%]">
				{filteredSearchData.map((item: AppProps) => {
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
