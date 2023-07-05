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
		<div className="bg-[#9B4428] fixed">
            {/* ^^^ removed flex flex-col items-center h-screen w-[35%] sm:w-[15%] pt-4 */}
			<input
				type="text"
				placeholder="Search Brand, or Style"
				value={searchInput}
				aria-label="search-input"
				onChange={(e) => setSearchInput(e.target.value)}
				className="overflow-ellipsis text-center rounded-xl border-2 bg-white hover:cursor-text"
                // ^^^ removed w-[85%] mt-2
			/>
			<div className="">
                {/* ^^^ removed flex flex-col items-center */}
				<label className="font-bold text-center text-md text-[#F9BB38] italic">
                    {/* ^^^ removed flex flex-col mt-2  */}
					Show Only Resealable Bacon
				</label>
				<input
					type="checkbox"
					id="onlyResealableBaconAllowed"
					data-testid="checkboxInput"
					value={checkboxInput.toString()}
					onChange={(e) => setCheckboxInput(e.target.checked)}
					className="form-checkbox hover:cursor-pointer"
                    // ^^^ removed w-5 h-5 mb-6 
				/>
			</div>
			<div className="">{companyButtons}</div>
            {/* ^^^ removed flex flex-col gap-2 mt-[30%] */}
		</div>
	);
};

export default SidebarNav;
