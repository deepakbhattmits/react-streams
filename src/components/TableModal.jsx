/** @format */
import { createPortal } from "react-dom";

const TableModal = (props) => {
  // console.log('TableModal : > ', props);
  const tableModalElement = (
    <div
      onClick={props.onDismiss}
      className={`ui dimmer modals transition page ${
        props.active ? "visible active" : "hidden"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`ui tiny  test modal transition scrolling ${
          props.active ? "visible active" : "hidden"
        }`}
      >
        <div className="header">{props.title.toUpperCase()}</div>
        <div className="content">
          {/* {!!props.content && (
						<ul>
							<li>{props.content.id}</li>
							<li>{props.content.name}</li>
							<li>{props.content.price}</li>
						</ul>
					)} */}
          <ul>
            {props?.content.map((item) =>
              Object.values(item).map((el, i) => {
                return (
                  <li key={i}>
                    {el.id}-{el.postId}-{el.name}
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>
  );
  return createPortal(tableModalElement, document.querySelector("#modal"));
};
export default TableModal;
