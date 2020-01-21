/** @format */

import React from 'react';
import ScrollIndicator from '../reusable/ScrollIndicator';
const LayoutSideBar = props => {
	const arr = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19
	];
	return (
		<ScrollIndicator id='sidebar' className='app-sidebar'>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>
			<p>SiderBar</p>

			<ul>
				{arr.map((el, i) => {
					return <li key={i}>{el}</li>;
				})}
			</ul>
		</ScrollIndicator>
	);
};
export default LayoutSideBar;
