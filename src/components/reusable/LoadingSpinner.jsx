/** @format */

import React from 'react';

const LoadingSpinner = () => {
	return (
		<div className='ui segment'>
			<div className='ui active dimmer'>
				<div className='ui massive text loader'>Loading</div>
			</div>
			<p></p>
			<p></p>
			<p></p>
		</div>
	);
};
export default LoadingSpinner;
