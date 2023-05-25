const SidebarNav = ({
	searchInput,
	checkboxInput,
	setCheckboxInput,
	setSearchInput,
	companyButtons,
}) => {
	return (
		<div className="flex flex-col items-center bg-[#9B4428] h-screen w-[35%] sm:w-[15%] fixed pt-4">
			<input
				type="text"
				placeholder="Search Brand, or Style"
				value={searchInput}
				aria-label="search-input"
				onChange={(e) => setSearchInput(e.target.value)}
				className="text-center rounded-xl border-2 mt-2 bg-white hover:cursor-text w-[85%] overflow-ellipsis"
			/>
			<div className="flex flex-col items-center">
				<label className="flex flex-col font-bold text-center text-md mt-2 text-[#F9BB38] italic">
					Show Only Resealable Bacon
				</label>
				<input
					type="checkbox"
					id="onlyResealableBaconAllowed"
					data-testid="checkboxInput"
					value={checkboxInput}
					onChange={(e) => setCheckboxInput(e.target.checked)}
					className="form-checkbox w-5 h-5 mb-6 hover:cursor-pointer"
				/>
			</div>
			<div className="flex flex-col gap-2 mt-[30%]">{companyButtons}</div>
		</div>
	);
};

export default SidebarNav;
