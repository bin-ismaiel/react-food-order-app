import React, { useReducer } from "react";
const AppContext = React.createContext({
  cart: [],
  addToCart: () => {},
  totalAmount: 0,
  totalItems: 0,
  setTotalAmount: () => {},
  setTotalItems: () => {},
});
const CART = [];

export function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    cart: CART,
    totalAmount: getTotalAmount(CART),
    totalItems: getTotalItems(CART),
  });

  function reducer(prevState, action) {
    let itemIdx = null;

    switch (action.type) {
      case "ADD_ITEM":
        if (
          prevState.cart.some((item, idx) => {
            itemIdx = idx;
            return item.name === action.payload.name;
          })
        ) {
          console.log(prevState.cart[itemIdx].count);
          prevState.cart[itemIdx].count =
            +prevState.cart[itemIdx].count + +action.payload.count / 2;
          return {
            cart: [...prevState.cart],
            totalAmount: getTotalAmount([...prevState.cart]),
            totalItems: getTotalItems([...prevState.cart]),
          };
        } else {
          return {
            cart: [...prevState.cart, action.payload],
            totalAmount: getTotalAmount([...prevState.cart, action.payload]),
            totalItems: getTotalItems([...prevState.cart, action.payload]),
          };
        }

      case "INCREMENT":
        if (
          prevState.cart.some((item, idx) => {
            itemIdx = idx;
            return item.name === action.payload;
          })
        ) {
          console.log(prevState.cart[itemIdx].count);
          prevState.cart[itemIdx].count =
            +prevState.cart[itemIdx].count + 1 / 2;
          return {
            cart: [...prevState.cart],
            totalAmount: getTotalAmount([...prevState.cart]),
            totalItems: getTotalItems([...prevState.cart]),
          };
        }
        break;
      case "DECREMENT":
        if (
          prevState.cart.some((item, idx) => {
            itemIdx = idx;
            return item.name === action.payload;
          })
        ) {
          console.log(prevState.cart[itemIdx].count);
          if (prevState.cart[itemIdx].count === 1) {
            console.log("i cant");
          } else {
            prevState.cart[itemIdx].count =
              +prevState.cart[itemIdx].count - 1 / 2;
          }

          return {
            cart: [...prevState.cart],
            totalAmount: getTotalAmount([...prevState.cart]),
            totalItems: getTotalItems([...prevState.cart]),
          };
        }
        break;
    }
  }

  function getTotalItems(cart) {
    let count = 0;
    cart.forEach((element) => {
      count = +count + element.count;
    });
    return count;
  }
  function getTotalAmount(cart) {
    let count = 0;
    cart.forEach((element) => {
      count = +count + element.price * element.count;
    });
    return count;
  }

  function addToCart(item) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }
  function increment(name) {
    console.log(name);
    dispatch({ type: "INCREMENT", payload: name });
  }
  function decrement(name) {
    dispatch({ type: "DECREMENT", payload: name });
  }
  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        addToCart: addToCart,
        totalAmount: +state.totalAmount,
        totalItems: +state.totalItems,
        increment: increment,
        decrement: decrement,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
