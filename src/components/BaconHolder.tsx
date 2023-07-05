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
		<div className="grid bg-[#fdf2e3]">
			<SidebarNav
				searchInput={searchInput}
				checkboxInput={checkboxInput}
				setCheckboxInput={setCheckboxInput}
				setSearchInput={setSearchInput}
				companyButtons={companyButtons}
			/>
			<div className="grid grid-cols-4 gap-4 ml-72 mr-8 mt-20 mb-6">
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
