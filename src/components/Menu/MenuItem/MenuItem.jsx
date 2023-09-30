import AddItem from "./AddItem";

export default function MenuItem({ name, desc, price }) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>{price}</p>
      </div>
      <AddItem name={name} price={price} />
      <hr />
    </div>
  );
}
