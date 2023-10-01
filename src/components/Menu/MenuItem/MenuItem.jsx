import AddItem from "./AddItem";

export default function MenuItem({ name, desc, price, id }) {
  let formattedPrice = `$${price.toFixed(2)}`;
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>{formattedPrice}</p>
      </div>
      <AddItem name={name} price={price} id={id} />
      <hr />
    </div>
  );
}
