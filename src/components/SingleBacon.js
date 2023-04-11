import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import BOO from '../sounds/boo.mp3';
import CHEER from '../sounds/cheer.mp3';

const SingleBacon = ({
	id,
	companyName,
	baconStyle,
	resealable,
	image,
	displayBaconDetails,
}) => {
	const [boo] = useSound(BOO, { volume: 0.05 });
	const [cheer] = useSound(CHEER, { volume: 0.05 });

	const handleSelectedBacon = (e) => {
		resealable === '❌' ? boo() : cheer();
		displayBaconDetails(e.target.id);
	};

	return (
		<div className="flex flex-col items-center justify-between text-center w-[22%] h-[24em] shadow-sm shadow-gray-900 transition duration-270 ease-in-out rounded-tl-2xl rounded-br-2xl hover:shadow-md hover:shadow-gray-900">
			<img
				src={`http://localhost:8000/images/${image}`}
				alt={`${companyName} ${baconStyle} Bacon`}
				className="h-60 rounded-tl-2xl rounded-br-2xl"
			/>
			<h3 className="font-bold text-lg">{companyName}</h3>
			<p className="italic">{baconStyle}</p>
			<p className="font-bold">IS IT RESEALABLE? {resealable}</p>
			<Link to="/bacon-bits">
				<button
					id={id}
					onClick={handleSelectedBacon}
					className="w-auto h-[2.5em] text-base mb-2 transition duration-270 ease-in-out"
				>
					{companyName}'s Bacon Bits (Details)
				</button>
			</Link>
		</div>
	);
};

export default SingleBacon;
// className="bg-[#9B4428] text-[#F9BB38] p-2 w-auto rounded-lg text-md hover:bg-[#F9BB38] hover:text-[#9B4428] hover:shadow-md hover:shadow-gray-700"
