/** @format */

import React from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
const Layout = props => {
	console.log('TEST : ', props);
	return (
		<>
			<LayoutHeader />
			{props.children}
			<LayoutFooter />
		</>
	);
};
export default Layout;
