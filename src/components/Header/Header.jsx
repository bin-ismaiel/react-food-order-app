import CartButton from "../Cart/CartButton";

export default function Header(props) {
  return (
    <header>
      <h1>React Meals</h1>
      <CartButton open={props.open} />
    </header>
  );
}
