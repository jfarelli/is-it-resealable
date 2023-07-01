import React from 'react';
import SocialMediaButtons from './SocialMediaButtons';
import { ResealableConditionalsProps } from '../model';

const ResealableConditionals: React.FC<ResealableConditionalsProps> = ({
	selectedBacon,
}) => {
	return (
		<div
			data-testid="resealable-conditionals"
			className="flex flex-col items-center mt-[8%]"
		>
			<h4 className="font-bold mb-1 text-2xl">
				{selectedBacon?.resealable === '❌' ? (
					<p>
						{selectedBacon?.companyName} does{' '}
						<span className="uppercase text-red-600 text-3xl">not</span> believe
						in resealable packaging for their{' '}
						<span className="italic">{selectedBacon?.baconStyle}!</span>
					</p>
				) : (
					<p>
						{selectedBacon?.companyName}{' '}
						<span className="uppercase text-green-600 text-3xl">believes</span>{' '}
						in resealable packaging for their{' '}
						<span className="italic">{selectedBacon?.baconStyle}</span>!
					</p>
				)}
			</h4>
			{selectedBacon?.resealable === '❌' ? (
				<p className="text-xl mb-3">
					Visit {selectedBacon?.companyName} on social media and start a
					conversation!
				</p>
			) : (
				<p className="text-xl mb-2">
					Please follow and appreciate {selectedBacon?.companyName} on Social
					Media for giving the people what they want!
				</p>
			)}
			<SocialMediaButtons selectedBacon={selectedBacon} />
			{selectedBacon?.companyContacts.phone &&
			selectedBacon?.resealable === '❌' ? (
				<>
					<p className="mt-4 font-bold text-xl">You can even Call 'em!</p>
					<p className="text-xl">{selectedBacon?.companyContacts.phone}</p>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default ResealableConditionals;
