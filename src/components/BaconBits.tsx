import React from 'react';
import { Link } from 'react-router-dom';
import ResealableConditionals from './ResealableConditionals';
import { BaconBitsProps } from '../model';

const BaconBits: React.FC<BaconBitsProps> = ({ selectedBacon }) => {
	return (
		<div className="flex flex-col items-center mt-[5%] bg-[#fdf2e3]">
			<Link to="/bacon-main">
				<button className="text-xl px-6 mb-[10%]">Back to Search</button>
			</Link>
			<div className="">
				<div className="flex flex-col items-center">
					{selectedBacon?.resealable === '❌' ? (
						<h1 className="text-8xl mt-5 text-red-600 font-bold">NOPE!</h1>
					) : (
						<h1 className="text-8xl mt-5 text-green-600 font-bold">YUUUUUP!</h1>
					)}
					<div className="image-container">
						<img
							src={`https://is-it-resealable-be.vercel.app/images/${selectedBacon?.image}`}
							alt={`${selectedBacon?.companyName} ${selectedBacon?.baconStyle}`}
							className="fixed-width-height"
						/>
					</div>
				</div>
				<ResealableConditionals selectedBacon={selectedBacon} />
			</div>
		</div>
	);
};

export default BaconBits;
