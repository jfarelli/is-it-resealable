import { Link } from 'react-router-dom';

const BaconBits = ({ selectedBacon }) => {
	console.log('SELECTEDBACON in BACON BITS: ', selectedBacon);
	return (
		<div className="mt-20 flex flex-col items-center gap-20 p-8">
			<Link to="/bacon-main">
				<button className="transition duration-270 ease-in-out">
					Back to Search
				</button>
			</Link>
			<div className="flex items-center justify-center gap-16">
				<img
					src={`http://localhost:8000/images/${selectedBacon.image}`}
					alt=""
					// style={{ height: 'auto', width: '40%', boxShadow: '0 0 10px' }}
					className="rounded-tl-3xl rounded-br-3xl w-[35rem] shadow-sm shadow-gray-900"
				/>
				<div className="flex flex-col items-center">
					<h3 className="font-bold text-3xl">{selectedBacon.companyName}</h3>
					<h3 className="italic text-xl mb-4">{selectedBacon.baconStyle}</h3>
					<p className="font-bold mb-4 text-xl">
						{selectedBacon.resealable === '❌' ? (
							<p>
								{selectedBacon.companyName} does{' '}
								<span className="uppercase text-red-600 text-2xl">not</span>{' '}
								believe in resealable packaging!
							</p>
						) : (
							<p>
								{selectedBacon.companyName} believes in resealable packaging!
							</p>
						)}
					</p>
					{selectedBacon.resealable === '❌' ? (
						<p className="font-bold mb-4 text-xl uppercase italic text-[#9B4428] bg-[#F9BB38] text-center p-4 rounded-tl-2xl rounded-br-2xl">
							Visit {selectedBacon.companyName} on social media
							<br></br>
							and start a conversation!
						</p>
					) : (
						<p className="font-bold mb-4 text-xl uppercase italic text-[#9B4428] bg-[#F9BB38] text-center p-4 rounded-tl-2xl rounded-br-2xl">
							Please follow and appreciate {selectedBacon.companyName} on Social
							Media for giving the people what they want!
						</p>
					)}
					<div className="flex justify-evenly w-[100%] mb-4">
						{selectedBacon.companyContacts.website ? (
							<Link to={selectedBacon.companyContacts.website} target="_blank">
								<button className="w-[6.5em] transition duration-270 ease-in-out">
									Website
								</button>
							</Link>
						) : (
							''
						)}
						{selectedBacon.companyContacts.facebook ? (
							<Link to={selectedBacon.companyContacts.facebook} target="_blank">
								<button className="w-[6.5em] transition duration-270 ease-in-out">
									Facebook
								</button>
							</Link>
						) : (
							''
						)}
						{selectedBacon.companyContacts.twitter ? (
							<Link to={selectedBacon.companyContacts.twitter} target="_blank">
								<button className="w-[6.5em] transition duration-270 ease-in-out">
									Twitter
								</button>
							</Link>
						) : (
							''
						)}
						{selectedBacon.companyContacts.instagram ? (
							<Link
								to={selectedBacon.companyContacts.instagram}
								target="_blank"
							>
								<button className="w-[6.5em] transition duration-270 ease-in-out">
									Instagram
								</button>
							</Link>
						) : (
							''
						)}
					</div>
					{selectedBacon.companyContacts.phone &&
					selectedBacon.resealable === '❌' ? (
						<>
							<p className="font-bold uppercase text-center">
								You can even Call 'em! <br></br>{' '}
							</p>
							<p className="text-xl">{selectedBacon.companyContacts.phone}</p>
						</>
					) : (
						''
					)}
				</div>
				{/* <h4 className="font-bold">Nutrition Info:</h4>
			<p>Serving Size: {selectedBacon.servingSize}</p>
			<p>Calories: {selectedBacon.calories}</p>
			<p>Fat: {selectedBacon.fat}g</p>
			<p>Saturated Fat: {selectedBacon.saturatedFat}g</p>
			<p>Trans Fat: {selectedBacon.transFat}g</p>
			<p>Sodium: {selectedBacon.sodium}mg</p>
			<p>Carbs: {selectedBacon.carbs}g</p>
			<p>Protein: {selectedBacon.protein}g</p> */}
			</div>
		</div>
	);
};

export default BaconBits;
