import { Link } from 'react-router-dom';

const Header = ({ scrolled }) => {
	return (
		<div
			className={`bg-[#9B4428] text-[#F9BB38] h-16 flex items-center justify-center drop-shadow-2xl fixed top-0 left-0 right-0 font-bold ${
				scrolled ? 'shadow-lg shadow-gray-700' : ''
			}`}
		>
			<Link to="/">
				<h1 className="bg-[#9B4428] text-3xl hover:cursor-pointer">
					Is Your Bacon Resealable???
				</h1>
			</Link>
		</div>
	);
};

export default Header;
