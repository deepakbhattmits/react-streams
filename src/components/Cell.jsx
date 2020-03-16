/** @format */

import React from 'react';
const Cell = ({ onClick, val, cellNum }) => (
	<div
		className='test cell'
		onClick={() => {
			onClick(cellNum);
		}}>
		{val}
	</div>
);
export default Cell;
