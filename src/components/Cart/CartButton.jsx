import Button from "../UI/Button";
import { useContext } from "react";
import AppContext from "../../context/app-context";
export default function CartButton(props) {
  const ctx = useContext(AppContext);
  return (
    <Button onClick={() => props.open()}>
      <img alt="cart-logo" />
      Your Cart
      <span>{ctx.totalItems}</span>
    </Button>
  );
}
