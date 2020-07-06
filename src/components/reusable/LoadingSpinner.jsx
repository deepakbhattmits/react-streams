/** @format */

import React from 'react';

const LoadingSpinner = () => {
	// console.log('LoadingSpinner');
	return (
		<div className='ui segment'>
			<div className='ui active dimmer'>
				<div className='ui large text loader'>Loading...</div>
			</div>
			<p></p>
			<p></p>
			<p></p>
		</div>
	);
};
export default LoadingSpinner;
