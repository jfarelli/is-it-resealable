import { useState } from 'react';

const useSearchAndFilter = (data) => {
	const [searchInput, setSearchInput] = useState('');
	const [checkboxInput, setCheckboxInput] = useState(false);
	const [selectedCompany, setSelectedCompany] = useState('');

	const sortedData = data.sort((a, b) => {
		return a.companyName
			.toUpperCase()
			.localeCompare(b.companyName.toUpperCase());
	});

	const nonDuplicateNames = [
		...new Set(sortedData.map((obj) => obj.companyName)),
	];

	function filterOnButtonClick(e) {
		if (selectedCompany === e.target.id) {
			setSelectedCompany('');
		} else {
			setSelectedCompany(e.target.id);
		}
	}

	const companyButtons = nonDuplicateNames.map((name) => (
		<button
			key={name}
			id={name}
			data-testid="companyButton"
			onClick={filterOnButtonClick}
			className={`h-[2em] text-lg p-4 flex items-center justify-center transition duration-270 ease-in-out ${
				selectedCompany === name
					? 'bg-[#F9BB38] text-[#9B4428]'
					: 'bg-[#9B4428]'
			}`}
		>
			{name}
		</button>
	));

	const filteredSearchData = sortedData.filter((item) => {
		const searchInputLower = searchInput.toLowerCase();

		const searchMatches = ['companyName', 'baconStyle'].some((prop) =>
			item[prop].toLowerCase().includes(searchInputLower)
		);

		const checkboxMatches = !checkboxInput || item.resealable === '✅';

		if (selectedCompany) {
			return (
				item.companyName === selectedCompany && searchMatches && checkboxMatches
			);
		} else {
			return searchMatches && checkboxMatches;
		}
	});

	return [
		searchInput,
		setSearchInput,
		checkboxInput,
		setCheckboxInput,
		selectedCompany,
		companyButtons,
		filteredSearchData,
	];
};

export default useSearchAndFilter;
