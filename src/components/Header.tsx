import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
	scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
	return (
		<div
			data-testid="header-element"
			className={`bg-[#F9BB38] text-[#9B4428] h-16 z-10 flex items-center justify-center drop-shadow-2xl fixed top-0 left-0 right-0 font-bold ${
				scrolled ? 'shadow-sm shadow-gray-700' : ''
			}`}
		>
			<Link to="/">
				<h1 className="text-center bg-[#F9BB38] text-2xl sm:text-4xl hover:cursor-pointer">
					Is Your Bacon Resealable???
				</h1>
			</Link>
		</div>
	);
};

export default Header;
