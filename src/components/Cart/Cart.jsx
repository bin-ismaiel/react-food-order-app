import { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  return (
    <Modal>
      <ul>
        {" "}
        {cartCtx.cart.map((item) => {
          return (
            <li key={item.id}>
              <CartItem
                name={item.name}
                count={item.count}
                price={item.price}
                item={item}
              />
            </li>
          );
        })}
      </ul>
      <div>
        <p>Total Amount:</p>
        <p>{`$${cartCtx.totalAmount.toFixed(2)}`}</p>
      </div>
      <div>
        <Button
          button={{
            onClick: () => {
              props.close();
            },
          }}
        >
          Close
        </Button>
        {cartCtx.cart.length > 0 && (
          <Button
            button={{
              onClick: () => {
                console.log("Ordering....");
              },
            }}
          >
            Order
          </Button>
        )}
      </div>
    </Modal>
  );
}
