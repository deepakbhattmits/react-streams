import React from 'react';
import GridLayout from 'react-grid-layout';

const GridLayoutComponent = ({ layout }) => {
  return (
    <>
      <GridLayout
        className='custom--layout layout'
        layout={layout}
        cols={12}
        rowHeight={35}
        width={1200}
      >
        <div key='a'>ABC</div>
        <div key='b'>BCD</div>
        <div key='c'>CDE</div>
      </GridLayout>
    </>
  );
};
export default GridLayoutComponent;
