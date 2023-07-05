import React from 'react';
import { SidebarNavProps } from '../model';

const SidebarNav: React.FC<SidebarNavProps> = ({
	searchInput,
	checkboxInput,
	setCheckboxInput,
	setSearchInput,
	companyButtons,
}) => {
	return (
		<div className="flex flex-col items-center h-screen bg-[#9B4428] fixed p-4 mt-14 z-10">
			<input
				type="text"
				placeholder="Search Brand, or Style"
				value={searchInput}
				aria-label="search-input"
				onChange={(e) => setSearchInput(e.target.value)}
				className="overflow-ellipsis text-center rounded-xl border-2 bg-white hover:cursor-text mt-2"
			/>
			<div className="flex flex-col items-center">
				<label className="flex flex-col mt-2 font-bold text-center prose-lg text-[#F9BB38] italic">
					Show Only Resealable Bacon
				</label>
				<input
					type="checkbox"
					id="onlyResealableBaconAllowed"
					data-testid="checkboxInput"
					value={checkboxInput.toString()}
					onChange={(e) => setCheckboxInput(e.target.checked)}
					className="hover:cursor-pointer w-5 h-5 mb-6"
				/>
			</div>
			<div className="flex flex-col gap-2 mt-4">{companyButtons}</div>
		</div>
	);
};

export default SidebarNav;
