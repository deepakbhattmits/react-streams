/** @format */

import { useRef } from "react";
import GridLayout from "react-grid-layout";

const GridLayoutComponent = ({ layout }) => {
  // console.log('  GridLayoutComponent :   > ', layout);
  const grid = useRef(null);
  const handleResize = (e) => {
    if (grid.current.title === "a") {
      // console.log('handleResize : ', grid.current.title);
    }
  };
  return (
    <>
      <GridLayout
        className="custom--layout layout"
        layout={layout}
        cols={12}
        rowHeight={35}
        width={1200}
      >
        <div key="a" className="A" title="a" ref={grid} onResize={handleResize}>
          A
        </div>
        <div key="b">B</div>
        <div key="c">Cc</div>
      </GridLayout>
    </>
  );
};
export default GridLayoutComponent;
