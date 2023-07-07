import * as React from 'react';
import oval from '../images/oval.svg';

const LoadingSpinner: React.FC = () => {
	return (
		<>
			<div className="loading-container">
				<img className="loading-image" src={oval} alt="loading" />
			</div>
		</>
	);
};

export default LoadingSpinner;
