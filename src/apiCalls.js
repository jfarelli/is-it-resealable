const fetchBaconData = async () => {
	try {
		const response = await fetch('http://localhost:8000/');
        // const response = await fetch('https://is-it-resealable-be.vercel.app/');
		if (!response.ok) {
			throw new Error(
				'Something went wrong. Please try again!'
			);
		}
		const json = await response.json();
		return json;
	} catch (error) {
		console.log('ERROR!!!', error);
	}
};

export default fetchBaconData;
