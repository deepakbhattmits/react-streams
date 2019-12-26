import React from 'react';
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'
const Layout = props => {
    return (
        <>
            <LayoutHeader />
            {props.children}
            <LayoutFooter/>
        </>
    )
}
export default Layout;