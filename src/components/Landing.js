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
		<div className="flex flex-col text-center h-screen items-center justify-center p-10 gap-y-8">
			<h2 className="font-bold text-[#9B4428] text-3xl">
				The bacon lovers website
				<br></br>
				that dares to asks one of the most important questions:
			</h2>
			<div
				id="resealableTextBackground"
				className="font-bold bg-[#F9BB38] text-[#9B4428] py-2 px-20 rounded-tl-3xl rounded-br-3xl transition duration-270 ease-in-out"
			>
				<h1
					id="resealableText"
					className="bg-[#F9BB38] text-6xl transition duration-270 ease-in-out"
				>
					IS IT RESEALABLE???
				</h1>
			</div>
			<h3 className="font-bold text-[#9B4428] text-xl">
				After clicking the button below, you’ll be led to a page where you can
				start getting answers!
				<br></br>
				Search by brand, or filter by resealable packaging!
			</h3>

			<Link to="/bacon-main">
				<button
					id="getAnswersButton"
					className="p-4 text-3xl transition duration-270 ease-in-out"
					onMouseOver={colorChangeOver}
					onMouseOut={colorChangeOut}
				>
					Get Answers!
				</button>
			</Link>
		</div>
	);
};

export default Landing;
