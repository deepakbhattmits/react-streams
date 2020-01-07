/** @format */

import React from 'react';
import GridLayout from 'react-grid-layout';

const GridLayoutComponent = ({ layout }) => {
	// console.log('test layout :',layout)
	return (
		<>
			<GridLayout
				className='custom--layout layout'
				layout={layout}
				cols={12}
				rowHeight={35}
				width={1200}>
				<div key='a'>A</div>
				<div key='b'>B</div>
				<div key='c'>Cc</div>
			</GridLayout>
		</>
	);
};
export default GridLayoutComponent;
