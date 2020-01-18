/** @format */

import React from 'react';
import Header from '../components/Header';
const LayoutHeader = props => {
	// console.log('TEST :',props)
	return (
		<div className='header'>
			<Header />
			{/* <div>
				<ul>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
						(el, i) => {
							return (
								<li>
									<span>{el}</span>
								</li>
							);
						}
					)}
				</ul>
			</div> */}
		</div>
	);
};
export default LayoutHeader;
