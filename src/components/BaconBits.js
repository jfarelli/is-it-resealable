import { Link } from 'react-router-dom';
import SocialMediaButtons from './SocialMediaButtons';

const BaconBits = ({ selectedBacon }) => {
	return (
		<div className="mt-[5%] flex flex-col items-center bg-[#fdf2e3]">
			<button className="text-xl w-40 transition duration-270 ease-in-out">
				<Link className="hover:cursor-pointer" to="/bacon-main">
					Back to Search
				</Link>
			</button>
			<div className="flex flex-col">
				<div className="flex flex-col flex-wrap items-center w-screen justify-center">
					{selectedBacon.resealable === '❌' ? (
						<h1 className="text-8xl mt-10 text-red-600 font-bold">NOPE!</h1>
					) : (
						<h1 className="text-8xl mt-20 text-green-600 font-bold">
							YUUUUUP!
						</h1>
					)}
					<div className="w-[25%] h-40 aspect-w-1 aspect-h-1 mt-[1%]">
						<img
							src={`http://localhost:8000/images/${selectedBacon.image}`}
							alt={`${selectedBacon.companyName} ${selectedBacon.baconStyle}`}
							className="w-full h-auto object-fill shadow-sm shadow-gray-600"
						/>
					</div>
				</div>
				<div className="flex flex-col items-center mt-[8%]">
					<h4 className="font-bold mb-1 text-2xl">
						{selectedBacon.resealable === '❌' ? (
							<p>
								{selectedBacon.companyName} does{' '}
								<span className="uppercase text-red-600 text-3xl">not</span>{' '}
								believe in resealable packaging for their{' '}
								<span className="italic">{selectedBacon.baconStyle}!</span>
							</p>
						) : (
							<p>
								{selectedBacon.companyName}{' '}
								<span className="uppercase text-green-600">believes</span> in
								resealable packaging for their{' '}
								<span className="italic">{selectedBacon.baconStyle}</span>!
							</p>
						)}
					</h4>
					{selectedBacon.resealable === '❌' ? (
						<p className="flex flex-col items-center text-xl mb-3">
							Visit {selectedBacon.companyName} on social media and start a
							conversation!
						</p>
					) : (
						<p className="mb-2">
							Please follow and appreciate {selectedBacon.companyName} on Social
							Media for giving the people what they want!
						</p>
					)}
					<SocialMediaButtons selectedBacon={selectedBacon} />
					{selectedBacon.companyContacts.phone &&
					selectedBacon.resealable === '❌' ? (
						<>
							<p className="mt-4 font-bold text-xl">
								You can even Call 'em! <br></br>{' '}
							</p>
							<p className="text-xl">{selectedBacon.companyContacts.phone}</p>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default BaconBits;
