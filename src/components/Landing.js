// import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
	const colorChangeOver = (e) => {
		if (e.target.id === 'getAnswersButton') {
			let resealableBackgroundColor = document.getElementById(
				'resealableTextBackground'
			);
			let resealableTextColor = document.getElementById('resealableText');

			resealableBackgroundColor.style.backgroundColor = '#9B4428';
			resealableBackgroundColor.style.color = '#F9BB38';
			resealableTextColor.style.backgroundColor = '#9B4428';
		}
	};

	const colorChangeOut = (e) => {
		if (e.target.id === 'getAnswersButton') {
			let resealableBackgroundColor = document.getElementById(
				'resealableTextBackground'
			);
			let resealableTextColor = document.getElementById('resealableText');

			resealableBackgroundColor.style.backgroundColor = '#F9BB38';
			resealableBackgroundColor.style.color = '#9B4428';
			resealableTextColor.style.backgroundColor = '#F9BB38';
		}
	};

	return (
		<div className="flex flex-col text-center h-screen items-center justify-center px-10 gap-y-8 bg-[#fdf2e3] text-[#9B4428]">
			<h2 className="font-bold text-2xl sm:text-3xl">
				The bacon lovers website
				<br></br>
				that dares to asks one of the most important question:
			</h2>
			<div
				data-testid="resealableTextBackground"
				id="resealableTextBackground"
				className="font-bold bg-[#F9BB38] py-2 px-10 rounded-tl-3xl rounded-br-3xl transition duration-270 ease-in-out"
			>
				<h1
					data-testid="resealableText"
					id="resealableText"
					className="bg-[#F9BB38] pt-1 text-3xl transition duration-270 ease-in-out sm:text-6xl sm:pt-3"
				>
					IS IT RESEALABLE???
				</h1>
			</div>
			<h3 className="font-bold sm:text-xl">
				After clicking the button below, you’ll be led to a page where you can
				start getting answers!
				<br></br>
				Search and filter by brand, or bacon style!
			</h3>

			<button
				id="getAnswersButton"
				className="p-2 sm:p-4 text-1xl sm:text-3xl transition duration-270 ease-in-out"
				onMouseOver={colorChangeOver}
				onMouseOut={colorChangeOut}
			>
				<Link className="hover:cursor-pointer" to="/bacon-main">Get Answers!</Link>
			</button>
		</div>
	);
};

export default Landing;
