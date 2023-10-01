import Button from "../UI/Button";

import { useContext } from "react";
import CartContext from "../../context/cart-context";
export default function CartItem({ name, count, price, item }) {
  const ctx = useContext(CartContext);
  return (
    <>
      <div>
        <p>{name}</p>
        <p>
          {price}
          <span>{`x${count}`}</span>
        </p>
      </div>
      <div>
        <Button
          button={{
            onClick: () => {
              ctx.addToCart(item, 1);
            },
          }}
        >
          +
        </Button>
        <Button
          button={{
            onClick: () => {
              ctx.removeFromCart(item);
            },
          }}
        >
          -
        </Button>
      </div>
      <hr />
    </>
  );
}
