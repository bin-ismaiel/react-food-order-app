import React, { useReducer } from "react";
const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalAmount: 0,
  totalItems: 0,
  setTotalAmount: () => {},
  setTotalItems: () => {},
});

export function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    cart: [],
    totalAmount: 0,
    totalItems: 0,
  });

  function cartReducer(prevState, action) {
    let updatedItem;
    let updatedItemIdx;
    let updatedItems;
    let updatedTotalItems = prevState.cart.reduce((curr, item) => {
      return curr + +item.count;
    }, 0);
    let updatedTotalAmount = prevState.cart.reduce((curr, item) => {
      return curr + item.price * +item.count;
    }, 0);
    switch (action.type) {
      case "ADD_ITEM":
        updatedItemIdx = prevState.cart.findIndex((item) => {
          return item.name === action.item.name;
        });
        if (updatedItemIdx !== -1) {
          prevState.cart[updatedItemIdx] = {
            ...prevState.cart[updatedItemIdx],
            count: prevState.cart[updatedItemIdx].count + action.count / 2,
          };
          updatedTotalAmount =
            +prevState.updatedTotalAmount +
            (+prevState.cart[updatedItemIdx].price * +action.count) / 2;
          updatedItems = [...prevState.cart];
        } else {
          updatedItems = prevState.cart.concat(action.item);
        }
        return {
          cart: updatedItems,
          totalAmount: +updatedTotalAmount,
          totalItems: +updatedTotalItems,
        };
      case "REMOVE_ITEM":
        updatedItemIdx = prevState.cart.findIndex((item) => {
          return item.name === action.item.name;
        });

        if (updatedItemIdx !== -1) {
          if (prevState.cart[updatedItemIdx].count > 0) {
            prevState.cart[updatedItemIdx] = {
              ...prevState.cart[updatedItemIdx],
              count: prevState.cart[updatedItemIdx].count - 1 / 2,
            };
          } else {
            updatedItems = [
              ...prevState.cart.filter((item) => {
                return item.name !== action.item.name;
              }),
            ];
          }

          updatedTotalAmount = prevState.totalAmount - action.item.price;
          updatedTotalItems = prevState.totalItems - action.item.count;
        } else {
          updatedItems = prevState.cart;
        }
        return {
          cart: updatedItems,
          totalAmount: updatedTotalAmount,
          totalItems: updatedTotalItems,
        };
    }
  }

  function addToCart(item, count) {
    dispatchCartAction({ type: "ADD_ITEM", item: item, count: count });
  }
  function removeFromCart(item) {
    dispatchCartAction({ type: "REMOVE_ITEM", item: item });
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        addToCart: addToCart,
        totalAmount: +cartState.totalAmount,
        totalItems: +cartState.totalItems,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContext;
