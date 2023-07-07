import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from '../model';

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
	return (
		<div
			data-testid="header-element"
			className={`flex items-center justify-center z-10 p-2 bg-[#F9BB38] text-[#9B4428] drop-shadow-2xl fixed top-0 left-0 right-0 font-bold ${
				scrolled ? 'shadow-md shadow-black-300' : ''
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
