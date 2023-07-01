import React from 'react';
import { SocialMediaButtonsProps } from '../model';

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
	selectedBacon,
}) => {
	return (
		<div
			data-testid="social-media-buttons"
			className="flex justify-center gap-8"
		>
			{selectedBacon?.companyContacts.website ? (
				<a
					href={selectedBacon?.companyContacts.website}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="p-2 text-xl w-[125%]">Website</button>
				</a>
			) : (
				''
			)}
			{selectedBacon?.companyContacts.facebook ? (
				<a
					href={selectedBacon?.companyContacts.facebook}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="p-2 text-xl w-[125%]">Facebook</button>
				</a>
			) : (
				''
			)}
			{selectedBacon?.companyContacts.twitter ? (
				<a
					href={selectedBacon?.companyContacts.twitter}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="p-2 text-xl w-[125%]">Twitter</button>
				</a>
			) : (
				''
			)}
			{selectedBacon?.companyContacts.instagram ? (
				<a
					href={selectedBacon?.companyContacts.instagram}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="p-2 text-xl w-[125%]">Instagram</button>
				</a>
			) : (
				''
			)}
		</div>
	);
};

export default SocialMediaButtons;
