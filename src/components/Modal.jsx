/** @format */
import { createPortal } from "react-dom";

const Modal = (props) => {
  //  console.log('Modal   >: ', props);
  return createPortal(
    <div
      onClick={props.onDismiss}
      // className={`ui dimmer page ${
      // 	!!props.title ? 'visible active' : 'hidden'
      // }`}
      className={`ui dimmer modals transition custom-dimmer ${
        !!props.title ? "visible active" : "hidden"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        // className={`ui mini modal ${
        // 	!!props.title ? 'visible active' : 'hidden'
        //   }`}
        className={`ui mini modal transition ${
          !!props.title ? "visible active" : "hidden"
        }`}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
