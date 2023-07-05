import React from 'react';
import { Link } from 'react-router-dom';
import ResealableConditionals from './ResealableConditionals';
import { BaconBitsProps } from '../model';

const BaconBits: React.FC<BaconBitsProps> = ({ selectedBacon }) => {
	return (
		<div className="mt-[5%] flex flex-col items-center bg-[#fdf2e3]">
			<Link to="/bacon-main">
				<button className="text-xl mt-[5%] w-40">Back to Search</button>
			</Link>
			<div className="flex flex-col">
				<div className="flex flex-col flex-wrap items-center justify-center">
					{selectedBacon?.resealable === '❌' ? (
						<h1 className="text-8xl mt-5 text-red-600 font-bold">NOPE!</h1>
					) : (
						<h1 className="text-8xl mt-8 text-green-600 font-bold">YUUUUUP!</h1>
					)}
					<div className="w-[25%] h-40 aspect-w-1 aspect-h-1 mt-[1%]">
						<img
							// src={`http://localhost:8000/images/${selectedBacon?.image}`}
							src={`https://is-it-resealable-be.vercel.app/images/${selectedBacon?.image}`}
							alt={`${selectedBacon?.companyName} ${selectedBacon?.baconStyle}`}
							className="h-auto w-screen object-fill shadow-sm shadow-gray-600"
						/>
					</div>
				</div>
				<ResealableConditionals selectedBacon={selectedBacon} />
			</div>
		</div>
	);
};

export default BaconBits;
