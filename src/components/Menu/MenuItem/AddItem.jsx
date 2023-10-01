import { useContext, useState } from "react";
import Button from "../../UI/Button";
import CartContext from "../../../context/cart-context";

export default function AddItem(props) {
  const [amount, setAmount] = useState(1);
  const onChangeAmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const cartCtx = useContext(CartContext);
  const addItem = () => {
    cartCtx.addToCart(
      {
        id: props.id,
        name: props.name,
        count: amount,
        price: props.price,
      },
      +amount
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor={`amount_${props.id}`}>Amount</label>
      <input
        type="number"
        id={`amount_${props.id}`}
        value={amount}
        min={1}
        onChange={onChangeAmountHandler}
      />
      <Button button={{ onClick: addItem }}>Add +</Button>
    </form>
  );
}
