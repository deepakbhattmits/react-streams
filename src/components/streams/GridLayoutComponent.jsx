import React from 'react';
import GridLayout from 'react-grid-layout';

const GridLayoutComponent = ({ layout }) => {
  return (
    <>
      <GridLayout
        className='layout'
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key='a'>A</div>
        <div key='b'>B</div>
        <div key='c'>C</div>
      </GridLayout>
    </>
  );
};
export default GridLayoutComponent;
