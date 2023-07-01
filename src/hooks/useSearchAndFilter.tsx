import React, { useState } from 'react';
import { AppProps, useSearchAndFilterProps } from '../model';

const useSearchAndFilter = (data: AppProps[]): useSearchAndFilterProps => {
	const [searchInput, setSearchInput] = useState<string>('');
	const [checkboxInput, setCheckboxInput] = useState<boolean>(false);
	const [selectedCompany, setSelectedCompany] = useState<string>('');

	const sortedData = data.sort((a, b) => {
		return a.companyName
			.toUpperCase()
			.localeCompare(b.companyName.toUpperCase());
	});

	const nonDuplicateNames = [
		...new Set(sortedData.map((obj) => obj.companyName)),
	];

	const filterOnButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (selectedCompany === e.currentTarget.id) {
			setSelectedCompany('');
		} else {
			setSelectedCompany(e.currentTarget.id);
		}
	};

	const companyButtons = nonDuplicateNames.map((name) => (
		<button
			key={name}
			id={name}
			data-testid="companyButton"
			onClick={filterOnButtonClick}
			className={`h-[2em] text-lg p-4 flex items-center justify-center ${
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

		const searchMatches = ['companyName', 'baconStyle'].some((prop) => {
			const propValue = item[prop as keyof AppProps];
			if (typeof propValue === 'string') {
				return propValue.toLowerCase().includes(searchInputLower);
			}
			return false;
		});

		const checkboxMatches = !checkboxInput || item.resealable === '✅';

		if (selectedCompany) {
			return (
				item.companyName === selectedCompany && searchMatches && checkboxMatches
			);
		} else {
			return searchMatches && checkboxMatches;
		}
	});

	return {
		searchInput,
		setSearchInput,
		checkboxInput,
		setCheckboxInput,
		selectedCompany,
		companyButtons,
		filteredSearchData,
	};
};

export default useSearchAndFilter;
