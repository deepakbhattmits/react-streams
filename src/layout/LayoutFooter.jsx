/** @format */

import React from 'react';
import ErrorBoundary from '../reusable/ErrorBoundary';
const LayoutFooter = (props) => {
	// console.log(' LayoutFooter :  > ', props);
	return (
		<ErrorBoundary>
			<div className='app-footer'>Footer</div>
		</ErrorBoundary>
	);
};
export default LayoutFooter;
