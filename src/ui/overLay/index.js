import reactDom from "react-dom";
import classes from "./modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideAddUser}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlay = document.getElementById("overlays");

  return (
    <>
      {reactDom.createPortal(
        <BackDrop onHideAddUser={props.onHideAddUser} />,
        overlay
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlay
      )}
    </>
  );
};
export default Modal;
