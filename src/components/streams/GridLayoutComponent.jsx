import React from 'react'
import GridLayout from 'react-grid-layout'

const GridLayoutComponent = ({ layout }) => {
    return (
        <>
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
            </GridLayout>
        </>
    )
}
export default GridLayoutComponent;