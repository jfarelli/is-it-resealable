import React from 'react';
import { Link } from 'react-router-dom';
import ResealableConditionals from './ResealableConditionals';
import { BaconBitsProps } from '../model';

const BaconBits: React.FC<BaconBitsProps> = ({ selectedBacon }) => {
	return (
		<div className="bg-[#fdf2e3]">
            {/* ^^^ removed flex flex-col items-center mt-[5%]  */}
			<Link to="/bacon-main">
				<button className="text-xl">Back to Search</button>
                {/* ^^^ removed mt-[5%] w-4 */}
			</Link>
			<div className="">
                {/* ^^^ removed flex flex-col */}
				<div className="">
                    {/* ^^^ removed flex flex-col flex-wrap items-center justify-center */}
					{selectedBacon?.resealable === '❌' ? (
						<h1 className="text-8xl mt-5 text-red-600 font-bold">NOPE!</h1>
					) : (
						<h1 className="text-8xl mt-8 text-green-600 font-bold">YUUUUUP!</h1>
					)}
					<div className="">
                        {/* ^^^ removed w-[25%] h-40 mt-[1%] aspect-w-1 aspect-h-1 */}
						<img
							// src={`http://localhost:8000/images/${selectedBacon?.image}`}
							src={`https://is-it-resealable-be.vercel.app/images/${selectedBacon?.image}`}
							alt={`${selectedBacon?.companyName} ${selectedBacon?.baconStyle}`}
							className="shadow-sm shadow-gray-600"
                            // ^^^ removed h-auto w-screen object-fill 
						/>
					</div>
				</div>
				<ResealableConditionals selectedBacon={selectedBacon} />
			</div>
		</div>
	);
};

export default BaconBits;
