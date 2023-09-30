import { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import AppContext from "../../context/app-context";

export default function Cart(props) {
  const ctx = useContext(AppContext);
  return (
    <Modal>
      {props.items.map((item) => {
        return (
          <CartItem
            name={item.name}
            count={item.count}
            price={item.price}
            key={item.id}
          />
        );
      })}
      <div>
        <p>Total Amount:</p>
        <p>{ctx.totalAmount}</p>
      </div>
      <div>
        <Button
          onClick={() => {
            props.close();
          }}
        >
          Close
        </Button>
        <Button
          onClick={() => {
            console.log("Ordering....");
          }}
        >
          Order
        </Button>
      </div>
    </Modal>
  );
}
