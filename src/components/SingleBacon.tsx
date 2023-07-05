import React from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import BOO from '../sounds/boo.mp3';
import CHEER from '../sounds/cheer.mp3';
import { SingleBaconProps } from '../model';

const SingleBacon: React.FC<SingleBaconProps> = ({
	id,
	companyName,
	baconStyle,
	resealable,
	image,
	displayBaconDetails,
}) => {
	const [boo] = useSound(BOO, { volume: 0.05 });
	const [cheer] = useSound(CHEER, { volume: 0.05 });

	const handleSelectedBacon = (e: React.MouseEvent<HTMLButtonElement>) => {
		resealable === '❌' ? boo() : cheer();
		displayBaconDetails(e.currentTarget.id);
	};

	return (
		<div
			className="text-center shadow-sm shadow-gray-900 transition duration-270 ease-in-out rounded-2xl hover:shadow-md hover:shadow-gray-900"
            // ^^^ removed flex flex-col items-center h-[23em] 
			data-testid="singleBacon"
		>
			<img
				// src={`http://localhost:8000/images/${image}`}
				src={`https://is-it-resealable-be.vercel.app/images/${image}`}
				alt={`${companyName} ${baconStyle} Bacon`}
				className="object-contain rounded-tl-2xl rounded-tr-2xl"
                // ^^^ removed h-60 
			/>
			<h3 data-testid="company-name" className="font-bold text-lg">
				{companyName}
			</h3>
			<p className="italic">{baconStyle}</p>
			<p className="font-bold">IS IT RESEALABLE? {resealable}</p>
			<Link to="/bacon-bits">
				<button
					id={id.toString()}
					onClick={handleSelectedBacon}
					className="text-md"
                    // ^^^ removed w-auto h-[2.5em] flex items-center justify-center mb-2 p-4
				>
					{companyName}'s Details
				</button>
			</Link>
		</div>
	);
};

export default SingleBacon;
