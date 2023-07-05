import React from 'react';
import { SocialMediaButtonsProps } from '../model';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaLink } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
	selectedBacon,
}) => {
	return (
		<div
			data-testid="social-media-buttons"
			className="flex justify-center gap-2"
		>
			{selectedBacon?.companyContacts?.website ? (
				<a
					href={selectedBacon?.companyContacts.website}
					target="_blank"
					rel="noopener noreferrer"
				>
					<CgWebsite className="linked-icon" />
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
					<FaTwitter className="linked-icon" />
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
					<FaInstagram className="linked-icon" />
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
					<FaFacebook className="linked-icon" />
				</a>
			) : (
				''
			)}
			{selectedBacon?.companyContacts?.linkedIn ? (
				<a
					href={selectedBacon?.companyContacts.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="linked-icon" />
				</a>
			) : (
				''
			)}
		</div>
	);
};

export default SocialMediaButtons;
