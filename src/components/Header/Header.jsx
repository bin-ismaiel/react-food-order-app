import CartButton from "../Cart/CartButton";
import mealsImg from "../../assets/meals.jpg";
export default function Header(props) {
  return (
    <>
      <header>
        <h1>React Meals</h1>
        <CartButton open={props.open} />
      </header>
      <div>
        <img src={mealsImg} />
      </div>
    </>
  );
}
