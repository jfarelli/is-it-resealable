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
		<div className="flex bg-[#fdf2e3]">
			<SidebarNav
				searchInput={searchInput}
				checkboxInput={checkboxInput}
				setCheckboxInput={setCheckboxInput}
				setSearchInput={setSearchInput}
				companyButtons={companyButtons}
			/>
			<div className="flex flex-wrap justify-center gap-4 ml-72 mt-20 mb-6">
				{filteredSearchData.map((item: AppProps) => {
					return (
						<div
							key={item.id}
							className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 px-2"
						>
							<SingleBacon
								id={item.id}
								key={item.id}
								companyName={item.companyName}
								baconStyle={item.baconStyle}
								resealable={item.resealable}
								image={item.image}
								displayBaconDetails={displayBaconDetails}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BaconHolder;
