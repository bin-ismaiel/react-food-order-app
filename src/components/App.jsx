import { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Summary from "./Summary";
import AppContext from "../context/app-context";
const MENU = [
  { id: 1, name: "Sushi", desc: "Finest fish and veggies", price: 22.99 },
  { id: 2, name: "Schnitzel", desc: "A german specialty!", price: 16.5 },
  {
    id: 3,
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: 12.99,
  },
  { id: 4, name: "Green Bowl", desc: "Healthy...and green...", price: 18.99 },
];
export default function App() {
  const [showCart, setShowCart] = useState(false);
  const ctx = useContext(AppContext);
  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  return (
    <>
      {showCart && <Cart items={ctx.cart} close={closeCart} />}
      <Header open={openCart} />
      <Summary />

      <Menu items={MENU} />
    </>
  );
}
