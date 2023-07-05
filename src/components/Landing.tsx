import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
	const colorChangeOver = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;

		if (target.id === 'getAnswersButton') {
			let resealableBackgroundColor = document.getElementById(
				'resealableTextBackground'
			);
			let resealableTextColor = document.getElementById('resealableText');

			if (resealableBackgroundColor && resealableTextColor) {
				resealableBackgroundColor.style.backgroundColor = '#9B4428';
				resealableBackgroundColor.style.color = '#F9BB38';
				resealableTextColor.style.backgroundColor = '#9B4428';
			}
		}
	};

	const colorChangeOut = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;

		if (target.id === 'getAnswersButton') {
			let resealableBackgroundColor = document.getElementById(
				'resealableTextBackground'
			);
			let resealableTextColor = document.getElementById('resealableText');

			if (resealableBackgroundColor && resealableTextColor) {
				resealableBackgroundColor.style.backgroundColor = '#F9BB38';
				resealableBackgroundColor.style.color = '#9B4428';
				resealableTextColor.style.backgroundColor = '#F9BB38';
			}
		}
	};

	return (
		<div className="flex flex-col justify-center items-center text-center bg-[#fdf2e3] text-[#9B4428] h-screen">
			<div className="container flex flex-col justify-center gap-y-8">
				<h1 className="font-bold prose-xl">
					The bacon lovers website that dares to ask one of the most important
					packaging questions:
				</h1>
				<div
					data-testid="resealableTextBackground"
					id="resealableTextBackground"
					className="flex justify-center font-bold prose-2xl w-fill bg-[#F9BB38] transition duration-270 ease-in-out"
				>
					<h1
						data-testid="resealableText"
						id="resealableText"
						className="bg-[#F9BB38] prose-lg transition duration-270 ease-in-out pt-2"
					>
						IS YOUR BACON RESEALABLE???
					</h1>
				</div>
				<h3 data-testid="prompt-text" className="font-bold sm:text-xl">
					After clicking the button below, you’ll be led to a page where you can
					start getting answers!
					<br></br>
					Search and filter by brand, bacon style, or resealability!
				</h3>
				<Link to="/bacon-main">
					<button
						id="getAnswersButton"
						className="prose-lg pt-1 px-6"
						onMouseOver={colorChangeOver}
						onMouseOut={colorChangeOut}
					>
						GET ANSWERS
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
