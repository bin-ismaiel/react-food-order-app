import MenuItem from "./MenuItem/MenuItem";
export default function Menu(props) {
  return (
    <section>
      {props.items.map((item) => {
        return (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
          />
        );
      })}
    </section>
  );
}
