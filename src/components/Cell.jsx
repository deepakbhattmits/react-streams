/** @format */
const Cell = ({ onClick, val, cellNum }) => {
  //  console.log('Cell :>', val.length);
  return (
    <div
      className={`${
        val.length !== 0 ? (val === "X" ? "cross " : "zero ") : ""
      }cell
			`}
      onClick={() => {
        onClick(cellNum);
      }}
    >
      {val}
    </div>
  );
};
export default Cell;
