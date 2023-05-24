import React from 'react';
import { Link } from 'react-router-dom';

const SocialMediaButtons = ({ selectedBacon }) => {
	return (
		<div
			data-testid="social-media-buttons"
			className="flex justify-center gap-8"
		>
			{selectedBacon.companyContacts.website ? (
				<Link to={selectedBacon.companyContacts.website} target="_blank">
					<button className="p-2 text-xl w-[125%] transition duration-270 ease-in-out">
						Website
					</button>
				</Link>
			) : (
				''
			)}
			{selectedBacon.companyContacts.facebook ? (
				<Link to={selectedBacon.companyContacts.facebook} target="_blank">
					<button className="p-2 text-xl w-[125%] transition duration-270 ease-in-out">
						Facebook
					</button>
				</Link>
			) : (
				''
			)}
			{selectedBacon.companyContacts.twitter ? (
				<Link to={selectedBacon.companyContacts.twitter} target="_blank">
					<button className="p-2 text-xl w-[125%] transition duration-270 ease-in-out">
						Twitter
					</button>
				</Link>
			) : (
				''
			)}
			{selectedBacon.companyContacts.instagram ? (
				<Link to={selectedBacon.companyContacts.instagram} target="_blank">
					<button className="p-2 text-xl w-[125%] transition duration-270 ease-in-out">
						Instagram
					</button>
				</Link>
			) : (
				''
			)}
		</div>
	);
};

export default SocialMediaButtons;
