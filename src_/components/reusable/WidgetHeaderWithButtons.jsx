/** @format */

import React from 'react';
const WidgetHeaderWithButtons = ({ title, children }) => {
	//  console.log(' WidgetHeaderWithButtons    : >');
	return (
		<div className='widget-header'>
			<h1>{title}</h1>
			{children}
		</div>
	);
};
export default WidgetHeaderWithButtons;
