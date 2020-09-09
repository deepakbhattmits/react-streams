/** @format */

import React from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import LayoutSideBar from './LayoutSideBar';
import ErrorBoundary from '../reusable/ErrorBoundary';
const Layout = (props) => {
	// console.log('Layout  :  >  ', props);
	return (
		<>
			<ErrorBoundary>
				<LayoutHeader />
			</ErrorBoundary>
			<ErrorBoundary>
				<LayoutSideBar />
			</ErrorBoundary>
			<ErrorBoundary>
				<main className='app-main'>{props.children}</main>
			</ErrorBoundary>
			<ErrorBoundary>
				<LayoutFooter error={true} />
			</ErrorBoundary>
		</>
	);
};
export default Layout;
