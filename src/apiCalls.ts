export const fetchBaconData = async (): Promise<any> => {
	try {
		const response = await fetch('https://is-it-resealable-be.vercel.app/');
		if (!response.ok) {
			throw new Error('Something went wrong. Please try again!');
		}
		const json = await response.json();
		return json;
	} catch (error) {
		console.log('ERROR!!!', error);
		throw error;
	}
};
