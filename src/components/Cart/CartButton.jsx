import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "./CartIcon";
export default function CartButton(props) {
  const ctx = useContext(CartContext);
  const numOfItems = ctx.cart.reduce((curr, item) => {
    return curr + +item.count;
  }, 0);
  return (
    <Button
      button={{
        onClick: () => props.open(),
        style: { display: "flex", gap: "5px" },
      }}
    >
      <CartIcon />
      Your Cart
      <span>{numOfItems}</span>
    </Button>
  );
}
