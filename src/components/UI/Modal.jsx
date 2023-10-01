import ReactDOM from "react-dom";
export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div>{props.children}</div>,
        document.getElementById("cart")
      )}
    </>
  );
}
