export default function Button(props) {
  return <button {...props.button}>{props.children}</button>;
}
