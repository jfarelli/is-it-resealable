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
			className="text-center shadow-sm shadow-gray-900 rounded-2xl bg-white"
			data-testid="singleBacon"
		>
			<img
				src={`https://is-it-resealable-be.vercel.app/images/${image}`}
				alt={`${companyName} ${baconStyle} Bacon`}
				className="single-bacon-cards object-contain h-52 w-full"
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
					className="text-md w-[75%] mb-2"
				>
					{companyName}'s Details
				</button>
			</Link>
		</div>
	);
};

export default SingleBacon;
