import Button from "../UI/Button";

import { useContext } from "react";
import AppContext from "../../context/app-context";
export default function CartItem({ name, count, price }) {
  const ctx = useContext(AppContext);
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>
          {price}
          <span>{`x${count}`}</span>
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            ctx.increment(name);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            ctx.decrement(name);
          }}
        >
          -
        </Button>
      </div>
      <hr />
    </div>
  );
}
