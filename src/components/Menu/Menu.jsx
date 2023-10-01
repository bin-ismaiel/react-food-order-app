import MenuItem from "./MenuItem/MenuItem";
import Summary from "./Summary";
export default function Menu(props) {
  return (
    <section>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              <MenuItem
                name={item.name}
                price={item.price}
                desc={item.desc}
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
      <Summary />
    </section>
  );
}
