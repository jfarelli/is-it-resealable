import { ReactNode } from 'react';

// App
export interface AppProps {
	baconStyle: string;
	companyContacts: {
		facebook?: string;
		phone?: string;
		twitter?: string;
		website?: string;
		instagram?: string;
		linkedIn?: string;
	};
	companyName: string;
	id: number | string;
	image: string;
	resealable: string;
}

// BaconBits
export interface BaconBitsProps {
	selectedBacon: AppProps | undefined;
}

// useSearchAndFilter
export interface BaconDataProps {
	baconStyle: string;
	companyName: string;
	id: string | number | undefined;
	image: string;
	resealable: string;
}

// BaconHolder
export interface BaconHolderProps {
	data: AppProps[];
	displayBaconDetails: (id: number | string) => void;
}

// Header
export interface HeaderProps {
	scrolled: boolean;
}

// ResealableConditionals
export interface ResealableConditionalsProps extends BaconBitsProps {}

// SocialMediaButtons
export interface SocialMediaButtonsProps extends BaconBitsProps {}

// SideBarNav
export interface SidebarNavProps {
	searchInput: string;
	checkboxInput: boolean;
	setCheckboxInput: (value: boolean) => void;
	setSearchInput: (value: string) => void;
	companyButtons: ReactNode;
}

// SingleBacon
export interface SingleBaconProps {
	id: number | string;
	companyName: string;
	baconStyle: string;
	resealable: string;
	image: string;
	displayBaconDetails: (id: number | string) => void;
}

export interface useSearchAndFilterProps {
	searchInput: string;
	setSearchInput: (value: string) => void;
	checkboxInput: boolean;
	setCheckboxInput: (value: boolean) => void;
	selectedCompany: string;
	companyButtons: React.JSX.Element[];
	filteredSearchData: AppProps[];
}
