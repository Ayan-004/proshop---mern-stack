export const addDecimals = (num) => {
  return Math.round(num * 100) / 100;
};

export const updateCart = (state) => {
  //Calculate item price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  ).toFixed(2);

  //Calculate shipping price (if order is over 2000rs then free, over 50rs shipping charges )
  state.shippingPrice = addDecimals(state.itemPrice > 2000 ? 0 : 50).toFixed(2);

  //Calculate tax price (12% tax)
  state.taxPrice = addDecimals(Number((0.12 * state.itemPrice).toFixed(2)));

  //Calculate total price
  state.totalPrice = (
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
