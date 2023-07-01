import { ReactNode } from 'react';

// App.tsx
export interface AppProps {
	baconStyle: string;
	companyContacts?: {
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
	displayBaconDetails?: (id: number | string) => void;
}

// BaconBits.tsx
export interface BaconBitsProps {
	selectedBacon: AppProps | undefined;
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

// SideBarNav
export interface SidebarNavProps {
	searchInput: string;
	checkboxInput: boolean;
	companyButtons: ReactNode;
	setCheckboxInput: (value: boolean) => void;
	setSearchInput: (value: string) => void;
}

// SingleBacon
export interface SingleBaconProps {
	id: number | string;
	baconStyle: string;
	companyName: string;
	image: string;
	resealable: string;
	displayBaconDetails: (id: number | string) => void;
}

// SocialMediaButtons
export interface SocialMediaButtonsProps extends BaconBitsProps {}

// useSearchAndFilter.tsx
export interface useSearchAndFilterProps extends SidebarNavProps {
	filteredSearchData: AppProps[];
}

// as;dlkfah'sdfloihas