/** @format */

import React from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import LayoutSideBar from './LayoutSideBar';
const Layout = props => {
	// console.log('TEST : ', props);
	return (
		<>
			<LayoutHeader />
			<LayoutSideBar />
			<main className='app-main'>{props.children}</main>
			<LayoutFooter />
		</>
	);
};
export default Layout;
