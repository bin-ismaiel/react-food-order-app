import { useContext, useState } from "react";
import Button from "../../UI/Button";
import AppContext from "../../../context/app-context";

export default function AddItem(props) {
  const [numOfItems, setNumOfItems] = useState(1);
  const onChangeNumofItemsHandler = (e) => {
    setNumOfItems(e.target.value);
  };
  const ctx = useContext(AppContext);
  const addItem = () => {
    ctx.addToCart({
      id: Math.random(),
      name: props.name,
      count: numOfItems,
      price: props.price,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="number">Amount</label>
      <input
        type="number"
        id="number"
        value={numOfItems}
        min={1}
        onChange={onChangeNumofItemsHandler}
      />
      <Button onClick={addItem}>Add+</Button>
    </form>
  );
}
