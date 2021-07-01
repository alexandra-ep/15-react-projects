const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((product) => product.id !== action.payload),
    };
  }

  /*
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      })
      .filter((product) => product.amount !== 0);
    return { ...state, cart: tempCart };
  }*/

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...product, amount: product.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...product, amount: product.amount - 1 };
          }
        }
        return product;
      })
      .filter((product) => product.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, product) => {
        const { price, amount } = product;
        const productTotal = price * amount;

        cartTotal.total += productTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  throw new Error("No matching action type");
};

export default reducer;
