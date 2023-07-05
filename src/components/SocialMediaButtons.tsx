import React from 'react';
import { SocialMediaButtonsProps } from '../model';

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
	selectedBacon,
}) => {
	return (
		<div
			data-testid="social-media-buttons"
			className=""
            // ^^^ removed flex justify-center gap-8
		>
			{selectedBacon?.companyContacts?.website ? (
				<a
					href={selectedBacon?.companyContacts.website}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="text-xl">Website</button>
                    {/* ^^^ removed p-2 w-[125%] */}
				</a>
			) : (
				''
			)}
			{selectedBacon?.companyContacts?.facebook ? (
				<a
					href={selectedBacon?.companyContacts.facebook}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="text-xl">Facebook</button>
                    {/* ^^^ removed p-2 w-[125%] */}
				</a>
			) : (
				''
			)}
			{selectedBacon?.companyContacts?.twitter ? (
				<a
					href={selectedBacon?.companyContacts.twitter}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="text-xl">Twitter</button>
                    {/* ^^^ removed p-2 w-[125%] */}
				</a>
			) : (
				''
			)}
			{selectedBacon?.companyContacts?.instagram ? (
				<a
					href={selectedBacon?.companyContacts.instagram}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="text-xl">Instagram</button>
                    {/* ^^^ removed p-2 w-[125%] */}
				</a>
			) : (
				''
			)}
		</div>
	);
};

export default SocialMediaButtons;
